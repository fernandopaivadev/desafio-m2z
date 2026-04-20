"use client";

export default function Solucoes() {
    const solucoes = [
        {
            titulo: "Filmes Institucional",
            descricao:
                "Apresente seus produtos, serviços, valores e missão de forma envolvente e profissional, fortalecendo a identidade da sua marca.",
        },
        {
            titulo: "Filmes Produto",
            descricao:
                "Destaque seus produtos de maneira única no mercado, expondo seus diferenciais e impulsionando vendas.",
        },
        {
            titulo: "Filme Evento Corporativo",
            descricao:
                "Capture os momentos mais importantes dos seus eventos, transformándolos em materiais de divulgação impactantes.",
        },
        {
            titulo: "Filmes Conteúdo",
            descricao:
                "Dê voz à sua marca nas redes sociais com conteúdos estratégicos que informam, conectam e geram autoridade.",
        },
    ];

    const scrollToContato = () => {
        const contato = document.getElementById("contato");
        contato?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="solucoes" className="py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-4">
                    Soluções audiovisuais para empresas
                </h2>
                <p className="text-center text-zinc-600 mb-12">
                    Oferecemos um leque completo de soluções audiovisuais para
                    impulsionar sua marca.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                    {solucoes.map((solucao, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 hover:border-yellow-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 mb-4">
                                {solucao.titulo}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed mb-6">
                                {solucao.descricao}
                            </p>
                            <button
                                onClick={scrollToContato}
                                className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                            >
                                SAIBA MAIS!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
