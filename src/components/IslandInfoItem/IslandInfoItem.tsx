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

    useEffect(() => {
        const imgElement = imageRef.current;

        const observer= new IntersectionObserver(entries => {
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
