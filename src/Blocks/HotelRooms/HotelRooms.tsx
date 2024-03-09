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
import standard6 from '~/assets/images/standard-6.jpg';
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
import familyDeluxe3 from '~/assets/images/family-deluxe-3.jpg';
import premium3 from '~/assets/images/premium-3.jpg';
import premium4 from '~/assets/images/premium-4.jpg';
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
                    <RoomCard
                        image={standard}
                        roomTitle={'Standard'}
                        roomSubtitle={'Одна двуспальная кровать'}
                        iconData={standardRoomData}
                        openModal={openModal}
                        modalImages={[ standard, standard1, standard2, standard3, standard4, standard5, standard6,
                            familyDeluxe1 ]}
                        modalText={
                            <>
                                <p>
                                    Двухместный номер с двуспальной нераздвигающейся кроватью, с собственной ванной
                                    комнатой и душем. Есть фен, мини-холодильник, телевизор, кондиционер, вентилятор,
                                    чайник, набор чашек, питьевая вода, чай и кофе, фирменное пляжное полотенце, шкаф,
                                    сейф. Без балкона. В номере маленькое окошко без вида. Номера расположены на трех
                                    этажах. Всего 3 номера. Подселение третьего человека в номер, к сожалению,
                                    невозможно.
                                </p>
                                <p>Уборка и пополнение питьевой воды ежедневное (если оставить ключ на ресепшен).</p>
                                <p><u>Стоимость номера в сутки с завтраком при групповом заезде:</u></p>
                                <p>Одноместное размещение - <span>80$</span></p>
                                <p>Двухместное размещение - <span>86$</span></p>
                                <p>Доплата за ужин или обед (шведский стол) по <span>12$</span> на человека (по желанию)
                                </p>
                                <p>Трансфер из аэропорта на собственном катере в обе стороны <span>70$</span> за
                                    человека</p>
                                <p><strong>Налоги и таксы включены в стоимость.</strong></p>
                            </>
                        }
                    />
                    <RoomCard
                        image={deluxe}
                        roomTitle={'Deluxe'}
                        roomSubtitle={'Одна двуспальная кровать или две раздельные'}
                        iconData={deluxeRoomData}
                        openModal={openModal}
                        modalImages={[ deluxe, deluxe1, deluxe2, standard3, standard4, deluxe3, familyDeluxe1 ]}
                        modalText={
                            <>
                                <p>
                                    Двухместный номер с двуспальной кроватью, которую можно разделить на две кровати, с
                                    балконом, с креслом. Собственная ванная комната с душем. Есть фен, мини холодильник,
                                    телевизор, кондиционер, вентилятор, чайник, набор чашек, питьевая вода, чай и кофе,
                                    фирменное пляжное полотенце, шкаф, сейф. В номере маленькое окошко без вида. Номера
                                    расположены на разных этажах. Всего 6 таких номеров. Возможно подселение одного
                                    ребенка.
                                </p>
                                <p>Уборка и пополнение питьевой воды ежедневное (если оставить ключ на ресепшен).</p>
                                <p><u>Стоимость номера в сутки с завтраком при групповом заезде:</u></p>
                                <p>Одноместное размещение - <span>85$</span></p>
                                <p>Двухместное размещение - <span>90$</span></p>
                                <p>Два взрослых и ребенок - <span>110$</span></p>
                                <p>Дети от 2 до 16 лет. Ребенок до 2х лет без питания размещается бесплатно. Кроватка на
                                    младенца предоставляется по запросу.</p>
                                <p>Доплата за ужин или обед (шведский стол) по <span>12$</span> на человека (по желанию)
                                </p>
                                <p>Трансфер из аэропорта на собственном катере в обе стороны <span>70$</span> за
                                    человека</p>
                                <p><strong>Налоги и таксы включены в стоимость.</strong></p>
                            </>
                        }
                    />
                    <RoomCard
                        image={familyDeluxe}
                        roomTitle={'Deluxe семейный'}
                        roomSubtitle={'Три односпальные кровати'}
                        iconData={familyDeluxeRoomData}
                        openModal={openModal}
                        modalImages={[ familyDeluxe, familyDeluxe2, familyDeluxe3, standard3,
                            standard4, familyDeluxe1 ]}
                        modalText={
                            <>
                                <p>
                                    Трехместный номер с балконом, с тремя кроватями, которые можно объединить.
                                    Собственная ванная комната с душем. Есть фен, мини холодильник, телевизор,
                                    кондиционер, вентилятор, чайник, набор чашек, питьевая вода, чай и кофе, фирменное
                                    пляжное полотенце, шкаф, сейф. В номере маленькое окошко без вида. Номера
                                    расположены на разных этажах. Всего 3 таких номера. Возможно подселение одного
                                    ребенка.
                                </p>
                                <p>
                                    <p><u>Стоимость номера в сутки с завтраком при групповом заезде:</u></p>
                                </p>
                                <p><span>135$</span></p>
                                <p>Можно разместить в номере четвертого гостя - ребенка.</p>
                                <p>Доплата за ребенка <span>15$</span> (завтрак включен)</p>
                                <p>Дети от 2 до 16 лет. Ребенок до 2х лет без питания размещается бесплатно. Кроватка на
                                    младенца предоставляется по запросу.</p>
                                <p>Доплата за ужин или обед (шведский стол) по <span>12$</span> на человека (по желанию)
                                </p>
                                <p>Трансфер из аэропорта на собственном катере в обе стороны <span>70$</span> за
                                    человека</p>
                                <p><strong>Налоги и таксы включены в стоимость.</strong></p>
                            </>
                        }
                    />
                    <RoomCard
                        image={premium}
                        roomTitle={'Premium'}
                        roomSubtitle={'Очень большая двуспальная кровать'}
                        iconData={premiumRoomData}
                        openModal={openModal}
                        modalImages={[ premium, premium3, standard4, premium4 ]}
                        modalText={
                            <>
                                <p>
                                    Двухместный номер с кондиционером, отдельным входом, балконом с видом на бассейн, а
                                    также собственной ванной комнатой с душем. К услугам гостей 2 кровати.
                                </p>
                                <p>Доплата за ужин или обед (шведский стол) по <span>12$</span> на человека (по желанию)
                                </p>
                                <p>Трансфер из аэропорта на собственном катере в обе стороны <span>70$</span> за
                                    человека</p>
                                <p><strong>Налоги и таксы включены в стоимость.</strong></p>
                            </>
                        }
                    />
                </div>
            </div>
            <ModalPanel/>
        </div>
    );
};

export default HotelRooms;
