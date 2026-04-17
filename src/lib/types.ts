export interface Lead {
    id?: string;
    nome: string;
    email: string;
    telefone: string;
    necessidade: string;
    status?: "novo" | "contatado" | "convertido" | "perdido";
    created_at?: string;
}

export type NecessidadeOptions =
    | "Filme Institucional"
    | "Filme Produto"
    | "Filme Evento Corporativo"
    | "Filmes para Redes Sociais"
    | "Motion Graphics"
    | "Cobertura de Evento"
    | "Outro";

export const NECESSIDADE_OPTIONS: NecessidadeOptions[] = [
    "Filme Institucional",
    "Filme Produto",
    "Filme Evento Corporativo",
    "Filmes para Redes Sociais",
    "Motion Graphics",
    "Cobertura de Evento",
    "Outro",
];
