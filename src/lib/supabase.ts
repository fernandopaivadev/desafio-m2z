import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const getLeads = async () => {
    const { data, error } = await supabase
        .from("leads")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) throw error;
    return data;
};

export const createLead = async (lead: {
    nome: string;
    email: string;
    telefone: string;
    necessidade: string;
}) => {
    const { data, error } = await supabase
        .from("leads")
        .insert([lead])
        .select()
        .single();

    if (error) throw error;
    return data;
};

export const updateLeadStatus = async (id: string, status: string) => {
    const { data, error } = await supabase
        .from("leads")
        .update({ status })
        .eq("id", id)
        .select()
        .single();

    if (error) throw error;
    return data;
};

export const deleteLead = async (id: string) => {
    const { error } = await supabase.from("leads").delete().eq("id", id);

    if (error) throw error;
    return { success: true };
};
