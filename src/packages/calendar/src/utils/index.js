export const changeOption = {
    'prev-month': (time) => {
        const temTime = new Date(time);
        const month = temTime.getMonth();
        temTime.setMonth(month - 1);
        return temTime.getTime();
    },
    'today': () => Date.now(),
    'next-month': (time) => {
        const temTime = new Date(time);
        const month = temTime.getMonth();
        temTime.setMonth(month + 1);
        return temTime.getTime();
    }
};
