import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './HotelRooms.module.css';
import star from '~/assets/icons/star.svg';
import RoomCard from '~/components/RoomCard/RoomCard.tsx';
import standard from '~/assets/images/standard.jpg';
import standard1 from '~/assets/images/standard-1.jpg';
import standard2 from '~/assets/images/standard-2.jpg';
import standard3 from '~/assets/images/standard-3.jpg';
import standard4 from '~/assets/images/standard-4.jpg';
import standard5 from '~/assets/images/standard-5.jpg';
import {
    deluxeRoomData,
    familyDeluxeRoomData,
    premiumRoomData,
    standardRoomData,
} from '~/data/RosyVillaHotelPageData.ts';
import deluxe from '~/assets/images/deluxe.jpg';
import deluxe1 from '~/assets/images/deluxe-1.jpg';
import deluxe2 from '~/assets/images/deluxe-2.jpg';
import deluxe3 from '~/assets/images/deluxe-3.jpg';
import familyDeluxe from '~/assets/images/family-deluxe.jpg';
import familyDeluxe1 from '~/assets/images/family-deluxe-1.jpg';
import familyDeluxe2 from '~/assets/images/family-deluxe-2.jpg';
import premium1 from '~/assets/images/premium-1.jpg';
import premium3 from '~/assets/images/premium-3.jpg';
import premium from '~/assets/images/premium.jpg';
import { useModal } from '~/hooks/useModal/useModal.tsx';

const HotelRooms = () => {
    const [
        ModalPanel,
        openModal,
    ] = useModal(4000);

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <BlockTitle
                    label={'Каждый гость становится нашим другом!'}>
                    Rosy Villa Hotel
                </BlockTitle>
                <div className={classes.stars}>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                    <img src={star} alt=""/>
                </div>
                <div className={'flex justify-center sm:justify-between flex-wrap'}>
                    <RoomCard image={standard}
                              roomTitle={'Standard'}
                              roomSubtitle={'Одна двуспальная кровать'}
                              data={standardRoomData}
                              openModal={openModal}
                              modalImages={[ standard, standard1, standard2, standard3, standard4, standard5 ]}
                              modalText={'Двухместный номер с собственной ванной комнатой с душем, биде, феном и бесплатными ' +
                                  'туалетно-косметическими принадлежностями. В числе удобств этого звукоизолированного ' +
                                  'номера с отдельным входом кондиционер, гостиная зона с телевизором с плоским экраном, ' +
                                  'мини-бар и шкаф для одежды. К услугам гостей 1 кровать.'}
                    />
                    <RoomCard image={deluxe}
                              roomTitle={'Deluxe'}
                              roomSubtitle={'Одна двуспальная кровать'}
                              data={deluxeRoomData}
                              openModal={openModal}
                              modalImages={[ deluxe, deluxe1, deluxe2, standard3, standard4, deluxe3 ]}
                              modalText={'Двухместный номер с кондиционером, отдельным входом, балконом с видом на бассейн, ' +
                                  'а также собственной ванной комнатой с душем. К услугам гостей 1 кровать.'}
                    />
                    <RoomCard image={familyDeluxe}
                              roomTitle={'Deluxe семейный'}
                              roomSubtitle={'Три односпальные кровати'}
                              data={familyDeluxeRoomData}
                              openModal={openModal}
                              modalImages={[ familyDeluxe, familyDeluxe1, familyDeluxe2, standard3, standard4 ]}
                              modalText={'Трехместный номер располагает кондиционером, приватным входом, балконом с видом ' +
                                  'на бассейн, а также собственной ванной комнатой с душевой кабиной. В номере имеется 2 кровати.'}
                    />
                    <RoomCard image={premium}
                              roomTitle={'Premium'}
                              roomSubtitle={'Две двуспальные кровати'}
                              data={premiumRoomData}
                              openModal={openModal}
                              modalImages={[ premium, premium1, premium3, standard4 ]}
                              modalText={'Двухместный номер с кондиционером, отдельным входом, балконом с видом на бассейн, ' +
                                  'а также собственной ванной комнатой с душем. К услугам гостей 2 кровати.'}
                    />
                </div>
            </div>
            <ModalPanel/>
        </div>
    );
};

export default HotelRooms;
