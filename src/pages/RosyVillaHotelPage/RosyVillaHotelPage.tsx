import { FC } from 'react';
import HotelRooms from '~/Blocks/HotelRooms/HotelRooms.tsx';
import Feedback from '~/Blocks/Feedback/Feedback.tsx';

const RosyVillaHotelPage: FC = () => {
    return (
        <div>
            <HotelRooms/>
            <Feedback/>
        </div>
    );
};

export default RosyVillaHotelPage;
