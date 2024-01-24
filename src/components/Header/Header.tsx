import logo from "../../assets/icons/logo-without-back.svg";
import classes from "./Header.module.css";
import { FC } from "react";

type HeaderProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, link: string) => void
}
const Header: FC<HeaderProps> = ({ handleLinkClick }) => {
    return (
            <div className={classes.header}>
                <nav className={classes.nav}>
                    <ul className={classes.nav__left}>
                        <li><a onClick={e => handleLinkClick(e, 'about')}>Об острове</a></li>
                        <li><a onClick={e => handleLinkClick(e, 'excursions')}>Экскурсии</a></li>
                        <li><a onClick={e => handleLinkClick(e, 'accommodation')}>Размещение</a></li>
                    </ul>
                    <div className={classes.nav__logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={classes.nav__right}>
                        <li><a onClick={e => handleLinkClick(e, 'features')}>Наши программы</a></li>
                        <li><a onClick={e => handleLinkClick(e, 'prices')}>Цены и контакты</a></li>
                    </ul>
                </nav>
            </div>
    );
};

export default Header;
