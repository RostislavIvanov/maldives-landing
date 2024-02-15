import Features from '~/Blocks/Features/Features.tsx';
import Accommodation from '~/Blocks/Accommodation/Accommodation.tsx';
import MainScreenBlock from '~/Blocks/MainScreenBlock/MainScreenBlock.tsx';
import Excursions from '~/Blocks/Excursions/Excursions.tsx';
import AboutIslandBlock from '~/Blocks/AboutIslandBlock/AboutIslandBlock.tsx';

const MainLandingPage = () => {
    return (
        <>
            <MainScreenBlock/>
            <AboutIslandBlock/>
            <Excursions/>
            <Features/>
            <Accommodation/>
        </>
    );
};

export default MainLandingPage;
