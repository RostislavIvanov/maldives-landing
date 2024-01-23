import classes from './Excursions.module.css'
import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import ExcursionItem from "~/components/ExcursionItem/ExcursionItem.tsx";
import fishing from '../../assets/images/fishing.jpg'
import snorkeling from '../../assets/images/snorkeling.jpg'
import dolphine from '../../assets/images/dolphine-tour.jpg'
import ship from '../../assets/images/Ship.jpg'
import whaleShark from '../../assets/images/whale-shark.jpg'
import shark from '../../assets/images/sharks.jpg'
import points from '../../assets/images/points.jpg'
import island from '../../assets/images/island.jpg'
import dinner from '../../assets/images/dinner.jpg'

const Excursions = () => {
    return (
            <div className={classes.content}>
                <div className={classes.wrapper}>
                    <div className={classes.titleWrapper}>
                        <BlockTitle label={'Насладитесь возможностями нашего острова'}>Экскурсии</BlockTitle>
                    </div>

                    <div className={'flex justify-between flex-wrap items-end text-white'}>
                        <ExcursionItem
                                title={'3 точки для плавания с маской'}
                                description={'Вы посетите Manta Point и сможете поплавать рядом с мантами - древними и величественными животными. Также, там обитают большие морские черепахи!'}
                                imageUrl={points}
                        />
                        <ExcursionItem
                                title={'Рыбалка'}
                                description={'Предлагаем несколько видов рыбалок: вечерняя рыбалка на закате и утренняя на восходе. Вы своими руками сможете поймать тунца, сможете устроить подводную охоту на лобстеров, и так же собственноручно поймать кальмаров.'}
                                imageUrl={fishing}
                        />
                        <ExcursionItem
                                title={'Тур с дельфинами'}
                                description={'Мы отправимся в настоящее морское сафари - будем искать диких дельфинов. Вы увидите несколько стай, сможете наблюдать их грациозные прыжки и даже поплавать с ними под водой.'}
                                imageUrl={dolphine}
                        />
                        <ExcursionItem
                                title={'Приключение с акулами'}
                                description={'Плавание с акулами "няньками" - настоящая психологическая терапия. Если соблюдать инструктаж - нахождение с ними безопасно и более того, акулы очень тактильные, к ними приятно прикасаться и они не сопротивляются.'}
                                imageUrl={shark}
                        />
                        <ExcursionItem
                                title={'Путешествие на затонувший корабль'}
                                description={'Приглашаем Вас погрузиться к затонувшему кораблю! Это возможно сделать и с обычной маской для снорклинга, и с аквалангом. Впечатления гарантированы!'}
                                imageUrl={ship}
                        />
                        <ExcursionItem
                                title={'Тур с китовыми акулами'}
                                description={'Это приключение оставит впечатление на всю жизнь! Гигантское морское животное может достигать даже 20 метров!'}
                                imageUrl={whaleShark}
                        />
                        <ExcursionItem
                                title={'Ночь на необитаемом острове'}
                                description={'Почувствуйте себя как Робинзон Крузо - проведите ночь на необитаемом острове! Мы так же можем организовать тематическую вечеринку, танцы под звездами. С вами остается наша команда, которая поможет все обустроить: поставит палатки, приготовит ужин.'}
                                imageUrl={island}
                        />
                        <ExcursionItem
                                title={'Обед на необитаемом острове'}
                                description={'Вы попадете на необитаемый остров, где сможете заняться чем угодно. Можете купаться, наслаждаться видами или вкусно пообедать. На таких островах получаются особенно яркие фотографии. Обязательно возьмите с собой одежду для фотосессии!'}
                                imageUrl={dinner}
                        />
                        <ExcursionItem
                                title={'Снорклинг на домашнем рифе'}
                                description={'Не выезжая с острова Вы получите удовольствие от наблюдения за кораллами и разноцветными рыбками. Отличительной особенностью нашего домашнего рифа являются затонувшие предметы: качели с надписью Guraidhoo, катер, велосипеды с "глазами", смотрящие на вас со дна.'}
                                imageUrl={snorkeling}
                        />
                    </div>
                </div>
            </div>
    );
};

export default Excursions;
