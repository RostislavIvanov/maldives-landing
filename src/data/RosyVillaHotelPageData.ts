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

export type roomDataType = {
    icon: string,
    text: string,
}

export const standardRoomData: roomDataType[] = [
    {
        icon: room,
        text: '18 кв. м.',
    },
    {
        icon: snowflake,
        text: 'Кондиционер',
    },
    {
        icon: monitor,
        text: 'Плазменный телевизор',
    },
    {
        icon: wifi,
        text: 'Бесплатный Wi-Fi',
    },
    {
        icon: soundOff,
        text: 'Хорошая звукоизоляция',
    },
    {
        icon: whisky,
        text: 'Мини-бар',
    },
    {
        icon: shower,
        text: 'Душевая кабина',
    },
];

export const deluxeRoomData: roomDataType[] = [
    {
        icon: room,
        text: '19 кв. м.',
    },
    {
        icon: snowflake,
        text: 'Кондиционер',
    },
    {
        icon: monitor,
        text: 'Плазменный телевизор',
    },
    {
        icon: wifi,
        text: 'Бесплатный Wi-Fi',
    },
    {
        icon: soundOff,
        text: 'Хорошая звукоизоляция',
    },
    {
        icon: whisky,
        text: 'Мини-бар',
    },
    {
        icon: balcony,
        text: 'Балкон',
    },
    {
        icon: pool,
        text: 'Вид на бассейн',
    },
    {
        icon: town,
        text: 'Вид на город',
    },
    {
        icon: shower,
        text: 'Душевая кабина',
    },
];

export const familyDeluxeRoomData: roomDataType[] = [
    {
        icon: room,
        text: '23 кв. м.',
    },
    {
        icon: snowflake,
        text: 'Кондиционер',
    },
    {
        icon: monitor,
        text: 'Плазменный телевизор',
    },
    {
        icon: wifi,
        text: 'Бесплатный Wi-Fi',
    },
    {
        icon: soundOff,
        text: 'Хорошая звукоизоляция',
    },
    {
        icon: whisky,
        text: 'Мини-бар',
    },
    {
        icon: balcony,
        text: 'Балкон',
    },
    {
        icon: pool,
        text: 'Вид на бассейн',
    },
    {
        icon: town,
        text: 'Вид на город',
    },
    {
        icon: shower,
        text: 'Душевая кабина',
    },
];

export const premiumRoomData: roomDataType[] = [
    {
        icon: room,
        text: '25 кв. м.',
    },
    {
        icon: snowflake,
        text: 'Кондиционер',
    },
    {
        icon: monitor,
        text: 'Плазменный телевизор',
    },
    {
        icon: wifi,
        text: 'Бесплатный Wi-Fi',
    },
    {
        icon: soundOff,
        text: 'Хорошая звукоизоляция',
    },
    {
        icon: whisky,
        text: 'Мини-бар',
    },
    {
        icon: balcony,
        text: 'Балкон',
    },
    {
        icon: pool,
        text: 'Вид на бассейн',
    },
    {
        icon: town,
        text: 'Вид на город',
    },
    {
        icon: shower,
        text: 'Душевая кабина',
    },
    {
        icon: bath,
        text: 'Ванна',
    },
];
