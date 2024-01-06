import classes from "./VideoBackground.module.css";
// import MyVideo from "../../assets/video/Maldives Travel Guide (720p).mp4";
import back from '../../assets/images/back.jpg'
import { FC } from "react";
const VideoBackground: FC = () => {
    return (
        <div className={classes.video}>
            {/*<video*/}
            {/*    className={classes.video__media}*/}
            {/*       src={MyVideo}*/}
            {/*       autoPlay={true}*/}
            {/*       muted={true}*/}
            {/*       loop>*/}
            {/*</video>*/}
            <img className={classes.video} src={back} alt=""/>
        </div>
    );
};

export default VideoBackground;
