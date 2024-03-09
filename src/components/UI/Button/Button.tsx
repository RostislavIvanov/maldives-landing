import { FC, PropsWithChildren } from 'react';
import classes from './Button.module.css';

type ButtonProps =
    PropsWithChildren
    & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
    & {
    color?: 'black' | 'white';
}

const Button: FC<ButtonProps> = ({ children, color = 'black', onClick }) => {
    return (
        <button
            className={`${color === 'black' ? classes.black : classes.white} ${classes.default}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
