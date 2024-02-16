import { FC, useContext } from 'react';
import classes from './Dot.module.css';
import SliderContext from '~/utils/SliderContext/SliderContext.ts';

type DotProps = {
    number: number;
}

const Dot: FC<DotProps> = ({ number }) => {
    const { goToSlide, slideNumber } = useContext(SliderContext);

    return <div
        className={`${classes.dot} ${slideNumber === number ? classes.selected : ''}`}
        onClick={() => goToSlide(number)}
    />;
};

export default Dot;
