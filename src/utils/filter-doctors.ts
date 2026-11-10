import type { Doctor } from "@/types/doctor";


export const filterDoctors = (doctors: Doctor[], specialty: string) => {

    const filteredDoctors = doctors.filter(
        (doctor) => doctor.specialty === specialty
    )

    return filteredDoctors;
}
