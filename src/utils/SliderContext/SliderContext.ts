import { createContext } from "react";

type SliderContextType = {
    goToSlide: (number: number) => void;
    changeSlide: (direction?: number) => void;
    slidesCount: number;
    slideNumber: number;
    images: string[];
}

const SliderContext = createContext<SliderContextType>({
    goToSlide: () => {
    },
    changeSlide: () => {
    },
    slidesCount: 0,
    slideNumber: 0,
    images: [],
});

export default SliderContext