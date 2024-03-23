import classes from './Feedback.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import Slider from '~/components/Slider/Slider.tsx';
import fb1 from '~/assets/images/feedback-1.jpg';
import fb2 from '~/assets/images/feedback-2.jpg';
import fb3 from '~/assets/images/feedback-3.jpg';
import fb4 from '~/assets/images/feedback-4.jpg';
import fb5 from '~/assets/images/feedback-5.jpg';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const Feedback = () => {
    const t = useTranslate('feedback');

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <BlockTitle>
                    {t('title')}
                </BlockTitle>
                <div className={classes.sliderCon}>
                    <Slider objectFitStyle={'contain'} autoPlay={true} autoPlayTime={8000}
                            images={[ fb1, fb2, fb3, fb4, fb5 ]}/>
                </div>
            </div>
        </div>
    );
};

export default Feedback;
