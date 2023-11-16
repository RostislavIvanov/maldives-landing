import classes from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li><a href="#about">Об острове</a></li>
                <li><a href="#accommodation">Размещение</a></li>
                <li><a href="#excursions">Экскурсии</a></li>
                <li><a href="#weddings">Свадьбы</a></li>
                <li><a href="#cruises">Круизы</a></li>
                <li><a href="#health">Лечение</a></li>
                <li><a href="#prices">Цены</a></li>
            </ul>
        </nav>
    );
};

export default Navigation;
