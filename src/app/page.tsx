import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { About } from "@/components/sections/About";
import { Doctors } from "@/components/sections/Doctors";
import { Specialties } from "@/components/sections/Specialties";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Specialties />
      <Doctors />
      <About />
    </main>
  );
}
