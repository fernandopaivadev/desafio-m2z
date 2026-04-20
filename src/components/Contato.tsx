"use client";

import { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Select from "./ui/Select";
import { NECESSIDADE_OPTIONS } from "@/lib/types";

const contatoInfo = {
    endereco: "Rua Coronel Joaquim Ignácio Taborda Ribas - 212, Bigorrilho, Curitiba - PR CEP 80730-320, Brasil",
    email: "contato@motinfilms.com.br",
    telefone: "+55 41 9142-5126",
    redes: [
        { nome: "Instagram", url: "https://www.instagram.com/motinfilms" },
        { nome: "TikTok", url: "https://www.tiktok.com/@motinfilms" },
        { nome: "Facebook", url: "https://www.facebook.com/motinfilms" },
        { nome: "LinkedIn", url: "https://www.linkedin.com/company/93245114/admin/dashboard" },
    ],
};

export default function Contato() {
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        necessidade: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value;
        const digits = rawValue.replace(/\D/g, "");
        
        if (rawValue === "" || digits === "") {
            setFormData({ ...formData, telefone: "" });
            return;
        }
        
        const value = digits.slice(0, 11);
        let formatted = "";
        
        for (let i = 0; i < value.length; i++) {
            if (i === 0) formatted += "(";
            if (i === 2) formatted += ") ";
            if (i === 7) formatted += "-";
            formatted += value[i];
        }
        
        setFormData({ ...formData, telefone: formatted });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMsg("");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error("Erro ao enviar");

            console.log("GTM Event: Lead Generated", {
                nome: formData.nome,
                email: formData.email,
                necessidade: formData.necessidade,
                timestamp: new Date().toISOString(),
            });

            setStatus("success");
            setFormData({ nome: "", email: "", telefone: "", necessidade: "" });
        } catch {
            setStatus("error");
            setErrorMsg("Tente novamente mais tarde");
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section id="contato" className="py-20 bg-zinc-950 relative">
            <button
                onClick={scrollToTop}
                className="absolute bottom-8 right-8 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black hover:bg-yellow-400 transition-colors cursor-pointer"
                aria-label="Voltar ao topo"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
            </button>
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Contato
                </h2>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Endereço</h3>
                            <p className="text-zinc-400">{contatoInfo.endereco}</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">E-mail</h3>
                            <a href={`mailto:${contatoInfo.email}`} className="text-yellow-500 hover:underline">
                                {contatoInfo.email}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
                            <a href={`tel:${contatoInfo.telefone}`} className="text-yellow-500 hover:underline">
                                {contatoInfo.telefone}
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Redes Sociais</h3>
                            <div className="flex flex-wrap gap-4">
                                {contatoInfo.redes.map((rede) => (
                                    <a
                                        key={rede.nome}
                                        href={rede.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-yellow-500 transition-colors"
                                    >
                                        {rede.nome}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="bg-zinc-900 p-8 rounded-xl">
                        {status === "success" ? (
                            <div className="text-center py-12">
                                <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <h3 className="text-2xl font-bold text-white mb-2">Mensagem enviada!</h3>
                                <p className="text-zinc-400">Em breve entraremos em contato.</p>
                                <button onClick={() => setStatus("idle")} className="mt-6 text-yellow-500 hover:underline">
                                    Enviar outra mensagem
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <Input
                                    label="Nome"
                                    id="nome"
                                    value={formData.nome}
                                    onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                                    required
                                    placeholder="Seu nome completo"
                                />

                                <Input
                                    label="E-mail"
                                    id="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                    placeholder="seu@email.com.br"
                                />

                                <Input
                                    label="Telefone"
                                    id="telefone"
                                    type="tel"
                                    value={formData.telefone}
                                    onChange={handleTelefoneChange}
                                    placeholder="(00) 00000-0000"
                                />

                                <Select
                                    label="Necessidade"
                                    id="necessidade"
                                    value={formData.necessidade}
                                    onChange={(e) => setFormData({ ...formData, necessidade: e.target.value })}
                                    required
                                    options={NECESSIDADE_OPTIONS.map((opt) => ({ value: opt, label: opt }))}
                                />

                                {status === "error" && <p className="text-red-500 text-sm">{errorMsg}</p>}

                                <Button type="submit" isLoading={status === "loading"} className="w-full">
                                    Enviar Mensagem
                                </Button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}