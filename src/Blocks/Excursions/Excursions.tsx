import classes from './Excursions.module.css'
import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import ExcursionItem from "~/components/ExcursionItem/ExcursionItem.tsx";
import beach from '../../assets/images/Beach.jpg'

const Excursions = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>Экскурсии</BlockTitle>
                </div>

                <div className={'flex justify-between flex-wrap items-end text-white'}>
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?'}
                        imageUrl={beach}
                    />
                </div>
            </div>
        </div>
    );
};

export default Excursions;
