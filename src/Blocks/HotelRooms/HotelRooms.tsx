import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './HotelRooms.module.css';
import star from '~/assets/icons/star.svg';
import RoomCard from '~/components/RoomCard/RoomCard.tsx';
import { useModal } from '~/hooks/useModal/useModal.tsx';
import { hotelRoomsImageData } from '~/data/hotelRoomsImageData.ts';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';
import { useHotelRoomData } from '~/hooks/useHotelRoomData/useHotelRoomData.ts';
import Description from '~/components/Description/Description';

const HotelRooms = () => {
    const [ ModalPanel, openModal ] = useModal(4000);
    const t = useTranslate('hotel');
    const hotelRoomsIconData = useHotelRoomData();

    return (
        <section className={classes.content}>
            <div className={classes.wrapper}>
                <BlockTitle label={t('subtitle')}>
                    Rosy Villa Hotel
                </BlockTitle>
                <div className={classes.stars}>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <div className={classes.hotelRooms}>
                    {hotelRoomsImageData.map((images, index) =>
                        <RoomCard
                            key={index}
                            image={images[0]}
                            roomTitle={t(`items.${index}.roomTitle`)}
                            roomSubtitle={t(`items.${index}.roomSubtitle`)}
                            iconData={hotelRoomsIconData[index]}
                            openModal={openModal}
                            modalImages={hotelRoomsImageData[index]}
                            modalText={t(`items.${index}.modalText`)}
                        />,
                    )}
                </div>
                <Description>
                    {t('advertisement')}
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://t.me/rosy_villa_maldives">
                        {t('link')}
                    </a>
                </Description>
            </div>
            <ModalPanel/>
        </section>
    );
};

export default HotelRooms;
