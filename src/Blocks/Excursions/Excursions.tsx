import classes from './Excursions.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import ExcursionItem from '~/components/ExcursionItem/ExcursionItem.tsx';
import fishing from '~/assets/images/fishing.jpg';
import fishing1 from '~/assets/images/fishing-1.jpg';
import fishing2 from '~/assets/images/fishing-2.jpg';
import fishing3 from '~/assets/images/fishing-3.jpg';
import fishing4 from '~/assets/images/fishing-4.jpg';
import fishing5 from '~/assets/images/fishing-5.jpg';
import fishing6 from '~/assets/images/fishing-6.jpg';
import fishing7 from '~/assets/images/fishing-7.jpg';
import snorkeling from '~/assets/images/snorkeling.jpg';
import snorkeling1 from '~/assets/images/snorkeling-1.jpg';
import snorkeling2 from '~/assets/images/snorkeling-2.jpg';
import snorkeling3 from '~/assets/images/snorkeling-3.jpg';
import snorkeling4 from '~/assets/images/snorkeling-4.jpg';
import dolphin from '~/assets/images/dolphine-tour.jpg';
import ship from '~/assets/images/Ship.jpg';
import ship1 from '~/assets/images/ship-1.jpg';
import ship2 from '~/assets/images/ship-2.jpg';
import ship3 from '~/assets/images/ship-3.jpg';
import ship4 from '~/assets/images/ship-4.jpg';
import whaleShark from '~/assets/images/whale-shark.jpg';
import whaleShark1 from '~/assets/images/whale-shark-1.jpg';
import whaleShark2 from '~/assets/images/whale-shark-2.jpg';
import shark from '~/assets/images/sharks.jpg';
import shark1 from '~/assets/images/shark-1.jpg';
import shark2 from '~/assets/images/shark-2.jpg';
import shark3 from '~/assets/images/shark-3.jpg';
import shark4 from '~/assets/images/shark-4.jpg';
import points from '~/assets/images/points.jpg';
import points1 from '~/assets/images/points-1.jpg';
import points2 from '~/assets/images/points-2.jpg';
import island from '~/assets/images/island.jpg';
import dinner from '~/assets/images/dinner.jpg';
import dinner1 from '~/assets/images/dinner-1.jpg';
import dinner2 from '~/assets/images/dinner-2.jpg';
import dinner3 from '~/assets/images/dinner-3.jpg';
import dinner4 from '~/assets/images/dinner-4.jpg';
import { useModal } from '~/hooks/useModal/useModal.tsx';

const Excursions = () => {
    const [
        ModalPanel,
        openModal,
    ] = useModal(4000);

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle
                        label={'Насладитесь возможностями нашего острова'}
                        id={'excursions'}
                    >
                        Экскурсии
                    </BlockTitle>
                </div>

                <div className={classes.items}>
                    <ExcursionItem
                        title={'3 точки для плавания с маской'}
                        description={'Вы посетите Manta Point и сможете поплавать рядом с мантами - древними и величественными животными.' +
                            ' Также, там обитают большие морские черепахи!'}
                        imageUrl={points}
                        openModal={openModal}
                        modalImages={[ points, points1, points2 ]}
                        modalText={
                            <>
                                <p>
                                    Вы посетите Manta Point и сможете поплавать рядом с этими древними и величественными
                                    животными. Манты очень грациозно плавают, взмахивая грудными плавниками, как
                                    крыльями.
                                    Это безопасно, манта питается планктоном. Гигантские скаты достигают 9 метров и их
                                    называют морскими дьяволами из-за очень впечатляющей необычной внешности. Так же вы
                                    сможете поплавать с большими черепахами и насладиться видами красивейшего Garden
                                    reef (Рифовый сад), где кораллы имеют вид распустившихся цветов.
                                </p>
                                <p><span>100$</span></p>
                                <p>
                                    Экскурсия на весь день с обедом на необитаемом острове. В качестве обеда ланч-бокс
                                    (макароны или рис с мясом) и напиток. Но при желании за дополнительную плату можно
                                    добавить другие блюда.
                                </p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, обучение снорклингу, спасательные жилеты, обед, вода.
                                </p>
                                <p>Возможно погружение с аквалангом.</p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Рыбалка'}
                        description={'Предлагаем несколько видов рыбалок: вечерняя рыбалка на закате и утренняя на восходе. ' +
                            'Вы своими руками сможете поймать тунца, сможете устроить подводную охоту на лобстеров, и так же собственноручно поймать кальмаров.'}
                        imageUrl={fishing}
                        openModal={openModal}
                        modalImages={[ fishing, fishing1, fishing2, fishing3, fishing4, fishing5, fishing6, fishing7 ]}
                        modalText={
                            <>
                                <p>
                                    Предлагаем несколько видов рыбалок: вечерняя рыбалка на закате и утренняя, ловля
                                    тунца, подводная охота на лобстеров, ловля кальмаров. Каждый тип рыбалки уникальный,
                                    не похожий на другой, поэтому, можете смело ходить на морскую охоту хоть каждый день
                                    и всегда будут новые впечатления. Без улова не останется никто, даже новички! Мы
                                    покажем, как правильно разделывать рыбу и сможем даже организовать мастер-классы по
                                    приготовлению деликатесного лобстера!
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p>Ночная рыбалка с ужином из улова - <span>50$</span></p>
                                <p>Охота на лобстеров и мастер-класс по приготовлению - <span>55$</span></p>
                                <p>Рыбалка на тунца - <span>50$</span></p>
                                <p>Рыбный ужин на пляже, декорированный свечами - <span>50$</span></p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, снасти,
                                    обучение, разделывание, приготовление.
                                </p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Тур с дельфинами'}
                        description={'Мы отправимся в настоящее морское сафари - будем искать диких дельфинов. ' +
                            'Вы увидите несколько стай, сможете наблюдать их грациозные прыжки и даже поплавать с ними под водой.'}
                        imageUrl={dolphin}
                        modalImages={[ dolphin ]}
                        openModal={openModal}
                        modalText={
                            <>
                                <p>
                                    Мы отправимся в настоящее морское сафари. Будем искать диких дельфинов. Вы увидите
                                    несколько стай, сможете наблюдать их грациозные прыжки и даже поплавать с ними под
                                    водой. Эти красивые животные очень быстрые, и чтобы их рассмотреть, нужно быть еще
                                    быстрее. Катер Rosy Villa поможет в нашей фотоохоте!
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p><span>60$</span></p>
                                <p>
                                    Экскурсия на весь день с обедом на необитаемом острове. В качестве обеда ланч-бокс
                                    (макароны или рис с мясом) и напиток. Но при желании за дополнительную плату можно
                                    добавить другие блюда.
                                </p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, обучение снорклингу, спасательные жилеты, обед, вода.
                                </p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Приключение с акулами'}
                        description={'Плавание с акулами "няньками" - настоящая психологическая терапия. ' +
                            'Если соблюдать инструктаж - нахождение с ними безопасно и более того, ' +
                            'акулы очень тактильные, к ними приятно прикасаться и они не сопротивляются.'}
                        imageUrl={shark}
                        openModal={openModal}
                        modalImages={[ shark, shark1, shark2, shark3, shark4 ]}
                        modalText={
                            <>
                                <p>
                                    Хотите поразить всех знакомых своей смелостью? Или может быть желаете преодолеть
                                    свои страхи? Плавание с акулами "няньками" - настоящая психологическая терапия. Если
                                    соблюдать инструктаж - нахождение с ними безопасно и более того, акулы очень
                                    тактильные, к ними приятно прикасаться и они не сопротивляются. Вы получите
                                    захватывающий опыт и будете удивлять своих знакомых смелыми видео!
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p><span>75$</span></p>
                                <p>Экскурсия на полдня.</p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, инструктаж, спасательные жилеты, вода.
                                </p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Путешествие на затонувший корабль'}
                        description={'Приглашаем Вас погрузиться к затонувшему кораблю! Это возможно сделать и с обычной' +
                            ' маской для снорклинга, и с аквалангом. Впечатления гарантированы!'}
                        imageUrl={ship}
                        openModal={openModal}
                        modalImages={[ ship, ship1, ship2, ship3, ship4 ]}
                        modalText={
                            <>
                                <p>
                                    Хотите стать настоящим исследователем или почувствовать себя пиратом? Может быть,
                                    найти сокровище? Приглашаем погрузиться к затонувшему кораблю! Это возможно сделать
                                    и с обычной маской для снорклинга и с аквалангом. Впечатления гарантированы!'
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p><span>100$</span></p>
                                <p>
                                    Экскурсия на весь день с обедом на необитаемом острове. В качестве обеда ланч-бокс
                                    (макароны или рис с мясом) и напиток. Но при желании за дополнительную плату можно
                                    добавить другие блюда.
                                </p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, обучение снорклингу, спасательные жилеты, обед, вода.
                                </p>
                                <p>Возможно погружение с аквалангом.</p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Это приключение оставит впечатление на всю жизнь! Гигантское морское животное может' +
                            ' достигать даже 20 метров!'}
                        imageUrl={whaleShark}
                        openModal={openModal}
                        modalImages={[ whaleShark, whaleShark1, whaleShark2 ]}
                        modalText={
                            <>
                                <p>
                                    Это приключение оставит впечатление на всю жизнь! Гигантское морское животное может
                                    достигать даже 20 метров! Действительно есть сходство с китом — царем морского мира.
                                    Плавание, снорклинг или дайвинг с китовой акулой — одно из самых захватывающих
                                    впечатлений на Мальдивах! Она питается планктоном, поэтому нахождение рядом с ней
                                    довольно безопасно, но гигантские размеры взволнуют любого человека. Яркие эмоции и
                                    потрясающие фотографии гарантированы!'
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p><span>120$</span></p>
                                <p>Экскурсия на полдня.</p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, обучение снорклингу, спасательные жилеты, обед, вода.
                                </p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Ночь на необитаемом острове'}
                        description={'Почувствуйте себя как Робинзон Крузо - проведите ночь на необитаемом острове!' +
                            ' Мы так же можем организовать тематическую вечеринку, танцы под звездами. С вами остается ' +
                            'наша команда, которая поможет все обустроить: поставит палатки, приготовит ужин.'}
                        imageUrl={island}
                        openModal={openModal}
                        modalImages={[ island ]}
                        modalText={
                            <>
                                <p>
                                    Уникальный опыт! Белый песок, вокруг бирюзовое море — вы на острове! Рядом приятная
                                    компания, костер, песни под гитару, жареная рыбка... Почувствуйте себя как Робинзон
                                    Крузо — проведите ночь на необитаемом острове! Мы так же можем организовать
                                    тематическую вечеринку, танцы под звездами. С вами остается наша команда, которая
                                    поможет все обустроить, поставит палатки, приготовит ужин.
                                </p>
                                <p>Стоимость экскурсии индивидуально рассчитывается в зависимости от ваших задач.</p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Обед на необитаемом острове'}
                        description={'Вы попадете на необитаемый остров, где сможете заняться чем угодно. ' +
                            'Можете купаться, наслаждаться видами или вкусно пообедать. На таких островах получаются ' +
                            'особенно яркие фотографии. Обязательно возьмите с собой одежду для фотосессии!'}
                        imageUrl={dinner}
                        openModal={openModal}
                        modalImages={[ dinner, dinner1, dinner2, dinner3, dinner4 ]}
                        modalText={
                            <>
                                <p>
                                    Эту поездку мы можем организовать отдельно, но такой пикник входит в программу наших
                                    экскурсий. После сноркгинга и плавания мы приезжаем на один их необитаемых островов
                                    с белым песком, прозрачной водичкой и примерно в течение часа - полтора вы сможете
                                    насладиться видами, купанием и обедом. На таких островах получаются особенно яркие
                                    фотографии. Обязательно возьмите с собой одежду для фотосессии!
                                </p>
                            </>
                        }
                    />
                    <ExcursionItem
                        title={'Снорклинг на домашнем рифе'}
                        description={'Не выезжая с острова Вы получите удовольствие от наблюдения за кораллами и ' +
                            'разноцветными рыбками. Отличительной особенностью нашего домашнего рифа являются затонувшие ' +
                            'предметы: качели с надписью Guraidhoo, катер, велосипеды с "глазами", смотрящие на вас со дна.'}
                        imageUrl={snorkeling}
                        openModal={openModal}
                        modalImages={[ snorkeling, snorkeling1, snorkeling2, snorkeling3, snorkeling4 ]}
                        modalText={
                            <>
                                <p>
                                    Не выезжая с острова вы получите удовольствие от наблюдения за кораллами и
                                    разноцветными рыбками. Но отличительной особенностью нашего домашнего рифа являются
                                    затонувшие предметы: качели с надписью Guraidhoo, катер, велосипеды с "глазами",
                                    смотрящие на вас со дна. Мы проведем инструктаж, обеспечим необходимым
                                    оборудованием, а инструктор будет в течение экскурсии с вами, фотографировать и
                                    показывать интересные локации.
                                </p>
                                <p>
                                    <u>Стоимость экскурсий при наборе группы от 10 человек (цена на человека)</u>
                                </p>
                                <p><span>15$</span></p>
                                <p>
                                    Экскурсия на полдня.
                                </p>
                                <p><strong>Включено в стоимость: </strong>организация, катер, топливо, команда, маски и
                                    ласты, съемка на GoPro, обучение снорклингу, спасательные жилеты, обед, вода.
                                </p>
                                <p>Возможно погружение с аквалангом.</p>
                            </>
                        }
                    />
                </div>
            </div>
            <ModalPanel/>
        </div>
    );
};

export default Excursions;
