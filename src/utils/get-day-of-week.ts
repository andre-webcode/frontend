

export const getDayOfWeek = (date: string) => {

    const dateObject = new Date(date);

    const day = dateObject.getUTCDay();

    const days = [
        "SUNDAY",
        "MONDAY",
        "TUESDAY",
        "WEDNESDAY",
        "THURSDAY",
        "FRIDAY",
        "SATURDAY"
    ];

    return days[day];
}