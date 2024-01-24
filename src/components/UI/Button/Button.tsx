import { FC, PropsWithChildren } from "react";
import classes from './Button.module.css'

interface IButtonProps extends PropsWithChildren {
    color?: 'black' | 'white';
}

const Button: FC<IButtonProps> = ({ children, color = 'black' }) => {
    return (
        <button className={`${color === 'black' ? classes.black : classes.white} ${classes.default}`}>
            {children}
        </button>
    );
};

export default Button;
