import classes from './Excursions.module.css'
import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import ExcursionItem from "~/components/ExcursionItem/ExcursionItem.tsx";
import fishing from '../../assets/images/fishing.jpg'
// import snorkeling from '../../assets/images/snorkeling.jpg'
import dolphine from '../../assets/images/dolphine-tour.jpg'
import ship from '../../assets/images/Ship.jpg'
import whaleShark from '../../assets/images/whale-shark.jpg'
import shark from '../../assets/images/sharks.jpg'
import points from '../../assets/images/3-points.jpg'
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
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={fishing}
                    />
                    <ExcursionItem
                        title={'Тур с дельфинами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={dolphine}
                    />
                    <ExcursionItem
                        title={'Приключение с акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={shark}
                    />
                    <ExcursionItem
                        title={'Путешествие на затонувший корабль'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={ship}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Это приключение оставит впечатление на всю жизнь! Гигантское  морское животное может достигать даже 20 метров!'}
                        imageUrl={whaleShark}
                    />

                </div>
            </div>
        </div>
    );
};

export default Excursions;
