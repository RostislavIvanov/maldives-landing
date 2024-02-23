import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './HotelRooms.module.css';
import star from '~/assets/icons/star.svg';
import RoomCard from '~/components/RoomCard/RoomCard.tsx';
import standard from '~/assets/images/standard.jpg';
import {
    deluxeRoomData,
    familyDeluxeRoomData,
    premiumRoomData,
    standardRoomData
} from '~/data/RosyVillaHotelPageData.ts';
import deluxe from '~/assets/images/deluxe.jpg';
import familyDeluxe from '~/assets/images/family-deluxe.jpg';
import premium from '~/assets/images/premium.jpg';

const HotelRooms = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <BlockTitle
                    label={'Каждый гость становится нашим другом!'}>
                    Rosy Villa Hotel
                </BlockTitle>
                <div className={classes.stars}>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                    <img src={star} alt=''/>
                </div>
                <div className={'flex justify-center sm:justify-between flex-wrap'}>
                    <RoomCard image={standard}
                              roomTitle={'Standard'}
                              roomSubtitle={'Одна двуспальная кровать'}
                              data={standardRoomData}/>
                    <RoomCard image={deluxe}
                              roomTitle={'Deluxe'}
                              roomSubtitle={'Одна двуспальная кровать'}
                              data={deluxeRoomData}/>
                    <RoomCard image={familyDeluxe}
                              roomTitle={'Deluxe семейный'}
                              roomSubtitle={'Три односпальные кровати'}
                              data={familyDeluxeRoomData}/>
                    <RoomCard image={premium}
                              roomTitle={'Premium'}
                              roomSubtitle={'Две двуспальные кровати'}
                              data={premiumRoomData}/>
                </div>
            </div>
        </div>
    );
};

export default HotelRooms;
