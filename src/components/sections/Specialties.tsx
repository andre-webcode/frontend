import {
  HeartPulse,
  Baby,
  Stethoscope,
  Bone,
  Microscope,
  Activity,
} from "lucide-react";
import { Container } from "../container";

const specialties = [
  {
    name: "Cardiologia",
    description: "Cuidados com a saúde do coração.",
    icon: HeartPulse,
  },
  {
    name: "Pediatria",
    description: "Atenção especial à saúde infantil.",
    icon: Baby,
  },
  {
    name: "Clínica Geral",
    description: "Cuidado completo para sua saúde.",
    icon: Stethoscope,
  },
  {
    name: "Ortopedia",
    description: "Cuidados com ossos e articulações.",
    icon: Bone,
  },
  {
    name: "Dermatologia",
    description: "Saúde e cuidado com a pele.",
    icon: Microscope,
  },
  {
    name: "Ginecologia",
    description: "Cuidado com a saúde da mulher.",
    icon: Activity,
  },
];

export const Specialties = () => {
  return (
    <section className="bg-[#F5FAFC] py-20">
      <Container>
        <div className="mb-12 max-w-xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-[#12AFA0]">
            Cuidado especializado
          </span>

          <h2 className="mt-3 text-3xl font-bold text-[#164E72] md:text-4xl">
            Especialidades para cuidar de você
          </h2>

          <p className="mt-4 leading-relaxed text-[#526575]">
            Encontre profissionais preparados para oferecer o cuidado
            que sua saúde merece.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {specialties.map((specialty) => {
            const Icon = specialty.icon;

            return (
              <div
                key={specialty.name}
                className="rounded-2xl border border-[#DCE8ED] bg-white p-7 shadow-[0_8px_25px_rgba(22,78,114,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,78,114,0.12)]"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7F6] text-[#12AFA0]">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-semibold text-[#164E72]">
                  {specialty.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#526575]">
                  {specialty.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};