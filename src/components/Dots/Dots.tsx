import { FC, useContext } from "react";
import { SliderContext } from "~/components/Slider/Slider.tsx";
import Dot from "~/components/Dot/Dot.tsx";
import classes from "./Dots.module.css";

const Dots: FC = () => {
    const { slidesCount } = useContext(SliderContext);

    const renderDots = () => {
        const dots = []
        for (let i = 0; i < slidesCount; i++) {
            dots.push(<Dot key={`dot-${i}`} number={i}/>)
        }
        return dots
    }

    return (
        <div className={classes.dots}>
            {renderDots()}
        </div>
    )
}

export default Dots
