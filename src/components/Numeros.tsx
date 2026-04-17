export default function Numeros() {
    const numeros = [
        { valor: "+10", label: "anos de atuação" },
        { valor: "+300", label: "clientes satisfeitos" },
        { valor: "+500", label: "filmes registrados" },
        { valor: "+2.000", label: "projetos e filmes entregados" },
    ];

    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-16">
                    Nossos números
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {numeros.map((item, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-yellow-500 mb-2">
                                {item.valor}
                            </div>
                            <div className="text-zinc-400 text-lg">
                                {item.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
