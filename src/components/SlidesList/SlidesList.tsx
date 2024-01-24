import { FC, useContext } from "react";
import { SliderContext } from "~/components/Slider/Slider.tsx";
import classes from "./SlidesList.module.css";
import Slide from "~/components/Slide/Slide.tsx";

const SlidesList: FC = () => {
    const { slideNumber, images } = useContext(SliderContext);

    return (
        <div className={classes.slidesWindow}>
            <div
                className={classes.slidesList}
                style={{ transform: `translateX(-${slideNumber * 100}%)` }}
            >
                {images.map((image, index) =>
                    <Slide key={`slide-${index}`} image={image}/>
                )}
            </div>
        </div>
    )
}

export default SlidesList
