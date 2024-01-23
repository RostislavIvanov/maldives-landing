import classes from './BlockTitle.module.css'
import { FC, PropsWithChildren } from "react";

interface IBlockTitle extends PropsWithChildren {
    label?: string;
    id?: string;
}

const BlockTitle: FC<IBlockTitle> = ({ children, label, id = '' }) => {
    return (
        <>
            <h2 id={id} className={classes.title}>
                {children}
            </h2>
            {!!label &&
                <p className={classes.label}>
                    {label}
                </p>
            }
        </>
    );
};

export default BlockTitle;
