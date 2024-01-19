import { FC, PropsWithChildren } from "react";

type IButtonProps = PropsWithChildren & {
    color?: 'black' | 'white';
}

const Button: FC<IButtonProps> = ({ children, color = 'black' }) => {
    return (
        <div>
            <button
                className={`${color === 'black' ? 'border-black text-black' : 'border-white text-white'} text-default py-4 px-8 border rounded-default`}>
                {children}
            </button>
        </div>
    );
};

export default Button;
