# Motin Films - Sistema de Captação de Leads

## Stack Técnica
- **Framework**: Next.js 16 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Backend**: Supabase (PostgreSQL + Auth)
- **Deploy**: Vercel

## Getting Started

1. **Instalar dependências**:
```bash
npm install
```

2. **Configurar variáveis de ambiente**:
Criar arquivo `.env` baseado no `.env.sample`:
```
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-anon-key
```

3. **Executar desenvolvimento**:
```bash
npm run dev
```

4. **Build produção**:
```bash
npm run build
```

## Supabase - Configuração do Banco

Execute no SQL Editor do Supabase:

```sql
CREATE TABLE leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT,
  necessidade TEXT NOT NULL,
  status TEXT DEFAULT 'novo',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

CREATE POLICY "public_insert" ON leads FOR INSERT WITH CHECK (true);
CREATE POLICY "admin_select" ON leads FOR SELECT TO authenticated USING (true);
CREATE POLICY "admin_update" ON leads FOR UPDATE TO authenticated USING (true);
CREATE POLICY "admin_delete" ON leads FOR DELETE TO authenticated USING (true);
```

## Estrutura do Projeto
```
src/
├── app/
│   ├── page.tsx              # Landing Page (pública)
│   ├── admin/
│   │   ├── page.tsx          # Dashboard Admin
│   │   └── login/page.tsx    # Login Admin
│   └── api/
│       ├── auth/route.ts     # API de autenticação
│       ├── leads/route.ts   # API pública (INSERT)
│       └── leads/admin/route.ts # API admin (SELECT/UPDATE/DELETE)
├── components/               # Componentes React
│   └── ui/                   # Componentes UI
└── lib/                      # Configurações e tipos
```

## Deploy

O projeto está configurado para deploy automático na Vercel a cada push no GitHub.

Adicione as variáveis de ambiente no painel da Vercel:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Comandos Úteis
- `npm run dev` - Development server
- `npm run build` - Build produção
- `npm run lint` - Verificar lint

---

## Experiência com IA

Este projeto foi desenvolvido com o auxílio do **OpenCode** (IA de programação), o que acelerou bastante o processo.

### Como funcionou:
- O usuário (desenvolvedor) fornecia as instruções e requisitos
- A IA implementava o código conforme solicitado
- Cada funcionalidade era testada e aprovada antes de prosseguir
- Decisões de design, arquitetura e ajustes eram validadas em conjunto
- Commits foram feitos de forma semântica e organizada após cada feature ser testada

### Onde a IA ajuda:
- **Estrutura inicial do projeto** - Configuração automática do Next.js + TypeScript + Tailwind
- **Criação de componentes** - Geração rápida de todos os componentes da Landing Page
- **APIs e Backend** - Implementação das rotas de API para leads e autenticação
- **Integração Supabase** - Cliente Supabase configurado com SSR e policies de RLS
- **Dashboard Admin** - Página de admin com autenticação e listagem de leads
- **Melhorias de UX** - Máscara de telefone, gráfico de analytics, botões de navegação

O projeto passou por iterações para resolver desafios como RLS do Supabase e máscaras de input, demonstrando que a colaboração humano-IA resulta em um produto final de qualidade.
