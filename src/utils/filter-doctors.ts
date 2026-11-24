import type { Doctor } from "@/types/doctor";

const normalize = (value: string) => {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replaceAll(" ", "-");
};

export const filterDoctors = (doctors: Doctor[], specialty: string) => {
    return doctors.filter(
        (doctor) => normalize(doctor.specialty) === normalize(specialty)
    );
};