

export const generateAvailableTimes = (startTime: string, endTime: string, durationMinutes: number) => {

    const [hours, minutes] = startTime.split(":");
    const startMinutes = Number(hours) * 60 + Number(minutes);

    const [endHours, endMinutes] = endTime.split(":");
    const endTotalMinutes = Number(endHours) * 60 + Number(endMinutes);

    const times: string[] = [];
    let currentMinutes = startMinutes;


    while (currentMinutes + durationMinutes <= endTotalMinutes) {
        const hours = Math.floor(currentMinutes / 60);
        const minutes = currentMinutes % 60;

        const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

        times.push(formattedTime);

        currentMinutes += durationMinutes;
    }

    return times;
}