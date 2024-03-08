import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './Features.module.css';
import wedding from '~/assets/images/wedding.jpg';
import cruise from '~/assets/images/cruise.jpg';
import heal from '~/assets/images/healing.jpg';
import resortDay from '~/assets/images/resort-day.jpg';
import romantic from '~/assets/images/romantic.jpeg';
import culture from '~/assets/images/culture.jpg';
import culture1 from '~/assets/images/culture-1.jpg';
import FeaturesItem from '~/components/FeaturesItem/FeaturesItem.tsx';
import { FC } from 'react';
import { useModal } from '~/hooks/useModal/useModal.tsx';
import Description from '~/components/Description/Description.tsx';

const Features: FC = () => {
    const [
        ModalPanel,
        openModal,
    ] = useModal(4000);

    return (
        <>
            <div className={classes.titleWrapper}>
                <BlockTitle
                    label={'Мы регулярно набираем группы с тематическими программами: йога и фото туры, ' +
                        'литературный тур, приключенческий с изучением английского языка,  туры со звездами, медитативные ' +
                        'и психологические туры. Актуальные предложения узнавайте у наших менеджеров.'}
                    id={'features'}
                >
                    Наши программы
                </BlockTitle>
            </div>
            <div className={classes.features}>
                <div className={classes.features__left}>
                    <FeaturesItem label={'Свадьбы'}
                                  subLabel={'Организуем красивую свадебную церемонию на любой вкус и бюджет'}
                                  imageUrl={wedding} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ wedding ]}
                                  modalText={'Организуем красивую свадебную церемонию с фотосессией. На любой вкус и кошелек. ' +
                                      'Ее можно сделать как на нашем локальном острове на пляже, так и на острове - резорте ' +
                                      'и даже на необитаемом острове. Белый свадебный наряд и белая фата особенно красиво ' +
                                      'смотрится на белом песке, на фоне бирюзового моря и такой красивый ритуал оставит ' +
                                      'самые яркие воспоминания и фотографии счастливых моментов. Юридической силы эта ' +
                                      'церемония не имеет, но послужит красивым началом счастливой семейной жизни!'}
                    />
                    <FeaturesItem label={'Лечение'}
                                  subLabel={'Совместите приятное с полезным. Предлагаем вам массаж и аюрведические процедуры'}
                                  imageUrl={heal} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ heal ]}
                                  modalText={'Предлагаем совместить и приятное и полезное. Вы можете заказать аюрведическую ' +
                                      'программу лечения, курс массажа или косметологические уходы. Многие гости Мальдив отмечают, ' +
                                      'что избавились от неприятных недугов, таких как аллергия, кисты, остеохондроз и даже рак. ' +
                                      'Климат, яркие цвета, состав воды, солнце оказывают благотворное влияние на организм. ' +
                                      'Мы предлагаем усилить это полезное влияние дополнительными оздоровительными процедурами.'}
                    />
                </div>
                <div className={classes.features__right}>
                    <FeaturesItem label={'Круизы'}
                                  subLabel={'Арендуйте яхту с друзьями или семьей и отправьтесь в путешествие по своему ' +
                                      'уникальному маршруту'}
                                  imageUrl={cruise} side={'right'}
                                  openModal={openModal}
                                  modalImages={[ cruise ]}
                                  modalText={'Вы можете арендовать яхту для вашей группы или компании и отправиться в круиз ' +
                                      'по вашему маршруту либо по готовым вариантам. Питанием, командой, оборудованием ' +
                                      'для снорклинга обеспечиваем. Каждый вечер можем организовать дискотеку с диджеем и баром, ' +
                                      'танцы под луной посреди океана. И пусть вам позавидуют звезды!'}
                    />
                </div>
            </div>
            <div className={classes.features}>
                <div className={classes.features__right}>
                    <FeaturesItem label={'День на резорте'}
                                  subLabel={'Мы отвезем вас в один из отелей-резортов, где вы сможете насладиться ' +
                                      'беззаботным отдыхом в райском месте'}
                                  imageUrl={resortDay} side={'right'}
                                  openModal={openModal}
                                  modalImages={[ resortDay ]}
                                  modalText={'Мы сотрудничаем с несколькими отелями - резортами. Вы сможете насладиться ' +
                                      'беззаботным отдыхом, находясь целый день в райском месте,  острове - отеле. Мы отвезем ' +
                                      'на своем катере вас в отель утром и заберем вечером. В стоимость входит обед с ' +
                                      'напитками во время обеда, включая алкоголь.'}
                    />
                </div>
                <div className={classes.features__left}>
                    <FeaturesItem label={'Романтический ужин'}
                                  subLabel={'Мы поможем красиво отметить любое ваше событие'}
                                  imageUrl={romantic} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ romantic ]}
                                  modalText={'Мы поможем красиво отметить любое ваше событие - предложение руки и сердца, ' +
                                      'юбилей, день рождения или другой праздник. Организуем красивый романтический ужин ' +
                                      'на пляже на закате.'}
                    />
                    <FeaturesItem label={'Культура Мальдив'}
                                  subLabel={'Насладитесь национальными танцами, песнями, и мастер-классами на нашем острове'}
                                  imageUrl={culture} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ culture, culture1 ]}
                                  modalText={'Мы сможем скрасить ваше пребывание на нашем острове национальными танцами, ' +
                                      'песнями, организовать мастер-классы по изготовлению мальдивского сувенира, а так ' +
                                      'же фотосессию в национальных костюмах.'}
                    />
                </div>
            </div>
            <div className={classes.features__description}>
                <Description>
                    Может быть планируете свадьбу? Или хотите восстановить здоровье? А возможно вы участник дайверского
                    или спортивного клуба? Мы можем организовать под ваше мероприятие индивидуальную программу.
                </Description>
            </div>
            <ModalPanel/>
        </>
    );
};

export default Features;
