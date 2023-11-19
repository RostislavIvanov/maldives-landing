import classes from "./IslandInfoItem.module.css";
import { FC, useEffect, useRef } from "react";

interface IIslandInfoItemProps {
    img: any;
    subtitle: string;
    text: string;
}

const IslandInfoItem: FC<IIslandInfoItemProps> = ({ img, text, subtitle }) => {
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const observer1 = useRef<IntersectionObserver>();

    useEffect(() => {
        const textElement = textRef.current;

        observer1.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting) {
                imageRef.current?.classList.remove(classes.slideToLeft);
                imageRef.current?.classList.add(classes.slideToRight);
            } else {
                if (imageRef.current?.classList.contains(classes.slideToRight)) {
                    imageRef.current?.classList.remove(classes.slideToRight);
                    imageRef.current?.classList.add(classes.slideToLeft);
                }
            }
        }, {});

        textElement && observer1.current.observe(textElement);

        return () => observer1.current?.disconnect();
    }, []);

    return (
        <div className={classes.islandInfo}>

            <div className={classes.islandInfo__con}>
                <div className={classes.islandInfo__imgContainer} ref={imageRef}>
                    <img src={img} alt=""/>
                </div>
            </div>

            <div className={classes.islandInfo__con} ref={textRef}>

                <h5 className={classes.islandInfo__subtitle}>
                    {subtitle}
                </h5>

                {/*<div className={'w-1/5 border-blue border-b-2'}></div>*/}

                <p className={classes.islandInfo__text}>
                    {text}
                </p>

            </div>

        </div>
    );
};

export default IslandInfoItem;
