import classes from './BurgerMenu.module.css';
import logo from '~/assets/icons/logo-black.svg';
import { FC, useState } from 'react';
import whatsApp from '~/assets/icons/WhatsApp.svg';
import viber from '~/assets/icons/Viber.svg';
import inst from '~/assets/icons/Instagram.svg';
import telegram from '~/assets/icons/Telegram.svg';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

type BurgerMenuProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void
}
const BurgerMenu: FC<BurgerMenuProps> = ({ handleLinkClick }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const t = useTranslate('header');
    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleBurgerClickLink = (e: React.MouseEvent<HTMLElement>, link: string) => {
        setIsMenuOpen(false);
        handleLinkClick(e, link);
    };

    return (
        <>
            <div className={classes.burger} onClick={handleMenu}>
                <span/>
            </div>
            <div className={`${isMenuOpen && classes.openMenu} ${classes.burger__menu}`}>
                <div className={classes.burger__logo}>
                    <img src={logo} alt='Rosy Villa'/>
                    <div onClick={handleMenu}/>
                </div>
                <ul className={classes.burger__list}>
                    <li onClick={(e) => handleBurgerClickLink(e, 'about')}>
                        {t('nav.about')}
                    </li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'excursions')}>
                        {t('nav.excursions')}
                    </li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'accommodation')}>
                        {t('nav.accommodation')}
                    </li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'features')}>
                        {t('nav.features')}
                    </li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'contacts')}>
                        {t('nav.contacts')}
                    </li>
                </ul>
                <div className={classes.burger__icons}>

                    <a target='_blank' rel='noopener noreferrer'
                       href='https://api.whatsapp.com/send/?phone=79858982743'>
                        <img src={whatsApp} alt='whatsApp'/>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='viber://chat?number=%2B9609994740'>
                        <img src={viber} alt='viber'/>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://t.me/veterperementur'>
                        <img src={telegram} alt='telegram'/>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/rosyvilla_maldives/'>
                        <img src={inst} alt='inst'/>
                    </a>
                </div>
            </div>
            {isMenuOpen && <div className={classes.blur} onClick={handleMenu}/>}
        </>
    );
};

export default BurgerMenu;
