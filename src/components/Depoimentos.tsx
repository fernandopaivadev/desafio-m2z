export default function Depoimentos() {
    const depoimentos = [
        {
            texto: "Ficamos super satisfeitos com a produção. Vídeo principal, vídeos de performance bônus, show. Atendimento, suporte, grupo com profissionais pré, durante e pós evento. Já os temos como prioridade para continuar com nossa parceria de cobertura.",
            autor: "ENAF",
        },
        {
            texto: 'A nossa minisérie "Escolar pelo Brasil" contou a história de 10 papelarias de norte a sul do Brasil e foi inspirador conhecer a jornada empreendedora de cada um. Agradecemos imensamente ao excelente trabalho da Motin Films e todo o cuidado que tiveram com esse projeto tão especial.',
            autor: "Escolar Office Brasil",
        },
        {
            texto: "Ficamos bem contentes com o resultado e com o trabalho de toda a equipe. ConseguiramPegar ótimos takes e prestaram suporte, sempre que necessário. Todos estão de parabéns.",
            autor: "Liquexpress",
        },
    ];

    return (
        <section className="py-20 bg-zinc-900">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-4">
                    Resultados comprovados por quem mais entende
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {depoimentos.map((dep, index) => (
                        <div key={index} className="bg-zinc-800 p-8 rounded-xl">
                            <svg
                                className="w-10 h-10 text-yellow-500 mb-4"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849v4.059l3.016 3.006L14.017 21zm-10.005 0v-7.391c0-5.704 3.73-9.57 8.982-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849v4.059l3.015 3.006L4.012 21z" />
                            </svg>
                            <p className="text-zinc-300 leading-relaxed mb-6">
                                &ldquo;{dep.texto}&rdquo;
                            </p>
                            <p className="text-yellow-500 font-semibold">
                                - {dep.autor}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
