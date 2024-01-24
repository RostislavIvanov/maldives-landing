import { FC, PropsWithChildren } from "react";
import classes from './Button.module.css'

type ButtonProps = PropsWithChildren & {
    onClick?: VoidFunction;
    color?: 'black' | 'white';
}

const Button: FC<ButtonProps> = ({ children, color = 'black', onClick }) => {
    return (
        <div>
            <button
                className={`${color === 'black' ? classes.black : classes.white} ${classes.default}`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
