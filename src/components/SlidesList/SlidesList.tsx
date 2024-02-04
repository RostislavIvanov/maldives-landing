import { FC, useContext } from "react";
import classes from "./SlidesList.module.css";
import Slide from "~/components/Slide/Slide.tsx";
import SliderContext from "~/utils/SliderContext/SliderContext.ts";

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
