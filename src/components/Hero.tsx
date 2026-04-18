"use client";

import Button from "./ui/Button";

export default function Hero() {
    const scrollToContato = () => {
        const contato = document.getElementById("contato");
        contato?.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToPortfolio = () => {
        const portfolio = document.getElementById("portfolio");
        portfolio?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
            <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950" />

            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/30 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
                    MOTIN FILMS
                </h1>

                <p className="text-xl md:text-2xl text-zinc-300 mb-4 max-w-2xl mx-auto">
                    Filmes de alto impacto com qualidade cinematográfica
                </p>

                <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                    Conectamos marcas e pessoas com soluções audiovisuais
                    únicas.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={scrollToPortfolio} size="lg" className="text-lg">
                        CONHEÇA NOSSO PORTFÓLIO
                    </Button>
                    <Button onClick={scrollToContato} size="lg" variant="outline" className="text-lg">
                        FALE CONOSCO
                    </Button>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-zinc-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                </svg>
            </div>
        </section>
    );
}
