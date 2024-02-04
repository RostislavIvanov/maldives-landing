import classes from './BurgerMenu.module.css'
import logo from '../../assets/icons/logo-black.svg'
import { FC, useState } from "react";
// import telegram from '../../assets/icons/Telegram.svg'
import whatsApp from '../../assets/icons/WhatsApp.svg'
import viber from '../../assets/icons/Viber.svg'
import inst from '../../assets/icons/Instagram.svg'
// import facebook from '../../assets/icons/Facebook.svg'
// import mail from '../../assets/icons/Mail.ru.svg'

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
                <div className={classes.burger__icons}>
                    {/*<a target="_blank" rel="noopener noreferrer" href="https://t.me/9607473345">*/}
                    {/*    <img src={telegram} alt="telegram"/>*/}
                    {/*</a>*/}
                    <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send/?phone=9607870001">
                        <img src={whatsApp} alt="whatsApp"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B9609994740">
                        <img src={viber} alt="viber"/>
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/rosyvilla_maldives/">
                        <img src={inst} alt="inst"/>
                    </a>
                    {/*<a target="_blank" rel="noopener noreferrer" href="">*/}
                    {/*    <img src={facebook} alt="facebook"/>*/}
                    {/*</a>*/}
                    {/*<a target="_blank" rel="noopener noreferrer" href="">*/}
                    {/*    <img src={mail} alt="mail"/>*/}
                    {/*</a>*/}
                </div>
            </div>
            {isMenuOpen && <div className={classes.blur} onClick={handleMenu}/>}
        </>
    );
};

export default BurgerMenu;
