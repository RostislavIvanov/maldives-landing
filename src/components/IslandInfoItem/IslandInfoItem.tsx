import classes from "./IslandInfoItem.module.css";
import { FC, ReactNode } from "react";
import Button from "~/components/UI/Button/Button.tsx";

type IslandInfoItemProps = {
    img: string;
    subtitle: string;
    text: ReactNode;
    reverse?: boolean;
}

const IslandInfoItem: FC<IslandInfoItemProps> = ({ img, text, subtitle, reverse }) => {
    return (
        <div className={reverse ? classes.islandInfoReverse__con : classes.islandInfo__con}>
            {reverse
                ?
                <>
                    <div className={classes.islandInfoReverse__text}>
                        <h5 className={classes.islandInfo__label}>{subtitle}</h5>
                        <div className={classes.islandInfo__desc}>{text}</div>
                        <Button>Отправиться в тур</Button>
                    </div>
                    <div className={classes.islandInfo__img}>
                        <img src={img} alt=""/>
                    </div>
                </>
                : <>
                    <div className={classes.islandInfo__img}>
                        <img src={img} alt=""/>
                    </div>
                    <div className={classes.islandInfo__text}>
                        <h5 className={classes.islandInfo__label}>{subtitle}</h5>
                        <div className={classes.islandInfo__desc}>{text}</div>
                        <Button>Отправиться в тур</Button>
                    </div>
                </>
            }
        </div>
    );
};

export default IslandInfoItem;
