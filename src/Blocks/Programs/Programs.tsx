import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './Programs.module.css';
import wedding from '~/assets/images/wedding.jpg';
import cruise from '~/assets/images/cruise.jpg';
import heal from '~/assets/images/healing.jpg';
import resortDay from '~/assets/images/resort-day.jpg';
import romantic from '~/assets/images/romantic.jpeg';
import culture from '~/assets/images/culture.jpg';
import culture1 from '~/assets/images/culture-1.jpg';
import ProgramsItem from '~/components/ProgramsItem/ProgramsItem.tsx';
import { FC } from 'react';
import { useModal } from '~/hooks/useModal/useModal.tsx';
import Description from '~/components/Description/Description.tsx';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

const Programs: FC = () => {
    const [ ModalPanel, openModal ] = useModal(4000);
    const t = useTranslate('programs');

    return (
        <section>
            <div className={classes.titleWrapper}>
                <BlockTitle label={t('subTitle')} id={'features'}>
                    {t('title')}
                </BlockTitle>
                <Description>
                    {t('advertisement')}
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://t.me/veterperemen_maldives">
                        {t('channel')}
                    </a>
                </Description>
            </div>
            <div className={classes.features}>
                <div className={classes.features__left}>
                    <ProgramsItem
                        label={t(`items.${0}.label`)}
                        subLabel={t(`items.${0}.subLabel`)}
                        imageUrl={wedding} side={'left'}
                        openModal={openModal}
                        modalImages={[ wedding ]}
                        modalText={t(`items.${0}.modalText`)}
                    />
                    <ProgramsItem
                        label={t(`items.${1}.label`)}
                        subLabel={t(`items.${1}.subLabel`)}
                        imageUrl={heal} side={'left'}
                        openModal={openModal}
                        modalImages={[ heal ]}
                        modalText={t(`items.${1}.modalText`)}
                    />
                </div>
                <div className={classes.features__right}>
                    <ProgramsItem
                        label={t(`items.${2}.label`)}
                        subLabel={t(`items.${2}.subLabel`)}
                        imageUrl={cruise} side={'right'}
                        openModal={openModal}
                        modalImages={[ cruise ]}
                        modalText={t(`items.${2}.modalText`)}
                    />
                </div>
            </div>
            <div className={classes.features}>
                <div className={classes.features__right}>
                    <ProgramsItem
                        label={t(`items.${3}.label`)}
                        subLabel={t(`items.${3}.subLabel`)}
                        imageUrl={resortDay} side={'right'}
                        openModal={openModal}
                        modalImages={[ resortDay ]}
                        modalText={t(`items.${3}.modalText`)}
                    />
                </div>
                <div className={classes.features__left}>
                    <ProgramsItem
                        label={t(`items.${4}.label`)}
                        subLabel={t(`items.${4}.subLabel`)}
                        imageUrl={romantic} side={'left'}
                        openModal={openModal}
                        modalImages={[ romantic ]}
                        modalText={t(`items.${4}.modalText`)}
                    />
                    <ProgramsItem
                        label={t(`items.${5}.label`)}
                        subLabel={t(`items.${5}.subLabel`)}
                        imageUrl={culture} side={'left'}
                        openModal={openModal}
                        modalImages={[ culture, culture1 ]}
                        modalText={t(`items.${5}.modalText`)}
                    />
                </div>
            </div>
            <div className={classes.features__description}>
                <Description>
                    {t('description')}
                </Description>
            </div>
            <ModalPanel/>
        </section>
    );
};

export default Programs;
