export default function Clientes() {
    const clientes = [
        "Unimed",
        "Electrolux",
        "LJ Santos",
        "Inplasul",
        "Liquexpress",
        "Pasa",
        "Spaten",
        "Warner Pictures",
    ];

    return (
        <section className="py-20 bg-zinc-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-zinc-900 mb-4">
                    Nossos Clientes
                </h2>
                <p className="text-center text-zinc-600 mb-12">
                    O padrão de qualidade escolhido pelas grandes marcas
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {clientes.map((cliente, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center min-h-[80px] hover:shadow-md transition-shadow"
                        >
                            <span className="text-lg font-semibold text-zinc-700">
                                {cliente}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
