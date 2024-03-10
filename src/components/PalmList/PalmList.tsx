import { useEffect, useRef } from 'react';
import palm from '~/assets/images/palmList.png';
import palm2 from '~/assets/images/palmList-2.png';
import classes from './PalmList.module.css';

const PalmList = () => {
    const palmRef = useRef<HTMLDivElement>(null);
    const palmPosition = () => {
        if (palmRef.current) {
            const translateY = window.scrollY / 4;
            palmRef.current.style.transform = `translateY(${translateY}px)`;
        }
        requestAnimationFrame(palmPosition);
    };
    useEffect(() => {
        requestAnimationFrame(palmPosition);
        return () => {
            window.removeEventListener('scroll', palmPosition);
        };
    }, []);

    return (
        <div ref={palmRef} className={classes.palm}>
            <div className={classes.palmItem}>
                <img src={palm} alt=""/>
            </div>
            <div className={classes.palmItem}>
                <img src={palm2} alt=""/>
            </div>
        </div>
    );
};

export default PalmList;
