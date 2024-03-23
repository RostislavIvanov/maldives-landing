import classes from './IslandInfoItem.module.css';
import { FC } from 'react';
import Button from '~/components/UI/Button/Button.tsx';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

type IslandInfoItemProps = {
    img: string;
    subtitle: string;
    text: string;
    reverse?: boolean;
    handleLinkClick: (e: React.MouseEvent<HTMLElement>, link: string) => void;
}

const IslandInfoItem: FC<IslandInfoItemProps> = ({ img, text, subtitle, reverse, handleLinkClick }) => {
    const t = useTranslate('aboutIsland');

    return (
        <div className={reverse ? classes.islandInfoReverse__con : classes.islandInfo__con}>
            {reverse
                ?
                <>
                    <div className={classes.islandInfoReverse__text}>
                        <h5 className={classes.islandInfo__label}>{subtitle}</h5>
                        <div dangerouslySetInnerHTML={{ __html: text }} className={classes.islandInfo__desc}/>
                        <Button onClick={e => handleLinkClick(e, 'contacts')}>
                            {t('button')}
                        </Button>
                    </div>
                    <div className={classes.islandInfo__img}>
                        <img src={img} alt=''/>
                    </div>
                </>
                : <>
                    <div className={classes.islandInfo__img}>
                        <img src={img} alt=''/>
                    </div>
                    <div className={classes.islandInfo__text}>
                        <h5 className={classes.islandInfo__label}>{subtitle}</h5>
                        <div dangerouslySetInnerHTML={{ __html: text }} className={classes.islandInfo__desc}/>
                        <Button onClick={e => handleLinkClick(e, 'contacts')}>
                            {t('button')}
                        </Button>
                    </div>
                </>
            }
        </div>
    );
};

export default IslandInfoItem;
