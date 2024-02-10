import Telegram from "~/assets/icons/Telegram.svg";
import Whatsapp from "~/assets/icons/WhatsApp.svg";
import Viber from "~/assets/icons/Viber.svg";
import Facebook from "~/assets/icons/Facebook.svg";
import Instagram from "~/assets/icons/Instagram.svg";
import Mail from "~/assets/icons/Mail.ru.svg";
import classes from "./Icons.module.css";

const Icons = () => {
    return (
        <div className={classes.icon}>
            <div>
                <img src={Telegram} alt="Telegram"/>
            </div>
            <div>
                <img src={Whatsapp} alt="Whatsapp"/>
            </div>
            <div>
                <img src={Viber} alt="Viber"/>
            </div>
            <div>
                <img src={Facebook} alt="Facebook"/>
            </div>
            <div>
                <img src={Instagram} alt="Instagram"/>
            </div>
            <div>
                <img src={Mail} alt="Mail"/>
            </div>
        </div>
    );
};

export default Icons;
