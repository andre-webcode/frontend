import Image from "next/image"
import Link from "next/link"


export const Header = () => {
    return (
        <header className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-1">
                <Image src="/logo.svg" alt="Logo da clinica"
                    width={48}
                    height={48}
                    className="h-12 w-12 object-contain"
                />
                <span className="text-xl font-bold tracking-tight text-[#1B3954]">
                    Clínica Vida
                </span>
            </div>

            <nav className="flex items-center gap-8">
                <Link
                    className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#1B3954]"
                    href="/">Início</Link>
                <Link
                    className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#1B3954]"
                    href="#especialidades">Especialidades</Link>
                <Link
                    className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#1B3954]"
                    href="#medicos">Médicos</Link>
                <Link
                    className="text-sm font-medium text-[#64748B] transition-colors hover:text-[#1B3954]"
                    href="#sobre">Sobre</Link>
            </nav>

            <div>
                <Link 
                    className="bg-[#1B3954] px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors hover:bg-[#16ADE1]"
                href="#agendamento">Agendar consultas</Link>
            </div>
        </header>
    )
}