import classes from './BlockTitle.module.css'
import { FC, PropsWithChildren } from 'react';

type BlockTitleProps = PropsWithChildren & {
    label?: string;
    id?: string;
}

const BlockTitle: FC<BlockTitleProps> = ({ children, label, id }) => {
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
