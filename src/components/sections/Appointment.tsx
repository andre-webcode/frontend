import { specialties } from "@/data/specialties"
import { Container } from "../container"
import { MapPin, Clock, MessageCircle } from "lucide-react"


export const Appointment = () => {
    return (
        <section id="agendamento" className="bg-background py-20">
            <Container>
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    <div>
                        <span className="text-sm font-semibold uppercase tracking-widest text-secondary">
                            Agendamento
                        </span>

                        <h2 className="mt-4 text-3xl font-bold text-primary md:text-4xl">
                            Vamos cuidar da sua saúde?
                        </h2>

                        <p className="mt-5 leading-relaxed text-muted">
                            Agende sua consulta com nossos profissionais. Preencha o formulário
                            e nossa equipe entrará em contato para confirmar o atendimento.
                        </p>

                        <div className="mt-8 space-y-6">

                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-soft p-3 text-secondary">
                                    <MessageCircle size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-primary">WhatsApp</h3>
                                    <p className="mt-1 text-sm text-muted">
                                        Entre em contato com nossa equipe.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-soft p-3 text-secondary">
                                    <Clock size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-primary">Horário de atendimento</h3>
                                    <p className="mt-1 text-sm text-muted">
                                        Segunda a sexta, das 08h às 18h.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="rounded-lg bg-soft p-3 text-secondary">
                                    <MapPin size={22} />
                                </div>

                                <div>
                                    <h3 className="font-semibold text-primary">Localização</h3>
                                    <p className="mt-1 text-sm text-muted">
                                        Estamos prontos para cuidar de você.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm md:p-8">
                            <h3 className="text-2xl font-bold text-primary">
                                Solicite seu agendamento
                            </h3>

                            <p className="mt-2 text-sm text-muted">
                                Preencha seus dados para nossa equipe entrar em contato.
                            </p>

                            <div className="mt-6">
                                <label htmlFor="name" className="mb-2 block text-sm font-medium text-primary">
                                    Nome completo
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Digite seu nome completo"
                                    className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                />
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="fone" className="mb-2 block text-sm font-medium text-primary">
                                        Telefone / WhatsApp
                                    </label>
                                    <input
                                        type="tel"
                                        id="fone"
                                        name="fone"
                                        placeholder="Digite seu Telefone"
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-primary">
                                        E-mail
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="Digite seu E-mail"
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="specialty" className="mb-2 block text-sm font-medium text-primary">
                                        Especialidade
                                    </label>

                                    <select
                                        id="specialty"
                                        name="specialty"
                                        defaultValue=""
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    >
                                        <option value="" disabled>
                                            Selecione uma especialidade
                                        </option>

                                        {specialties.map((specialty) => (
                                            <option key={specialty.id} value={specialty.id}>
                                                {specialty.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="doctor" className="mb-2 block text-sm font-medium text-primary">
                                        Médico
                                    </label>

                                    <select
                                        id="doctor"
                                        name="doctor"
                                        defaultValue=""
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    >
                                        <option value="" disabled>
                                            Selecione um médico
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="date" className="mb-2 block text-sm font-medium text-primary">
                                        Data desejada para consulta
                                    </label>
                                    <input
                                        type="date"
                                        id="date"
                                        name="date"
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="time" className="mb-2 block text-sm font-medium text-primary">
                                        Horário disponível
                                    </label>

                                    <select
                                        id="time"
                                        name="time"
                                        defaultValue=""
                                        className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted outline-none transition focus:border-secondary focus:ring-2 focus:ring-secondary/20"
                                    >
                                        <option value="" disabled>
                                            Selecione um horário
                                        </option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-5">
                                <button type="submit"
                                    className="w-full rounded-lg px-4 py-3 font-semibold bg-primary text-white hover:bg-hover transition-colors"
                                >
                                    Solicitar agendamento
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}