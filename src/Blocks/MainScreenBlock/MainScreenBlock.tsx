import classes from "./MainScreenBlock.module.css";
import MainScreenContent from "~/components/MainScreenContent/MainScreenContent.tsx";
import ImageBackground from "~/components/ImageBackground/ImageBackground.tsx";

const MainScreenBlock = () => {
    return (
        <div className={classes.intro}>
            <ImageBackground/>
            <MainScreenContent/>
        </div>

    );
};

export default MainScreenBlock;
