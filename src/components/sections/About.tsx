"use client"

import Image from "next/image"
import { Container } from "../container"
import Link from "next/link"


export const About = () => {
    return (
        <section className="bg-[#F5FAFC] py-20">
            <Container>
                
                    <div
                        className="h-[250px] md:h-[350px] w-full rounded-2xl md:bg-fixed bg-[35%_center] bg-cover "
                        style={{ backgroundImage: "url('/5.jpg')" }}
                    />

                    <div className="max-w-xl md:flex-1">
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#12AFA0]">
                            Sobre nós
                        </span>

                        <h2 className="mt-3 text-3xl font-bold text-[#164E72] md:text-4xl">
                            Cuidar da sua saúde é a nossa prioridade.
                        </h2>

                        <p className="mt-5 text-base leading-relaxed text-[#526575]">
                            Na Clínica Vida, acreditamos que cuidar da saúde vai além de consultas.
                            Nosso compromisso é oferecer atendimento humanizado, com profissionais
                            qualificados e atenção especial às necessidades de cada paciente.
                        </p>

                        <Link
                            href="/sobre"
                            className="mt-7 inline-flex rounded-lg bg-[#164E72] px-7 py-3 font-semibold text-white transition-colors hover:bg-[#16ADE1]"
                        >
                            Conheça nossa clínica
                        </Link>
                    </div>

          


            </Container>

        </section>
    )
}