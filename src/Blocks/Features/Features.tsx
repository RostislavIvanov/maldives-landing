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
                                  modalText={
                                      <>
                                          <p>
                                              Организуем красивую свадебную церемонию с фотосессией. На любой вкус и
                                              кошелек. Ее можно сделать как на нашем локальном острове на пляже, так и
                                              на острове - резорте и даже на необитаемом острове. Белый свадебный наряд
                                              и белая фата особенно красиво смотрится на белом песке, на фоне бирюзового
                                              моря и такой красивый ритуал оставит самые яркие воспоминания и фотографии
                                              счастливых моментов. Юридической силы эта церемония не имеет, но послужит
                                              красивым началом счастливой семейной жизни!
                                          </p>
                                      </>
                                  }
                    />
                    <FeaturesItem label={'Лечение'}
                                  subLabel={'Совместите приятное с полезным. Предлагаем вам массаж и аюрведические процедуры'}
                                  imageUrl={heal} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ heal ]}
                                  modalText={
                                      <>
                                          <p>
                                              Предлагаем совместить и приятное и полезное. Вы можете заказать
                                              аюрведическую программу лечения, курс массажа или косметологические уходы.
                                              Многие гости Мальдив отмечают, что избавились от неприятных недугов, таких
                                              как аллергия, кисты, остеохондроз и даже рак. Климат, яркие цвета, состав
                                              воды, солнце оказывают благотворное влияние на организм. Мы предлагаем
                                              усилить это полезное влияние дополнительными оздоровительными процедурами.
                                          </p>
                                      </>
                                  }
                    />
                </div>
                <div className={classes.features__right}>
                    <FeaturesItem label={'Круизы'}
                                  subLabel={'Арендуйте яхту с друзьями или семьей и отправьтесь в путешествие по своему ' +
                                      'уникальному маршруту'}
                                  imageUrl={cruise} side={'right'}
                                  openModal={openModal}
                                  modalImages={[ cruise ]}
                                  modalText={
                                      <>
                                          <p>
                                              Вы можете арендовать яхту для вашей группы или компании и отправиться в
                                              круиз по вашему маршруту либо по готовым вариантам. Питанием, командой,
                                              оборудованием для снорклинга обеспечиваем. Каждый вечер можем организовать
                                              дискотеку с диджеем и баром, танцы под луной посреди океана. И пусть вам
                                              позавидуют звезды!
                                          </p>
                                          <p>
                                              Стоимость аренды рассчитывается индивидуально, в зависимости от
                                              поставленных задач. За расчетом обратитесь к менеджеру по указанным на
                                              сайте телефонам.
                                          </p>
                                      </>
                                  }
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
                                  modalText={
                                      <>
                                          <p>
                                              Мы сотрудничаем с несколькими отелями - резортами. Вы сможете насладиться
                                              беззаботным отдыхом, находясь целый день в райском месте, острове - отеле.
                                              Мы отвезем на своем катере вас в отель утром и заберем вечером. В
                                              стоимость входит обед с напитками во время обеда, включая алкоголь.
                                          </p>
                                          <p><strong>Наши отели-партнеры:</strong></p>
                                          <p>Sun Siyam Olhuveli 4*, Adaaran Club Rannalhi 4*, Fihalhohi Maldives 4*</p>
                                          <p>Стоимость экскурсии "День на резорте" на человека.</p>
                                          <p><span>120$</span></p>
                                          <p>
                                              <strong>В стоимость входит:</strong> трансфер в обе стороны, обед с
                                              напитками во время обеда. Начало в 9 утра, окончание в 17 часов вечера.
                                          </p>
                                      </>
                                  }
                    />
                </div>
                <div className={classes.features__left}>
                    <FeaturesItem label={'Романтический ужин'}
                                  subLabel={'Мы поможем красиво отметить любое ваше событие'}
                                  imageUrl={romantic} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ romantic ]}
                                  modalText={
                                      <>
                                          <p>
                                              Мы поможем красиво отметить любое ваше событие - предложение руки и
                                              сердца, юбилей, день рождения или другой праздник. Организуем красивый
                                              романтический ужин на пляже на закате.
                                          </p>
                                      </>
                                  }
                    />
                    <FeaturesItem label={'Культура Мальдив'}
                                  subLabel={'Насладитесь национальными танцами, песнями, и мастер-классами на нашем острове'}
                                  imageUrl={culture} side={'left'}
                                  openModal={openModal}
                                  modalImages={[ culture, culture1 ]}
                                  modalText={
                                      <>
                                          <p>
                                              Мы сможем скрасить ваше пребывание на нашем острове национальными танцами,
                                              песнями, организовать мастер-классы по изготовлению мальдивского сувенира,
                                              а так же фотосессию в национальных костюмах.
                                          </p>
                                          <p>
                                              Еще мы можем организовать караоке на крыше нашего отеля, вечеринку, ужин
                                              для команды, настольные игры, уроки рисования, водные виды развлечений и
                                              спорта, дайвинг, массажи, лечебные процедуры, поездку на соседние
                                              локальные острова, экскурсию в столицу нашей страны Мале.
                                          </p>
                                          <p>
                                              Стоимость рассчитывается индивидуально. Спрашивайте расчет у наших
                                              менеджеров по указанным на сайте телефонам.
                                          </p>
                                      </>
                                  }
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
