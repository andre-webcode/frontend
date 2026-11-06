import { specialties } from "@/data/specialties";
import { Container } from "../container";
import Image from "next/image";


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
								key={specialty.id}
								className="relative group overflow-hidden rounded-2xl border border-[#DCE8ED] bg-white p-7 shadow-[0_8px_25px_rgba(22,78,114,0.07)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(22,78,114,0.12)]"
							>
								<div className="absolute inset-0 z-0">
									<Image
										src={specialty.image}
										alt={specialty.name}
										fill
										className="object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
									/>
								</div>


								<div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E8F7F6] text-[#12AFA0] group-hover:bg-white/20 group-hover:text-white transition-colors duration-300">
									<Icon size={25} strokeWidth={1.8} />
								</div>

								<h3 className="relative z-10 text-lg font-semibold text-[#164E72] group-hover:text-white transition-colors duration-30">
									{specialty.name}
								</h3>

								<p className="relative z-10 mt-2 text-sm leading-relaxed text-[#526575] group-hover:text-white/90 transition-colors duration-30">
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