import { FC, useState } from 'react';
import classes from './FAQ.module.css';
import BlockTitle from '~/components/UI/BlockTitle/BlockTitle.tsx';
import { FaqDataType } from '~/data/faqData.ts';

type FAQProps = {
    data: FaqDataType[];
}
const FAQ: FC<FAQProps> = ({ data }) => {
    const [ isOpen, setIsOpen ] = useState<number | null>(null);
    const toggleFAQ = (index: number) => {
        if (isOpen === index) {
            setIsOpen(null);
        } else {
            setIsOpen(index);
        }
    };

    return (
        <div className={classes.content}>
            <div className={classes.wrapper}>
                <div className={classes.titleWrapper}>
                    <BlockTitle>Часто задаваемые вопросы</BlockTitle>
                </div>
                <div className="">
                    {data.map((faq, index) => (
                        <div key={index}>
                            <div className={classes.questionItem} onClick={() => toggleFAQ(index)}>
                                <div className={classes.questionItem__con}>
                                    <h5 className={classes.questionItem__title}>{faq.question}</h5>
                                    <svg
                                        className={`transition-transform transform ${isOpen === index ? 'rotate-180' : ''} w-[40px] h-[40px]`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                                {isOpen === index && (
                                    <p className={classes.questionItem__answer}>{faq.answer}</p>
                                )}
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
