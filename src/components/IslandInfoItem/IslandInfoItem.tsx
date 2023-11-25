import classes from "./IslandInfoItem.module.css";
import { FC, useEffect, useRef } from "react";

interface IIslandInfoItemProps {
    img: any;
    subtitle: string;
    text: string;
}

const IslandInfoItem: FC<IIslandInfoItemProps> = ({ img, text, subtitle }) => {
    const textRef = useRef<HTMLDivElement>(null); // элемент с текстом
    const imageRef = useRef<HTMLDivElement>(null); // элемент с фоткой
    const initialOffset = useRef(0);
    const pictureBlockHeight = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            // @ts-ignore
            const offset = (scrollY) + window.innerHeight / 2 - initialOffset.current; // TODO вот тут подумать
            if(text === 'Тут я пока текст не придумал') {
                // @ts-ignore
                console.log([(scrollY) + window.innerHeight/2 - initialOffset.current, scrollY + window.innerHeight, initialOffset.current + window.innerHeight /2])
            }


            // @ts-ignore
            if (textRef.current && scrollY + window.innerHeight > initialOffset.current + window.innerHeight /2  && offset <=500) { // TODO условие момента, когда нужно добавлять оффсет работает только с одним компонентом
                textRef.current.style.transform = `translateY(${offset}px)`;
            }
        };

        const setInitialOffset = () => {
            if (textRef.current) {
                const rect = textRef.current.getBoundingClientRect();
                initialOffset.current = rect.top;
            }
        };

        setInitialOffset(); // Получаем изначальное смещение при монтировании компонента
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const imgElement = imageRef.current;

        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                imgElement?.classList.remove(classes.slideToLeft);
                imgElement?.classList.add(classes.slideToRight);
            } else {
                if (imgElement?.classList.contains(classes.slideToRight)) {
                    imgElement?.classList.remove(classes.slideToRight);
                    imgElement?.classList.add(classes.slideToLeft);
                }
            }
        }, {});

        textRef.current && observer.observe(textRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className={classes.islandInfo}>
            <div className={classes.islandInfo__con}>
                <div className={classes.islandInfo__imgContainer} ref={imageRef}>
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className={classes.islandInfo__con} ref={textRef}>
                <div ref={pictureBlockHeight}>
                    <h5 className={classes.islandInfo__subtitle}>
                        {subtitle}
                    </h5>
                    <p className={classes.islandInfo__text}>
                        {text}
                    </p>
                </div>
            </div>

        </div>
    );
};

export default IslandInfoItem;
