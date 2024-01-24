import { FC, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren & {
    onClick?: VoidFunction;
    color?: 'black' | 'white';
}

const Button: FC<ButtonProps> = ({ children, color = 'black', onClick }) => {
    return (
        <div>
            <button
                className={`${color === 'black' ? 'border-black text-black' : 'border-white text-white'} text-default py-4 px-8 border rounded-default`}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
