export const scrollToElement = (e: React.MouseEvent<HTMLElement>, link: string) => {
    e.preventDefault();
    const el = document.getElementById(link);
    el?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
};
