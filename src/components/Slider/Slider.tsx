import { FC, useEffect, useState } from 'react';
import * as React from 'react';
import Arrows from '~/components/Arrows/Arrows.tsx';
import Dots from '~/components/Dots/Dots.tsx';
import classes from './Slider.module.css';
import SlidesList from '~/components/SlidesList/SlidesList.tsx';
import SliderContext from '~/utils/SliderContext/SliderContext.ts';

type SliderProps = {
    autoPlay: boolean;
    autoPlayTime: number;
    images: string[];
}

type TouchPosition = number | null

const Slider: FC<SliderProps> = ({ autoPlay, autoPlayTime, images }) => {
    const [ slide, setSlide ] = useState(0);
    const [ touchPosition, setTouchPosition ] = useState<TouchPosition>(null)

    const changeSlide = (direction = 1) => {
        let slideNumber;

        if (slide + direction < 0) {
            slideNumber = images.length - 1;
        } else {
            slideNumber = (slide + direction) % images.length;
        }

        setSlide(slideNumber);
    };

    const goToSlide = (number: number) => {
        setSlide(number % images.length);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const touchDown = e.touches[0].clientX;
        setTouchPosition(touchDown);
    }

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchPosition === null) {
            return;
        }

        const currentPosition = e.touches[0].clientX;
        const direction = touchPosition - currentPosition;

        if (direction > 10) {
            changeSlide(1);
        }

        if (direction < -10) {
            changeSlide(-1);
        }

        setTouchPosition(null);
    }

    useEffect(() => {
        if (!autoPlay) return;

        const interval = setInterval(() => {
            changeSlide(1);
        }, autoPlayTime);

        return () => {
            clearInterval(interval);
        };
    }, [ images.length, slide ]);

    useEffect(() => {
        setSlide(0)
    }, [ images.length ]);

    return (
        <div className={classes.slider} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
            <SliderContext.Provider
                value={{
                    goToSlide,
                    changeSlide,
                    slidesCount: images.length,
                    slideNumber: slide,
                    images,
                }}
            >
                <SlidesList/>
                {images.length > 1 && <Dots/>}
                {images.length > 1 && <Arrows/>}
            </SliderContext.Provider>
        </div>
    )
}

export default Slider
