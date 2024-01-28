import classes from "./ImageBackground.module.css";
import back from '../../assets/images/back.jpg'
import { FC } from "react";

const ImageBackground: FC = () => {
    return (
        <div className={classes.back}>
            <img src={back} alt=""/>
        </div>
    );
};

export default ImageBackground;
