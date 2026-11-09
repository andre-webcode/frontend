

import Image from "next/image";
import { Container } from "../container";

export const Doctors = () => {

    const doctors = [
        {
            name: "Dra. Ana Silva",
            specialty: "Cardiologia",
            image: "/1.jpg",
        },
        {
            name: "Dra. Mariana Costa",
            specialty: "Pediatria",
            image: "/2.jpg",
        },
        {
            name: "Dr. Carlos Mendes",
            specialty: "Dermatologia",
            image: "/3.jpg",
        },
        {
            name: "Dr. Rafael Santos",
            specialty: "Ortopedia",
            image: "/4.jpg",
        },
    ];
    
 

    return (
        <section>
            <Container>
                <div>
                    <span className="text-sm font-semibold uppercase tracking-widest text-secundary">CONHEÇA NOSSA EQUIPE</span>

                    <h2 className="mt-3 text-3xl font-bold text-primary md:text-4xl">Nossos profissionais</h2>

                    <p className="mt-4 max-w-xl leading-relaxed text-muted">
                        Profissionais qualificados e dedicados a cuidar da sua saúde.
                    </p>
                </div>

                <div
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
                    {doctors.map((doctor) => (
                        <div
                            className="rounded-2xl bg-white p-4 shadow-[0_8px_25px_rgba(22,78,114,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(22,78,114,0.14)]"
                            key={doctor.name}>

                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                width={300}
                                height={300}
                                className="h-72 w-full rounded-2xl object-cover object-top"
                            />
                            
                            <h3 className="mt-4 text-lg font-semibold text-primary">
                                {doctor.name}
                            </h3>
                            <p className="mt-1 text-sm text-muted">
                                {doctor.specialty}
                            </p>

                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}