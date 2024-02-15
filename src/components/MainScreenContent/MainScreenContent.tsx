import classes from './MainScreenContent.module.css';
import Arrow from '~/assets/icons/Arrow.svg';
import Header from '../Header/Header.tsx';
import HugeTitle from '../HugeTitle/HugeTitle.tsx';

const MainScreenContent = () => {
    const handleClick = (e: React.MouseEvent<HTMLElement>, link: string) => {
        e.preventDefault();
        const el = document.getElementById(link);
        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    return (
        <div className={classes.content}>
            <div className={classes.content__container}>
                <Header handleLinkClick={handleClick}/>
                <HugeTitle/>
                <div onClick={e => handleClick(e, 'about')} className={classes.content__arrow}>
                    <img src={Arrow} alt='Arrow'/>
                </div>
            </div>
        </div>
    );
};

export default MainScreenContent;
