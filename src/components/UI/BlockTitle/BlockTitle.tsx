import classes from './BlockTitle.module.css'
import { FC, PropsWithChildren } from "react";

const BlockTitle:FC<PropsWithChildren> = ({children}) => {
    return (
        <h2 className={classes.title}>
            {children}
        </h2>
    );
};

export default BlockTitle;
