"use client"

import { testimonials } from "@/data/testimonials"
import { Container } from "../container"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"


export const Testimonials = () => {
    const carouselRef = useRef<HTMLDivElement>(null)

    const handleNext = () => {
        const carousel = carouselRef.current

        if (carousel) {
            const firstCard = carousel.children[0] as HTMLElement
            const secondCard = firstCard.nextElementSibling as HTMLElement

            const scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft

            carousel.scrollBy({
                left: scrollAmount,
                behavior: "smooth",
            })
        }
    }

    const handlePrev = () => {
        const carousel = carouselRef.current

        if (carousel) {
            const firstCard = carousel.children[0] as HTMLElement
            const secondCard = firstCard.nextElementSibling as HTMLElement
    
            const scrollAmount = secondCard.offsetLeft - firstCard.offsetLeft

            carousel.scrollBy({
                left: -scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <section className="bg-white py-10">
            <Container>
                <div className="mb-12 max-w-2xl">
                    <span className="text-secondary uppercase font-semibold tracking-widest">Depoimentos</span>
                    <h2 className="mt-3 text-3xl font-bold text-primary">O que nossos pacientes dizem</h2>
                    <p className="mt-4 text-muted leading-relaxed">"Conheça a experiência de quem confia na Clínica Vida para cuidar da sua saúde."</p>
                </div>

                <div className="mb-6 flex justify-end gap-3">
                    <button
                        className="rounded-full border border-border p-3 text-primary transition hover:bg-secondary hover:text-white"
                        aria-label="Depoimentos anteriores"
                        onClick={handlePrev}
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        className="rounded-full border border-border p-3 text-primary transition hover:bg-[text-secondary] hover:text-white"
                        aria-label="Próximos depoimentos"
                        onClick={handleNext}
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>

                <div
                    ref={carouselRef}
                    className="flex gap-6  overflow-x-auto  scroll-smooth  hide-scrollbar">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id}
                            className="w-full shrink-0   rounded-2xl p-5 border text-center border-border bg-white md:p-8 shadow-sm md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                        >
                            <div className="mb-4 flex justify-center gap-1">
                                <Star className="fill-amber-400 text-amber-400" />
                                <Star className="fill-amber-400 text-amber-400" />
                                <Star className="fill-amber-400 text-amber-400" />
                                <Star className="fill-amber-400 text-amber-400" />
                                <Star className="fill-amber-400 text-amber-400" />
                            </div>

                            <p className="mb-6 leading-relaxed text-muted">
                                {testimonial.comment}
                            </p>

                            <div className="flex flex-col items-center gap-3">
                                <Image
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    width={48}
                                    height={48}
                                    className="h-12 w-12 rounded-full object-cover"
                                />

                                <div className="text-center">
                                    <h3 className="font-semibold text-primary">
                                        {testimonial.name}
                                    </h3>

                                    <span className="text-sm text-muted">
                                        Paciente da Clínica Vida
                                    </span>
                                </div>
                            </div>
                        </div>


                    ))}
                </div>
            </Container>
        </section >
    )
}