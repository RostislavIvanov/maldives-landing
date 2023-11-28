import classes from './Excursions.module.css'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle.tsx";

const Excursions = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>Экскурсии</BlockTitle>
                </div>

                <div className={'flex justify-between items-end text-white'}>
                    <div className={'rounded-[50px] overflow-hidden flex-1 h-[80vh] mx-4 relative shadow-2xl'}>
                        <div className={'bg-black absolute inset-0 opacity-30 z-0'}></div>
                        <div className={'bg-beach bg-cover w-full h-full flex flex-col items-end justify-end'}>
                            <div className={'z-10 text-right'}>
                                <h5 className={'text-[40px] font-bold mr-8'}>Тур с китовыми акулами</h5>
                                <div className={'filter backdrop-blur-[10px] backdrop-saturate-[180%] z-10 p-8'}>
                                    <div className={'z-20'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?</div>
                                    <button className={'text-default py-4 px-8 border border-white rounded-3xl mt-6'}>Отправиться в тур</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'rounded-[50px] overflow-hidden flex-1 h-[80vh] mx-4 relative shadow-2xl'}>
                        <div className={'bg-black absolute inset-0 opacity-30 z-0'}></div>
                        <div className={'bg-beach bg-cover w-full h-full flex flex-col items-end justify-end'}>
                            <div className={'z-10 text-right'}>
                                <h5 className={'text-[40px] font-bold mr-8'}>Тур с китовыми акулами</h5>
                                <div className={'filter backdrop-blur-[10px] backdrop-saturate-[180%] z-10 p-8'}>
                                    <div className={'z-20'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?</div>
                                    <button className={'text-default py-4 px-8 border border-white rounded-3xl mt-6'}>Отправиться в тур</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'rounded-[50px] overflow-hidden flex-1 h-[80vh] mx-4 relative shadow-2xl'}>
                        <div className={'bg-black absolute inset-0 opacity-30 z-0'}></div>
                        <div className={'bg-beach bg-cover w-full h-full flex flex-col items-end justify-end'}>
                            <div className={'z-10 text-right'}>
                                <h5 className={'text-[40px] font-bold mr-8'}>Тур с китовыми акулами</h5>
                                <div className={'filter backdrop-blur-[10px] backdrop-saturate-[180%] z-10 p-8'}>
                                    <div className={'z-20'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, itaque, porro. Ab accusamus architecto consequuntur, cum explicabo impedit laudantium maiores praesentium sapiente tempora veniam voluptatem. Fugiat iste iusto pariatur reprehenderit?</div>
                                    <button className={'text-default py-4 px-8 border border-white rounded-3xl mt-6'}>Отправиться в тур</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Excursions;
