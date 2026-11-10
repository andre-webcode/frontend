import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Appointment } from "@/components/sections/Appointment";
import { Doctors } from "@/components/sections/Doctors";
import { Specialties } from "@/components/sections/Specialties";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Specialties />
      <Doctors />
      <About />
      <Testimonials />
      <Appointment />
    </main>
  );
}
