import logo from "../../assets/icons/logo-without-back.svg";
import classes from "./Header.module.css";

const Header = () => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
        e.preventDefault();
        const el = document.getElementById(link);
        el?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }
    return (
            <div className={classes.header}>
                <nav className={classes.nav}>
                    <ul className={classes.nav__left}>
                        <li><a onClick={e => handleClick(e, 'about')}>Об острове</a></li>
                        <li><a onClick={e => handleClick(e, 'excursions')}>Экскурсии</a></li>
                        <li><a onClick={e => handleClick(e, 'accommodation')}>Размещение</a></li>
                    </ul>
                    <div className={classes.nav__logo}>
                        <img src={logo} alt="logo"/>
                    </div>
                    <ul className={classes.nav__right}>
                        <li><a onClick={e => handleClick(e, 'features')}>Наши программы</a></li>
                        <li><a onClick={e => handleClick(e, 'prices')}>Цены и контакты</a></li>
                    </ul>
                </nav>
            </div>
    );
};

export default Header;
