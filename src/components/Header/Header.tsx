import logo from '~/assets/icons/logo-white.svg';
import classes from './Header.module.css';
import { FC } from 'react';
import BurgerMenu from '~/components/BurgerMenu/BurgerMenu.tsx';
import { useTranslation } from 'react-i18next';
import LangSwitch from '~/components/UI/LangSwitch/LangSwitch.tsx';

type HeaderProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void
}
const Header: FC<HeaderProps> = ({ handleLinkClick }) => {
    const { t } = useTranslation('global');
    return (
        <>
            <BurgerMenu handleLinkClick={handleLinkClick}/>
            <div className={classes.header}>
                <nav className={classes.nav}>
                    <ul className={classes.nav__left}>
                        <li><a href="#about" onClick={e => handleLinkClick(e, 'about')}>
                            {t('header.nav.about')}
                        </a></li>
                        <li><a href="#excursions" onClick={e => handleLinkClick(e, 'excursions')}>
                            {t('header.nav.excursions')}
                        </a></li>
                        <li><a href="#accommodation" onClick={e => handleLinkClick(e, 'accommodation')}>
                            {t('header.nav.accommodation')}
                        </a></li>
                    </ul>
                    <div className={classes.nav__logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={classes.nav__right}>
                        <li><a href="#features" onClick={e => handleLinkClick(e, 'features')}>
                            {t('header.nav.features')}
                        </a></li>
                        <li><a href="#contacts" onClick={e => handleLinkClick(e, 'contacts')}>
                            {t('header.nav.contacts')}
                        </a></li>
                        <li className={classes.nav__switch}>
                            <LangSwitch/>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
