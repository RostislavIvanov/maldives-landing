import classes from './MainScreenContent.module.css';
import Arrow from '~/assets/icons/Arrow.svg';
import Header from '../Header/Header.tsx';
import HugeTitle from '../HugeTitle/HugeTitle.tsx';
import { scrollToElement } from '~/utils/ScrollToElement/ScrollToElement.ts';

const MainScreenContent = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content__container}>
                <Header handleLinkClick={scrollToElement}/>
                <HugeTitle/>
                <div onClick={e => scrollToElement(e, 'about')} className={classes.content__arrow}>
                    <img src={Arrow} alt='Arrow'/>
                </div>
            </div>
        </div>
    );
};

export default MainScreenContent;
