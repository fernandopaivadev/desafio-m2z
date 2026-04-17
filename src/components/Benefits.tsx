export default function Benefits() {
    const benefits = [
        {
            titulo: "Vídeos genéricos?",
            descricao:
                "Tenha filmes irreverentes, com linguagem moderna e impacto para destacar sua empresa no mercado.",
        },
        {
            titulo: "Falta de tempo para planejar?",
            descricao:
                "Não se preocupe com nada. Cuidamos de todo o processo, do conceito à entrega, para que você foque no seu negócio.",
        },
        {
            titulo: "Roteiros confusos?",
            descricao:
                "Nossos roteiristas especialistas em marketing criam narrativas que simplificam a complexidade do seu negócio.",
        },
        {
            titulo: "Falta de equipamentos e recursos?",
            descricao:
                "Contamos com tecnologia de ponta e equipe especializada para produções cinematográficas.",
        },
    ];

    return (
        <section className="py-20 bg-zinc-50">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-16">
                    Por que você ainda não investe em audiovisual?
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 hover:border-yellow-500/30 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-zinc-900 mb-4">
                                {benefit.titulo}
                            </h3>
                            <p className="text-zinc-600 leading-relaxed">
                                {benefit.descricao}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
