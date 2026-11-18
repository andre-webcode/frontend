import { Doctors } from "@/components/sections/Doctors";
import { PageBanner } from "@/components/sections/PageBanner";

export default function DoctorsPage() {
    return (
        <>
            <PageBanner
                title="Nossos médicos"
                description="Conheça os profissionais que cuidam da sua saúde."
                image="/banner.jpg"
            />

            <Doctors />
        </>
    );
}