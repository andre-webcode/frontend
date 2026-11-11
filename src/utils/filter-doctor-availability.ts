import type { DoctorAvailability } from "@/types/doctor-availability";


export const filterDoctorAvailability = (doctorAvailability: DoctorAvailability[], daySelect: string) => {
    
    const filteredAvailability = doctorAvailability.filter(
        (availability) => availability.dayOfWeek === daySelect
    )

    return filteredAvailability;
}