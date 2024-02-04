import logo from "../../assets/icons/logo-white.svg";
import classes from "./Header.module.css";
import { FC } from "react";
import BurgerMenu from "~/components/BurgerMenu/BurgerMenu.tsx";

type HeaderProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void
}
const Header: FC<HeaderProps> = ({ handleLinkClick }) => {
    return (
        <>
            <BurgerMenu handleLinkClick={handleLinkClick}/>
            <div className={classes.header}>
                <nav className={classes.nav}>
                    <ul className={classes.nav__left}>
                        <li><a href='#about' onClick={e => handleLinkClick(e, 'about')}>Об острове</a></li>
                        <li><a href='#excursions' onClick={e => handleLinkClick(e, 'excursions')}>Экскурсии</a></li>
                        <li><a href='#accommodation' onClick={e => handleLinkClick(e, 'accommodation')}>Размещение</a></li>
                    </ul>
                    <div className={classes.nav__logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={classes.nav__right}>
                        <li><a href='#features' onClick={e => handleLinkClick(e, 'features')}>Наши программы</a></li>
                        <li><a href='#prices' onClick={e => handleLinkClick(e, 'prices')}>Цены и контакты</a></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Header;
