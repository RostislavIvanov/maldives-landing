import classes from "./MainScreenContent.module.css";
import Arrow from "../../assets/icons/Arrow.svg";
import Header from "../Header/Header.tsx";
import HugeTitle from "../HugeTitle/HugeTitle.tsx";

const MainScreenContent = () => {
    return (
        <div className={classes.content}>
            <div className={classes.content__container}>
                <Header/>

                <HugeTitle/>

                <div className={'flex justify-center mb-4'}>
                    <img className={'w-16 h-16'} src={Arrow} alt="Arrow"/>
                </div>
            </div>
        </div>
    );
};

export default MainScreenContent;
