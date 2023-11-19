import img from "../../assets/images/AboutIslandBack-dark.jpeg";
import ship from "../../assets/images/Ship.jpg";
import prices from "../../assets/images/Democratic-prices.jpg";
import beach from "../../assets/images/Beach.jpg";
import underwater from "../../assets/images/Underwater-life.jpg";
import amenities from "../../assets/images/Amenities.jpg";
import classes from './AboutIslandBlock.module.css'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle.tsx";
import IslandInfoItem from "../../components/IslandInfoItem/IslandInfoItem.tsx";

const AboutIslandBlock = () => {

    return (
        <div style={{ backgroundImage: `url(${img})` }}
             className={classes.content}>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.titleWrapper}>
                        <BlockTitle children={'Об Острове'}/>
                    </div>

                    <div>
                        <IslandInfoItem
                            img={ship}
                            subtitle={'Это НЕ скучный пляжный отдых'}
                            text={'У многих путешественников Мальдивы ассоциируются только с дорогим пляжным отдыхом. Мы разбиваем эти стереотипы и предложим вам настоящие приключения на этих райских островах по демократичным ценам.'}
                        />

                        <IslandInfoItem
                            img={prices}
                            subtitle={'У нас не дорого!'}
                            text={'Тут я пока текст не придумал'} // TODO
                        />

                        <IslandInfoItem
                            img={beach}
                            subtitle={'Мы САМИ обустраивали пляж для вашего удобства на острове'}
                            text={'Для красивого загара и пляжного отдыха есть пляж «бикини» с белым песком и\n' +
                                'бесплатными шезлонгами.\n' +
                                'На пляже высажены пальмы, под кронами которых можно спрятаться от солнца.\n' +
                                'Вход в воду комфортный, а вода - изумрудная. Этот пляж был открыт усилиями нашей\n' +
                                'компании. Мы следим за его чистотой для своих гостей.'}
                        />

                        <IslandInfoItem
                            img={underwater}
                            subtitle={'Подводная жизнь, которую нигде не увидеть!'}
                            text={'В декабре и январе его окружает светящийся планктон – настоящее чудо природы!'} // TODO Здесь еще хочется что-то написать
                        />

                        <IslandInfoItem
                            img={amenities}
                            subtitle={'На острове есть всё для полноценной беззаботной жизни'}
                            text={' Здесь есть все необходимое для отдыха в безопасности: отели, кафе и рестораны,\n' +
                                'больница, полиция, магазины с продуктами,\n' +
                                'одеждой и сувенирами, дайвинг-центры, банкомат. По набережной можно безопасно\n' +
                                'гулять в любое время суток,\n' +
                                'наслаждаясь ласковой летней погодой круглый год.'}
                        />

                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutIslandBlock;
