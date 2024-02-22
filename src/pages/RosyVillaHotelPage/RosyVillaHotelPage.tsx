import { FC } from 'react';
import HotelRooms from '~/Blocks/HotelRooms/HotelRooms.tsx';
import Feedback from '~/Blocks/Feedback/Feedback.tsx';
import FAQ from '~/Blocks/FAQ/FAQ.tsx';
import { faqData } from '~/data/faqData.ts';

const RosyVillaHotelPage: FC = () => {
    return (
        <div>
            <HotelRooms/>
            <Feedback/>
            <FAQ data={faqData}/>
        </div>
    );
};

export default RosyVillaHotelPage;
