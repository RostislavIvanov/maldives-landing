import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import classes from './LangSwitch.module.css';

const LangSwitch: FC = () => {
    const defaultLanguage = localStorage.getItem('i18nextLng') === 'ru' ? 'ru' : 'en';
    const [ toggleLang, setToggleLang ] = useState(defaultLanguage);
    const { i18n } = useTranslation('global');

    useEffect(() => {
        i18n.changeLanguage(toggleLang);
    }, [toggleLang]);

    const handleToggleLanguage = () => {
        setToggleLang(prevState => prevState === 'ru' ? 'en' : 'ru');
    };

    return (
        <div className={classes.switch} onClick={handleToggleLanguage}>
            <div className={`${classes.switch__langRu} ${toggleLang === 'ru' ? classes.switch__chosen : ''}`}>
                Ru
            </div>
            <div className={`${classes.switch__langEn} ${toggleLang === 'en' ? classes.switch__chosen : ''}`}>
                En
            </div>
        </div>
    );
};

export default LangSwitch;
