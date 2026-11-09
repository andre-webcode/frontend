import Image from "next/image";
import Link from "next/link";
import { Container } from "../container";

export const Hero = () => {
    return (
        <Container>
            <section className="relative isolate  h-130 w-full overflow-hidden rounded-b-[60px]">

                <Image
                    src="/doutora.jpg"
                    alt="Doutora da Clínica Vida"
                    fill
                    priority
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-text/55" />

                <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
                    <div className="max-w-2xl text-white">

                        <span className="mb-4 block text-sm font-semibold uppercase tracking-widest text-secondary">
                            Cuidado e confiança
                        </span>

                        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                            Sua saúde merece atenção especial.
                        </h1>

                        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                            Atendimento humanizado, profissionais qualificados e cuidado
                            em cada etapa da sua jornada.
                        </p>

                        <Link
                            href="#agendamento"
                            className="mt-8 inline-flex rounded-lg bg-secondary px-7 py-3 font-semibold text-white transition-colors hover:bg-hover"
                        >
                            Agendar consulta
                        </Link>

                    </div>
                </div>
            </section>
        </Container>
    );
};