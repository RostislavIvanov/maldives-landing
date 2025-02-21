import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import classes from './Programs.module.css';
import wedding from '~/assets/images/wedding.jpg';
import cruise from '~/assets/images/cruise.jpg';
import heal from '~/assets/images/healing.jpg';
import resortDay from '~/assets/images/resort-day.jpg';
import resort1 from '~/assets/images/resort-1.jpg';
import resort2 from '~/assets/images/resort-2.jpg';
import resort3 from '~/assets/images/resort-3.jpg';
import resort4 from '~/assets/images/resort-4.jpg';
import resort5 from '~/assets/images/resort-5.jpg';
import resort6 from '~/assets/images/resort-6.jpg';
import resort7 from '~/assets/images/resort-7.jpg';
import resort8 from '~/assets/images/resort-8.jpg';
import resort9 from '~/assets/images/resort-9.jpg';
import resort10 from '~/assets/images/resort-10.jpg';
import resort11 from '~/assets/images/resort-11.jpg';
import resort12 from '~/assets/images/resort-12.jpg';
import resort13 from '~/assets/images/resort-13.jpg';
import resort14 from '~/assets/images/resort-14.jpg';
import resort15 from '~/assets/images/resort-15.jpg';
import resort16 from '~/assets/images/resort-16.jpg';
import resort17 from '~/assets/images/resort-17.jpg';
import resort18 from '~/assets/images/resort-18.jpg';
import resort19 from '~/assets/images/resort-19.jpg';
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
                        modalImages={[ resortDay, resort1, resort2, resort3, resort4,
                            resort5, resort6, resort7, resort8, resort9, resort10, resort11,
                            resort12, resort13, resort14, resort15, resort16, resort17, resort18, resort19
                        ]}
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
