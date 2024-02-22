import { FC } from 'react';
import classes from './Slide.module.css';

type SlideProps = {
    image: string;
    objectFitStyle?: 'cover' | 'contain';
}

const Slide: FC<SlideProps> = ({ image, objectFitStyle = 'cover' }) => {
    return (
        <div className={classes.slide}>
            <img className={classes.slide__image} style={{ objectFit: objectFitStyle }} src={image} alt=''/>
        </div>
    );
};

export default Slide;
