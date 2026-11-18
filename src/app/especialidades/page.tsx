import { PageBanner } from "@/components/sections/PageBanner";
import { Specialties } from "@/components/sections/Specialties";

export default function SpecialtiesPage() {
    return (
        <>
            <PageBanner
                title="Nossas especialidades"
                description="Conheça nossas especialidades e encontre o cuidado ideal para sua saúde."
                image="/especialidades-banner.jpg"
            />

            <Specialties />
        </>
    );
}