import classes from './BurgerMenu.module.css'
import logo from '../../assets/icons/logo-black.svg'
import { FC, useState } from "react";

type BurgerMenuProps = {
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void
}
const BurgerMenu: FC<BurgerMenuProps> = ({ handleLinkClick }) => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const handleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const handleBurgerClickLink = (e: React.MouseEvent<HTMLElement>, link: string) => {
        setIsMenuOpen(false);
        handleLinkClick(e, link)
    }
    return (
        <>
            <div className={classes.burger} onClick={handleMenu}>
                <span/>
            </div>
            <div className={`${isMenuOpen && classes.openMenu} ${classes.burger__menu}`}>
                <div className={classes.burger__logo}>
                    <img src={logo} alt="Rosy Villa"/>
                    <div onClick={handleMenu}/>
                </div>
                <ul className={classes.burger__list}>
                    <li onClick={(e) => handleBurgerClickLink(e, 'about')}>Об острове</li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'excursions')}>Экскурсии</li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'accommodation')}>Размещение</li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'features')}>Наши программы</li>
                    <li onClick={(e) => handleBurgerClickLink(e, 'prices')}>Цены и контакты</li>
                </ul>
            </div>
            {isMenuOpen && <div className={classes.blur} onClick={handleMenu}/>}
        </>
    );
};

export default BurgerMenu;
