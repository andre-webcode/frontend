import Image from "next/image"
import { Container } from "../container"
import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="bg-primary py-12 pb-12 text-white">
            <Container>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
                    <div className="flex items-center gap-3">
                        <Image src="/logo.svg" alt="Logo da clinica"
                            width={48}
                            height={48}
                            className="h-12 w-12 object-contain"
                        />
                        <div className="flex flex-col">
                            <h3 className="text-lg font-bold text-white">Clínica Vida</h3>
                            <p className="mt-1 text-sm text-white/70">Cuidando da sua saúde</p>

                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white">
                            Links rápidos
                        </h3>

                        <ul className="mt-4 space-y-3  text-sm text-white/70">
                            <li className="transition-colors hover:text-white">
                                <Link href="/">Início</Link>
                            </li>
                            <li className="transition-colors hover:text-white">
                                <Link href="/#especialidades">Especialidades</Link>
                            </li>
                            <li className="transition-colors hover:text-white">
                                <Link href="/medicos">Médicos</Link>
                            </li>
                            <li className="transition-colors hover:text-white">
                                <Link href="/sobre">Sobre nós</Link>
                            </li>
                            <li className="transition-colors hover:text-white">
                                <Link href="/contato">Contato</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3>Entre em contato</h3>
                        <div className="mt-4 flex items-center gap-3">
                            <Phone size={18} />
                            <p className="text-sm text-white/70">
                                (99) 99999-9999
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <Mail size={18} />
                            <p className="text-sm text-white/70">
                                contato@clinicavida.com.br
                            </p>
                        </div>
                        <div className="mt-4 flex items-center gap-3">
                            <MapPin size={18} />
                            <p className="text-sm text-white/70">
                                Timon - MA
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-white/20 pt-6 text-center">
                    <p className="text-sm text-white/60">
                        © {new Date().getFullYear()} Clínica Vida. Todos os direitos reservados.
                    </p>
                </div>
            </Container>
        </footer>
    )
}