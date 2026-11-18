import { About } from "@/components/sections/About";
import { PageBanner } from "@/components/sections/PageBanner";

export default function AboutPage() {
    return (
        <>
            <PageBanner
                title="Sobre nós"
                description="Conheça a Clínica Vida e nosso compromisso com sua saúde."
                image="/banner-sobre.jpg"
            />

            <About showButton={false} />
        </>
    );
}