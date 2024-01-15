import { FC, PropsWithChildren } from "react";

const Description: FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={'text-center leading-loose text-subtitle text-gray-700'}>
            {children}
        </div>
    );
};

export default Description;
