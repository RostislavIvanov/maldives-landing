import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

export type FaqDataType = {
    question: string;
    answer: string;
}
export const useFaqData = () => {
    const t = useTranslate('faq');

    return [
        {
            question: t(`data.${0}.question`),
            answer: t(`data.${0}.answer`),
        },
        {
            question: t(`data.${1}.question`),
            answer: t(`data.${1}.answer`),
        },
        {
            question: t(`data.${2}.question`),
            answer: t(`data.${2}.answer`),
        },
        {
            question: t(`data.${3}.question`),
            answer: t(`data.${3}.answer`),
        },
        {
            question: t(`data.${4}.question`),
            answer: t(`data.${4}.answer`),
        },
    ];
};
