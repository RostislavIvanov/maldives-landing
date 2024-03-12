import classes from './Footer.module.css';
import { FC } from 'react';
import whatsApp from '~/assets/icons/WhatsApp.svg';
import viber from '~/assets/icons/Viber.svg';
import inst from '~/assets/icons/Instagram.svg';
import logo from '~/assets/icons/logo-white.svg';
import { useNavigate } from 'react-router-dom';
import { scrollToElement } from '~/utils/ScrollToElement/ScrollToElement.ts';

const Footer: FC = () => {
    const navigate = useNavigate();
    const handleScroll = (e: React.MouseEvent<HTMLElement>, link: string) => {
        e.preventDefault();
        navigate('/');
        setTimeout(() => scrollToElement(e, link), 500);
    };

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <footer className={classes.footer}>
                    <div className={classes.footer__logo}>
                        <a href="/">
                            <img src={logo} alt="Rosy Villa"/>
                        </a>
                    </div>
                    <nav className={classes.footer__nav}>
                        <ul>
                            <li><a href={'#about'} onClick={e => handleScroll(e, 'about')}>
                                Об острове
                            </a></li>
                            <li><a href={'#excursions'} onClick={e => handleScroll(e, 'excursions')}>
                                Экскурсии
                            </a></li>
                            <li><a href={'#accommodation'} onClick={e => handleScroll(e, 'accommodation')}>
                                Размещение
                            </a></li>
                            <li><a href={'#features'} onClick={e => handleScroll(e, 'features')}>
                                Наши программы
                            </a></li>
                            <li><a href={'#features'} onClick={e => handleScroll(e, 'prices')}>
                                Цены и контакты
                            </a></li>
                        </ul>
                    </nav>
                    <div className={classes.footer__icons}>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://wa.me/9609994740">
                            <img src={whatsApp} alt="whatsApp"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="viber://chat?number=%2B9609994740">
                            <img src={viber} alt="viber"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer"
                           href="https://www.instagram.com/rosyvilla_maldives/">
                            <img src={inst} alt="inst"/>
                        </a>
                    </div>
                    <div className={classes.footer__adv}>
                        <p>Сайт разработал:</p>
                        <a target="_blank" rel="noopener noreferrer" href="https://t.me/rostislav_ivanov">
                            @rostislav_ivanov
                        </a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;
