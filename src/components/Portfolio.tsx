"use client";

const videos = [
    { id: "6bseD2wgI6A", title: "Projeto 1" },
    { id: "J3KO2lBBh-w", title: "Projeto 2" },
    { id: "Wyg3UPuf5Ec", title: "Projeto 3" },
];

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                    Portfólio
                </h2>
                <p className="text-center text-zinc-400 mb-12">
                    Veja o que fazemos na prática!
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <div key={video.id} className="space-y-4">
                            <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800">
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="border-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://www.youtube.com/@motinfilms"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                        VER PORTFÓLIO COMPLETO!
                    </a>
                </div>
            </div>
        </section>
    );
}
