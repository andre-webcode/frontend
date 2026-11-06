import {
    HeartPulse,
    Baby,
    Stethoscope,
    Bone,
    Microscope,
    Activity,
} from "lucide-react";

export const specialties = [
    {
        id: "cardiologia",
        name: "Cardiologia",
        description: "Cuidados com a saúde do coração.",
        icon: HeartPulse,
        image: "/cardiologia.jpg",
    },
    {
        id: "pediatria",
        name: "Pediatria",
        description: "Atenção especial à saúde infantil.",
        icon: Baby,
        image: "/pediatria.jpg",
    },
    {
        id: "clinica-geral",
        name: "Clínica Geral",
        description: "Cuidado completo para sua saúde.",
        icon: Stethoscope,
        image: "/clínica-geral.jpg",
    },
    {
        id: "ortopedia",
        name: "Ortopedia",
        description: "Cuidados com ossos e articulações.",
        icon: Bone,
        image: "/ortopedia.jpg",
    },
    {
        id: "dermatologia",
        name: "Dermatologia",
        description: "Saúde e cuidado com a pele.",
        icon: Microscope,
        image: "/dermatologia.jpg",
    },
    {
        id: "ginecologia",
        name: "Ginecologia",
        description: "Cuidado com a saúde da mulher.",
        icon: Activity,
        image: "/ginecologia.jpg",
    },
];