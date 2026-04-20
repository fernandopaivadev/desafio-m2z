import Image from "next/image";

export default function Clientes() {
    const clientes = [
        { name: "Unimed", logo: "/clients/unimed_logo.png" },
        { name: "Electrolux", logo: "/clients/electrolux_logo.png" },
        { name: "LJ Santos", logo: "/clients/santos_logo.png" },
        { name: "Inplasul", logo: "/clients/inplasul_logo.png" },
        { name: "Liquexpress", logo: "/clients/liquexpress_logo.png" },
        { name: "Pasa", logo: "/clients/logo_pasa.png" },
        { name: "Spaten", logo: "/clients/spaten_logo.webp" },
        { name: "Warner Bros", logo: "/clients/warner_bros_pictures_logo.png" },
    ];

    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                    Nossos Clientes
                </h2>
                <p className="text-center text-zinc-400 mb-12">
                    O padrão de qualidade escolhido pelas grandes marcas
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {clientes.map((cliente, index) => (
                        <div
                            key={index}
                            className="bg-zinc-800 p-6 rounded-lg shadow-sm flex items-center justify-center min-h-24 hover:shadow-md transition-shadow"
                        >
                            <Image
                                src={cliente.logo}
                                alt={cliente.name}
                                width={100}
                                height={48}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}