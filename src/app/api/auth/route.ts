import { NextRequest, NextResponse } from "next/server";
import { getSupabaseServer } from "@/lib/supabase-server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email, password, action } = body;

        const supabase = await getSupabaseServer();

        if (action === "login") {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return NextResponse.json(
                    { error: error.message || "Credenciais inválidas" },
                    { status: 401 },
                );
            }

            return NextResponse.json({
                success: true,
                user: data.user,
                session: data.session,
            });
        }

        if (action === "logout") {
            await supabase.auth.signOut();
            return NextResponse.json({ success: true });
        }

        if (action === "get-session") {
            const {
                data: { session },
            } = await supabase.auth.getSession();
            return NextResponse.json({ session });
        }

        return NextResponse.json({ error: "Ação inválida" }, { status: 400 });
    } catch {
        return NextResponse.json({ error: "Erro interno" }, { status: 500 });
    }
}
