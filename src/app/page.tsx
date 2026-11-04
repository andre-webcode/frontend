import { Header } from "@/components/header/Header";
import { Hero } from "@/components/hero/Hero";
import { Specialties } from "@/components/sections/Specialties";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Specialties />
    </main>
  );
}
