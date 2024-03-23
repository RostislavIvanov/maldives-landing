import room from '~/assets/icons/plans.svg';
import monitor from '~/assets/icons/monitor.svg';
import snowflake from '~/assets/icons/snowflake.svg';
import soundOff from '~/assets/icons/sound-off.svg';
import whisky from '~/assets/icons/whisky.svg';
import balcony from '~/assets/icons/balcony.svg';
import town from '~/assets/icons/houses.svg';
import pool from '~/assets/icons/swimming-pool.svg';
import wifi from '~/assets/icons/wifi.svg';
import bath from '~/assets/icons/bath.svg';
import shower from '~/assets/icons/shower.svg';
import { useTranslate } from '~/hooks/useTranslate/useTranslate.ts';

export const useHotelRoomData = () => {
    const t = useTranslate('hotel');

    const standardRoomData = [
        {
            icon: room,
            text: `18 ${t(`icons.${0}.text`)}`,
        },
        {
            icon: snowflake,
            text: t(`icons.${1}.text`),
        },
        {
            icon: monitor,
            text: t(`icons.${2}.text`),
        },
        {
            icon: wifi,
            text: t(`icons.${3}.text`),
        },
        {
            icon: soundOff,
            text: t(`icons.${4}.text`),
        },
        {
            icon: whisky,
            text: t(`icons.${5}.text`),
        },
        {
            icon: shower,
            text: t(`icons.${6}.text`),
        },
    ];

    const deluxeRoomData = [
        {
            icon: room,
            text: `19 ${t(`icons.${0}.text`)}`,
        },
        {
            icon: snowflake,
            text: t(`icons.${1}.text`),
        },
        {
            icon: monitor,
            text: t(`icons.${2}.text`),
        },
        {
            icon: wifi,
            text: t(`icons.${3}.text`),
        },
        {
            icon: soundOff,
            text: t(`icons.${4}.text`),
        },
        {
            icon: whisky,
            text: t(`icons.${5}.text`),
        },
        {
            icon: balcony,
            text: t(`icons.${7}.text`),
        },
        {
            icon: pool,
            text: t(`icons.${8}.text`),
        },
        {
            icon: town,
            text: t(`icons.${9}.text`),
        },
        {
            icon: shower,
            text: t(`icons.${6}.text`),
        },
    ];

    const familyDeluxeRoomData = [
        {
            icon: room,
            text: `23 ${t(`icons.${0}.text`)}`,
        },
        {
            icon: snowflake,
            text: t(`icons.${1}.text`),
        },
        {
            icon: monitor,
            text: t(`icons.${2}.text`),
        },
        {
            icon: wifi,
            text: t(`icons.${3}.text`),
        },
        {
            icon: soundOff,
            text: t(`icons.${4}.text`),
        },
        {
            icon: whisky,
            text: t(`icons.${5}.text`),
        },
        {
            icon: balcony,
            text: t(`icons.${7}.text`),
        },
        {
            icon: pool,
            text: t(`icons.${8}.text`),
        },
        {
            icon: town,
            text: t(`icons.${9}.text`),
        },
        {
            icon: shower,
            text: t(`icons.${6}.text`),
        },
    ];

    const premiumRoomData = [
        {
            icon: room,
            text: `25 ${t(`icons.${0}.text`)}`,
        },
        {
            icon: snowflake,
            text: t(`icons.${1}.text`),
        },
        {
            icon: monitor,
            text: t(`icons.${2}.text`),
        },
        {
            icon: wifi,
            text: t(`icons.${3}.text`),
        },
        {
            icon: soundOff,
            text: t(`icons.${4}.text`),
        },
        {
            icon: whisky,
            text: t(`icons.${5}.text`),
        },
        {
            icon: balcony,
            text: t(`icons.${7}.text`),
        },
        {
            icon: pool,
            text: t(`icons.${8}.text`),
        },
        {
            icon: town,
            text: t(`icons.${9}.text`),
        },
        {
            icon: shower,
            text: t(`icons.${6}.text`),
        },
        {
            icon: bath,
            text: t(`icons.${10}.text`),
        },
    ];

    return [ standardRoomData, deluxeRoomData, familyDeluxeRoomData, premiumRoomData ];
};
