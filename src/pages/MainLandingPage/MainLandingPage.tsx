import Features from '~/Blocks/Features/Features.tsx';
import Accommodation from '~/Blocks/Accommodation/Accommodation.tsx';
import MainScreenBlock from '~/Blocks/MainScreenBlock/MainScreenBlock.tsx';
import Excursions from '~/Blocks/Excursions/Excursions.tsx';
import AboutIslandBlock from '~/Blocks/AboutIslandBlock/AboutIslandBlock.tsx';
import Footer from '~/Blocks/Footer/Footer.tsx';

const MainLandingPage = () => {
    return (
        <>
            <MainScreenBlock/>
            <AboutIslandBlock/>
            <Excursions/>
            <Features/>
            <Accommodation/>
            <Footer/>
        </>
    );
};

export default MainLandingPage;
