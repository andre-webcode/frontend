
import Image from "next/image";
import { Container } from "../container";

type PageBannerProps = {
    title: string;
    description: string;
    image: string;
};

export const PageBanner = ({ title, description, image }: PageBannerProps) => {
    return (
        <section className="relative isolate h-[300px] overflow-hidden">
            <Image
                src={image}
                alt=""
                fill
                priority
                className="object-cover object-[center_30%]"
            />

            <div className="absolute inset-0 bg-[#172B45]/60" />

            <Container>
                <div className="relative z-10 flex h-[300px] flex-col justify-center">
                    <h1 className="text-3xl font-bold text-white md:text-5xl">
                        {title}
                    </h1>

                    <p className="mt-4 max-w-xl text-white/85 md:text-lg">
                        {description}
                    </p>
                </div>
            </Container>
        </section>
    );
};
