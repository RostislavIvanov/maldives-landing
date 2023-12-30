import logo from "../../assets/icons/logo-without-back.svg";
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.header}>
            <nav className={classes.nav}>
                <ul className={classes.nav__left}>
                    <li><a href="#about">Об острове</a></li>
                    <li><a href="#accommodation">Размещение</a></li>
                    <li><a href="#excursions">Экскурсии</a></li>
                </ul>
                <div className={classes.nav__logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <ul className={classes.nav__right}>
                    <li><a href="#interesting">Выгодные предложения</a></li>
                    <li><a href="#prices">Цены и контакты</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
