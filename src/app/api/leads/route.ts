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
                "Prefer": "return=representation",
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                necessidade,
            }),
        });

        const data = await res.json();
        
        if (!res.ok) {
            console.log("REST API error:", res.status, data);
            return NextResponse.json(
                { error: data.message || "Erro ao salvar lead" },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (e) {
        console.log("Exception:", e);
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}