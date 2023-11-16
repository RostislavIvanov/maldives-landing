import logo from "../../assets/icons/logo-without-back.svg";
import classes from "./Header.module.css";
import Icons from "../Icons/Icons.tsx";
import Navigation from "../Navigation/Navigation.tsx";

const Header = () => {
    return (
        <div className={classes.header}>

            <div className={classes.header__logo}>
                <img src={logo} alt="logo"/>
            </div>

            <Navigation/>

            <Icons/>

        </div>
    );
};

export default Header;
