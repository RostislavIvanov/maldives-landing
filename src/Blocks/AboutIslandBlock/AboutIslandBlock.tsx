import beach from '~/assets/images/Beach.jpg';
import underwater from '~/assets/images/under.jpg';
import amenities from '~/assets/images/Amenities.jpg';
import classes from './AboutIslandBlock.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import IslandInfoItem from '~/components/IslandInfoItem/IslandInfoItem.tsx';
import notBoring from '~/assets/images/not-boring.jpg';
import cheep from '~/assets/images/cheep.jpg';
import Description from '~/components/Description/Description.tsx';
import { scrollToElement } from '~/utils/ScrollToElement/ScrollToElement.ts';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const AboutIslandBlock = () => {
    const t = useTranslate('aboutIsland');
    const imageData = [notBoring, cheep, beach, underwater, amenities];

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div>
                    <div className={classes.titleWrapper}>
                        <BlockTitle label={t('subTitle')} children={t('title')} id={'about'}/>
                    </div>
                    <div className={classes.aboutIslandBlock__list}>
                        {imageData.map((el, ind) =>
                            <IslandInfoItem
                                key={ind}
                                img={el}
                                handleLinkClick={scrollToElement}
                                subtitle={t(`items.${ind}.label`)}
                                text={t(`items.${ind}.description`)}
                                reverse={ind % 2 === 1}
                            />
                        )}
                        <Description>{t('description')}</Description>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutIslandBlock;
