import { FC, PropsWithChildren } from "react";

interface IButtonProps extends PropsWithChildren {
    color?: 'black' | 'white';
}

const Button: FC<IButtonProps> = ({ children, color = 'black' }) => {
    return (
        <div>
            <button
                className={`${color === 'black' ? 'border-black text-black' : 'border-white text-white'} text-default py-4 px-8 border rounded-default mt-6`}>
                {children}
            </button>
        </div>
    );
};

export default Button;
