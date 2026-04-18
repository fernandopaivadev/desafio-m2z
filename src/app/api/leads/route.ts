import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

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

        const supabase = createClient(supabaseUrl, supabaseAnonKey, {
            auth: {
                autoRefreshToken: false,
                persistSession: false,
            },
        });

        const { data, error } = await supabase
            .from("leads")
            .insert([{ nome, email, telefone, necessidade }])
            .select()
            .single();

        console.log("data:", data, "error:", error);

        if (error) {
            return NextResponse.json(
                { error: error.message || "Erro ao salvar lead" },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true, data });
    } catch (e) {
        console.log("Exception:", e);
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}