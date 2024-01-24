import classes from "./MainScreenBlock.module.css";
import VideoBackground from "../../components/VideoBackground/VideoBackground.tsx";
import MainScreenContent from "../../components/MainScreenContent/MainScreenContent.tsx";

const MainScreenBlock = () => {
    return (
        <div className={classes.intro}>
            <VideoBackground/>
            <MainScreenContent/>
        </div>

    );
};

export default MainScreenBlock;
