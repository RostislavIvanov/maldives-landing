                                                                                                                        import beach from "../../assets/images/Beach.jpg";
import underwater from "../../assets/images/under.jpg";
import amenities from "../../assets/images/Amenities.jpg";
import classes from './AboutIslandBlock.module.css'
import BlockTitle from "../../components/UI/BlockTitle/BlockTitle.tsx";
import IslandInfoItem from "../../components/IslandInfoItem/IslandInfoItem.tsx";
import notBoring from '../../assets/images/not-boring.jpg'
import cheep from '../../assets/images/cheep.jpg'

const AboutIslandBlock = () => {

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.titleWrapper}>
                        <BlockTitle label={'Причины, почему стоит выбрать нас'} children={'Об Острове'}/>
                    </div>

                    <div className={classes.aboutIslandBlock__list}>
                        <IslandInfoItem
                            img={notBoring}
                            subtitle={'Это НЕ скучный пляжный отдых'}
                            text={'У многих путешественников Мальдивы ассоциируются только с дорогим пляжным отдыхом. Мы разбиваем эти стереотипы и предложим вам настоящие приключения на этих райских островах по демократичным ценам.'}
                        />

                        <IslandInfoItem
                            img={cheep}
                            subtitle={'У нас не дорого!'}
                            text={'Вопреки всеобщему мнению, отдых на Мальдивах, который мы предлагаем, не обойдется Вам в огромную сумму. Каждый желающий сможет ощутить красоту Мальдив на собственном примере!'}
                            reverse
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
                            reverse
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
