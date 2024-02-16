import { FC } from 'react';
import classes from './Slide.module.css';

type SlideProps = {
    image: string;
}

const Slide: FC<SlideProps> = ({ image }) => {
    return (
        <div className={classes.slide}>
            <img className={classes.slide__image} src={image} alt=''/>
        </div>
    );
};

export default Slide;
