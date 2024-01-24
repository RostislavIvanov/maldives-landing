import { FC, useContext } from "react";
import blackArrow from "../../assets/icons/black-arrow.svg";
import { SliderContext } from "~/components/Slider/Slider.tsx";
import classes from "./Arrows.module.css";

const Arrows: FC = () => {
    const { changeSlide } = useContext(SliderContext);

    return (
        <div className={classes.arrows}>
            <div className={`${classes.arrow} ${classes.arrow__left}`} onClick={() => changeSlide(-1)}>
                <img src={blackArrow} alt='Left'/>
            </div>
            <div className={`${classes.arrow} ${classes.arrow__right}`} onClick={() => changeSlide(1)}>
                <img src={blackArrow} alt='Rigth'/>
            </div>
        </div>
    )
}

export default Arrows
