import { FC, useContext } from "react";
import { SliderContext } from "~/components/Slider/Slider.tsx";
import classes from "./Dot.module.css";

type DotProps = {
    number: number;
}

const Dot: FC<DotProps> = ({ number }) => {
    const { goToSlide, slideNumber } = useContext(SliderContext)

    return <div
        className={`${classes.dot} ${slideNumber === number ? classes.selected : ''}`}
        onClick={() => goToSlide(number)}
    />
}

export default Dot
