import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { nome, email, telefone, necessidade } = body;

        if (!nome || !email || !necessidade) {
            return NextResponse.json(
                { error: "Campos obrigatórios faltando" },
                { status: 400 },
            );
        }

        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
        const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

        if (!supabaseUrl || !supabaseAnonKey) {
            return NextResponse.json(
                { error: "NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY not configured" },
                { status: 500 },
            );
        }

        const res = await fetch(`${supabaseUrl}/rest/v1/leads`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "apikey": supabaseAnonKey,
                "Authorization": `Bearer ${supabaseAnonKey}`,
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                necessidade,
            }),
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json(
                { error: error.message || "Erro ao salvar lead" },
                { status: 500 },
            );
        }

        const data = await res.json();
        return NextResponse.json({ success: true, data });
    } catch (e) {
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}