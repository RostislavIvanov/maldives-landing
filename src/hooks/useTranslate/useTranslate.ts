import { useTranslation } from 'react-i18next';

export const useTranslate = (blockName: string) => {
    const { t } = useTranslation('global');
    return (blockPart: string) => t(`${blockName}.${blockPart}`);
};
