import classes from './Speech.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import manager from '~/assets/images/hassanPNG.png';
import signature from '~/assets/images/signature.png';
import { FC } from 'react';

const Speech: FC = () => {
    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>Слово руководителя</BlockTitle>
                </div>
                <div className={classes.speech}>
                    <div className={classes.speech__img}>
                        <img src={manager} alt=""/>
                    </div>
                    <div className={classes.speech__text}>
                        <p>
                            Мальдивы у многих людей ассоциируются только с пляжным отдыхом в дорогих отелях, и туристы
                            уезжают с нашей страны так и не узнав ее историю, её быт, её возможности.
                        </p>
                        <p>
                            Я хочу показать путешественникам невероятную красоту подводного мира и изменить мнение, что
                            Мальдивы – это только пляжный отдых.
                        </p>
                        <p>
                            Приехав к нам, вы окунётесь в захватывающее мальдивское
                            приключение - сможете переночевать на необитаемом острове, перебороть свои страхи во время
                            плавания с акулами и мантами, нырнуть к затонувшему кораблю, поймать большого лобстера или
                            тунца, отправиться в круиз на яхте по своему маршруту, погрузиться в быт мальдивского
                            населения и почувствовать наше гостеприимство.
                        </p>
                    </div>
                </div>
                <div className={classes.speech__bottom}>
                    <div className={classes.speech__ending}>
                        <p>Будем рады видеть Вас у нас в гостях на острове К. Гурайду!</p>
                        <p>Управляющий директор компании HASSAN ZILAAL</p>
                    </div>
                    <div className={classes.speech__signature}>
                        <img src={signature} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Speech;
