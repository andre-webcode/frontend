"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ChevronRight, Menu, X, } from "lucide-react";
import { useState } from "react";


export const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <header className="bg-background border-b border-border">
            <div className="mx-auto w-full max-w-7xl flex items-center justify-between px-6 py-4">

                <div className="flex items-center gap-1">
                    <Image src="/logo.svg" alt="Logo da clinica"
                        width={48}
                        height={48}
                        className="h-12 w-12 object-contain"
                    />
                    <span className="text-xl font-bold tracking-tight text-primary">
                        Clínica Vida
                    </span>
                </div>

                <nav className="hidden items-center gap-8 md:flex">
                    <Link
                        className="text-sm font-medium text-muted transition-colors hover:text-[#16ADE1]"
                        href="/">Início
                    </Link>

                    <Link
                        className="text-sm font-medium text-muted transition-colors hover:text-[#16ADE1]"
                        href="#especialidades">Especialidades
                    </Link>

                    <Link
                        className="text-sm font-medium text-muted transition-colors hover:text-[#16ADE1]"
                        href="#medicos">Médicos
                    </Link>

                    <Link
                        className="text-sm font-medium text-muted transition-colors hover:text-[#16ADE1]"
                        href="#sobre">Sobre

                    </Link>
                </nav>

                <div>
                    <Link
                        className="hidden bg-[#1B3954] px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-colors hover:bg-[#16ADE1] md:inline-flex"
                        href="#agendamento">Agendar consultas</Link>
                </div>

                <button
                    type="button"
                    className="md:hidden"
                    aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
                    onClick={toggleMenu}
                >
                    <Menu size={28} />
                </button>

            </div>

            {isMenuOpen && (
                <button
                    type="button"
                    className="fixed inset-0 z-40 cursor-default bg-black/50 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Fechar menu"
                />

            )}

            <div className={`fixed right-0 top-0 z-50 h-full w-4/5 max-w-sm bg-white p-6 shadow-xl transition-transform duration-300 
             ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>
                <div className="flex items-center justify-between">
                    <span>Menu</span>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Fechar menu"
                    >
                        <X size={28} />
                    </button>

                </div>

                <nav className="mt-8 flex flex-col gap-6">

                    <Link
                        className="rounded-lg px-3 py-1 text-[#334155] transition-colors hover:bg-[#E8F2F8] hover:text-[#1B3954]"
                        href="/" onClick={toggleMenu} >
                        Início

                    </Link>

                    <Link
                        className="rounded-lg px-3 py-1 text-[#334155] transition-colors hover:bg-[#E8F2F8] hover:text-[#1B3954]" href="#especialidades"
                        onClick={toggleMenu}>
                        Especialidades
                    </Link>

                    <Link
                        className="rounded-lg px-3 py-1 text-[#334155] transition-colors hover:bg-[#E8F2F8] hover:text-[#1B3954]"
                        href="#medicos" onClick={toggleMenu}>
                        Médicos
                    </Link>

                    <Link
                        className="rounded-lg px-3 py-1 text-[#334155] transition-colors hover:bg-[#E8F2F8] hover:text-[#1B3954]"
                        href="#sobre" onClick={toggleMenu}>
                        Sobre
                    </Link>
                </nav>
            </div>
        </header>
    )
}