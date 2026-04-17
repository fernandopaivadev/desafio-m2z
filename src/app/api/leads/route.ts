import { NextRequest, NextResponse } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

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
                { error: "Configuração do Supabase incompleta" },
                { status: 500 },
            );
        }

        const cookieStore = await cookies();

        const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
            cookies: {
                getAll() {
                    return cookieStore.getAll();
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) => {
                            cookieStore.set(name, value, options);
                        });
                    } catch {
                        // Called from Server Component
                    }
                },
            },
        });

        const { data, error } = await supabase
            .from("leads")
            .insert([{ nome, email, telefone, necessidade }])
            .select()
            .single();

        if (error) {
            return NextResponse.json(
                { error: error.message || "Erro ao salvar lead" },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true, data });
    } catch {
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}
