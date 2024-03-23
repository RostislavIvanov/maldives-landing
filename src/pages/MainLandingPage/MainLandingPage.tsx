import Programs from '~/Blocks/Programs/Programs.tsx';
import Accommodation from '~/Blocks/Accommodation/Accommodation.tsx';
import MainScreenBlock from '~/Blocks/MainScreenBlock/MainScreenBlock.tsx';
import Excursions from '~/Blocks/Excursions/Excursions.tsx';
import AboutIslandBlock from '~/Blocks/AboutIslandBlock/AboutIslandBlock.tsx';
import Footer from '~/Blocks/Footer/Footer.tsx';
import Speech from '~/Blocks/Speech/Speech.tsx';
import Contacts from '~/Blocks/Contacts/Contacts.tsx';
import PalmList from '~/components/PalmList/PalmList.tsx';

const MainLandingPage = () => {
    return (
        <>
            <MainScreenBlock/>
            <PalmList/>
            <AboutIslandBlock/>
            <Excursions/>
            <Programs/>
            <Accommodation/>
            <Contacts/>
            <Speech/>
            <Footer/>
        </>
    );
};

export default MainLandingPage;
