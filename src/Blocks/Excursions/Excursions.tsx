import classes from './Excursions.module.css'
import BlockTitle from "~/components/UI/BlockTitle/BlockTitle.tsx";
import ExcursionItem from "~/components/ExcursionItem/ExcursionItem.tsx";
import ModalPanel from "~/components/ModalPanel/ModalPanel.tsx";
import fishing from '../../assets/images/fishing.jpg'
import snorkeling from '../../assets/images/snorkeling.jpg'
import dolphin from '../../assets/images/dolphine-tour.jpg'
import ship from '../../assets/images/Ship.jpg'
import whaleShark from '../../assets/images/whale-shark.jpg'
import shark from '../../assets/images/sharks.jpg'
import points from '../../assets/images/points.jpg'
import island from '../../assets/images/island.jpg'
import dinner from '../../assets/images/dinner.jpg'
import { useState } from "react";

type CurrentExcursion = {
    images: string[];
    text?: string;
}

const Excursions = () => {
    const [ isModalOpened, setIsModalOpened ] = useState(false)
    const [ currentExcursion, setCurrentExcursion ] = useState<CurrentExcursion>({
        images: [],
        text: ''
    })
    const closeModal = () => {
        setIsModalOpened(false);
        setCurrentExcursion({
            images: [],
            text: ''
        })
    }
    const openModal = (images: string[], text?: string) => {
        setCurrentExcursion({
            images: images,
            text: text
        })
        setIsModalOpened(true)
    }

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

                <div className={'flex justify-between flex-wrap items-end text-white'}>
                    <ExcursionItem
                        title={'3 точки для плавания с маской'}
                        description={'Вы посетите Manta Point и сможете поплавать рядом с мантами - древними и величественными животными. Также, там обитают большие морские черепахи!'}
                        imageUrl={points}
                        openModal={openModal}
                        images={[ points, fishing, dolphin, shark ]}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci aspernatur autem cum, dignissimos dolor explicabo illo, minima necessitatibus nisi nulla odio optio quaerat quas quo reprehenderit saepe unde vitae?'}
                    />
                    <ExcursionItem
                        title={'Рыбалка'}
                        description={'Предлагаем несколько видов рыбалок: вечерняя рыбалка на закате и утренняя на восходе. Вы своими руками сможете поймать тунца, сможете устроить подводную охоту на лобстеров, и так же собственноручно поймать кальмаров.'}
                        imageUrl={fishing}
                        images={[ dolphin, shark ]}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Тур с дельфинами'}
                        description={'Мы отправимся в настоящее морское сафари - будем искать диких дельфинов. Вы увидите несколько стай, сможете наблюдать их грациозные прыжки и даже поплавать с ними под водой.'}
                        imageUrl={dolphin}
                        images={[ points ]}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Приключение с акулами'}
                        description={'Плавание с акулами "няньками" - настоящая психологическая терапия. Если соблюдать инструктаж - нахождение с ними безопасно и более того, акулы очень тактильные, к ними приятно прикасаться и они не сопротивляются.'}
                        imageUrl={shark}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Путешествие на затонувший корабль'}
                        description={'Приглашаем Вас погрузиться к затонувшему кораблю! Это возможно сделать и с обычной маской для снорклинга, и с аквалангом. Впечатления гарантированы!'}
                        imageUrl={ship}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Тур с китовыми акулами'}
                        description={'Это приключение оставит впечатление на всю жизнь! Гигантское морское животное может достигать даже 20 метров!'}
                        imageUrl={whaleShark}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Ночь на необитаемом острове'}
                        description={'Почувствуйте себя как Робинзон Крузо - проведите ночь на необитаемом острове! Мы так же можем организовать тематическую вечеринку, танцы под звездами. С вами остается наша команда, которая поможет все обустроить: поставит палатки, приготовит ужин.'}
                        imageUrl={island}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Обед на необитаемом острове'}
                        description={'Вы попадете на необитаемый остров, где сможете заняться чем угодно. Можете купаться, наслаждаться видами или вкусно пообедать. На таких островах получаются особенно яркие фотографии. Обязательно возьмите с собой одежду для фотосессии!'}
                        imageUrl={dinner}
                        openModal={openModal}
                    />
                    <ExcursionItem
                        title={'Снорклинг на домашнем рифе'}
                        description={'Не выезжая с острова Вы получите удовольствие от наблюдения за кораллами и разноцветными рыбками. Отличительной особенностью нашего домашнего рифа являются затонувшие предметы: качели с надписью Guraidhoo, катер, велосипеды с "глазами", смотрящие на вас со дна.'}
                        imageUrl={snorkeling}
                        openModal={openModal}
                    />
                </div>
            </div>
            <div className={isModalOpened ? classes.modalShow : classes.modalHide}>
                <ModalPanel
                    images={currentExcursion.images}
                    text={currentExcursion.text}
                    closeModal={closeModal}
                    autoplay={true}
                    autoplayTime={4000}
                />
            </div>
        </div>
    );
};

export default Excursions;
