import { FC, useEffect } from 'react';
import HotelRooms from '~/Blocks/HotelRooms/HotelRooms.tsx';
import Feedback from '~/Blocks/Feedback/Feedback.tsx';
import FAQ from '~/Blocks/FAQ/FAQ.tsx';
import { faqData } from '~/data/faqData.ts';
import Footer from '~/Blocks/Footer/Footer.tsx';

const RosyVillaHotelPage: FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div>
            <HotelRooms/>
            <Feedback/>
            <FAQ data={faqData}/>
            <Footer/>
        </div>
    );
};

export default RosyVillaHotelPage;
