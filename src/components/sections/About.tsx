"use client"

import Image from "next/image"
import { Container } from "../container"
import Link from "next/link"


export const About = () => {
    return (
        <section className="	bg-background py-20">
            <Container>
                <div className="flex flex-col gap-10 md:flex-row md:items-center">
                    <Image
                        src="/5.jpg"
                        alt="Atendimento na Clínica Vida"
                        width={600}
                        height={400}
                        className="h-\[280px\] w-full rounded-2xl object-cover md\:h-\[350px\] md:w-[45%]"
                    />

                    <div className="max-w-xl md:flex-1">
                        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
                            Sobre nós
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">
                            Cuidar da sua saúde é a nossa prioridade.
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-muted">
                            Na Clínica Vida, acreditamos que cuidar da saúde vai além de consultas.
                            Nosso compromisso é oferecer atendimento humanizado, com profissionais
                            qualificados e atenção especial às necessidades de cada paciente.
                        </p>

                        <Link
                            href="/sobre"
                            className="mt-7 inline-flex rounded-lg  bg-primary px-7 py-3 font-semibold text-white transition-colors hover:bg-hover"
                        >
                            Conheça nossa clínica
                        </Link>
                    </div>

                </div>


            </Container>

        </section>
    )
}