import MainScreenBlock from "./Blocks/MainScreenBlock/MainScreenBlock.tsx";
import AboutIslandBlock from "./Blocks/AboutIslandBlock/AboutIslandBlock.tsx";
import Excursions from "./Blocks/Excursions/Excursions.tsx";
import Features from "~/Blocks/Features/Features.tsx";

const App = () => {
    return (
        <>
            <MainScreenBlock/>
            <AboutIslandBlock/>
            <Excursions/>
            <Features/>
        </>
    );
};

export default App;
