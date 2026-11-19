
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
    const phoneNumber = "5599999999999";
    const message = encodeURIComponent(
        "Olá! Gostaria de mais informações sobre a Clínica Vida."
    );

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco pelo WhatsApp"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
            <MessageCircle size={28} />
        </a>
    );
};
