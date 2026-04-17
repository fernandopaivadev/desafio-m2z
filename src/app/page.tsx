import Hero from "@/components/Hero";
import Numeros from "@/components/Numeros";
import Benefits from "@/components/Benefits";
import Clientes from "@/components/Clientes";
import Portfolio from "@/components/Portfolio";
import Solucoes from "@/components/Solucoes";
import Depoimentos from "@/components/Depoimentos";
import Contato from "@/components/Contato";

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <Numeros />
            <Benefits />
            <Clientes />
            <Portfolio />
            <Solucoes />
            <Depoimentos />
            <Contato />
        </main>
    );
}
