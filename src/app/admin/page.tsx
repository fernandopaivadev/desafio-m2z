'use client';

import { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import LeadsChart from '@/components/LeadsChart';

interface Lead {
  id: string;
  nome: string;
  email: string;
  telefone: string;
  necessidade: string;
  status: string;
  created_at: string;
}

export default function AdminPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch('/api/auth', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'get-session' }),
        });

        const data = await res.json();
        if (data.session) {
          fetchLeads();
        } else {
          router.push('/admin/login');
        }
      } catch {
        router.push('/admin/login');
      }
    }

    async function fetchLeads() {
      try {
        const res = await fetch('/api/leads/admin');
        if (!res.ok) throw new Error();
        const data = await res.json();
        setLeads(data);
      } catch {
        // Erro ao carregar
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, [router]);

  const chartData = useMemo(() => {
    const grouped: Record<string, number> = {};
    leads.forEach((lead) => {
      const date = new Date(lead.created_at).toISOString().split('T')[0];
      grouped[date] = (grouped[date] || 0) + 1;
    });
    return Object.entries(grouped)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  }, [leads]);

  async function updateStatus(id: string, newStatus: string) {
    try {
      await fetch('/api/leads/admin', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status: newStatus }),
      });
      window.location.reload();
    } catch {
      // Erro ao atualizar
    }
  }

  async function deleteLead(id: string) {
    if (!confirm('Tem certeza que deseja excluir?')) return;
    try {
      await fetch('/api/leads/admin', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id }),
      });
      window.location.reload();
} catch {
      // Erro ao excluir
    }
  }

  async function logout() {
    try {
      await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'logout' }),
      });
      router.push('/admin/login');
    } catch {
      router.push('/admin/login');
    }
  }

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  }

  function getStatusColor(status: string) {
    switch (status) {
      case 'novo': return 'bg-blue-100 text-blue-800';
      case 'contatado': return 'bg-yellow-100 text-yellow-800';
      case 'convertido': return 'bg-green-100 text-green-800';
      case 'perdido': return 'bg-red-100 text-red-800';
      default: return 'bg-zinc-100 text-zinc-800';
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin h-8 w-8 border-4 border-yellow-500 border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-100">
      <header className="bg-zinc-900 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Dashboard Motin Films</h1>
          <Button onClick={logout} variant="ghost" size="sm">
            Sair
          </Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <LeadsChart data={chartData} />
        </div>
        
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-4 border-b bg-zinc-50">
            <h2 className="text-lg font-semibold text-zinc-900">
              Leads ({leads.length})
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-50 text-left">
                <tr>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Nome</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">E-mail</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Telefone</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Necessidade</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Status</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Data</th>
                  <th className="px-4 py-3 text-sm font-medium text-zinc-600">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="px-4 py-8 text-center text-zinc-500">
                      Nenhum lead encontrado
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-zinc-50">
                      <td className="px-4 py-3 text-zinc-900">{lead.nome}</td>
                      <td className="px-4 py-3 text-zinc-600">{lead.email}</td>
                      <td className="px-4 py-3 text-zinc-600">{lead.telefone || '-'}</td>
                      <td className="px-4 py-3 text-zinc-600">{lead.necessidade}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2 py-1 text-xs rounded-full ${getStatusColor(lead.status)}`}>
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-zinc-600 text-sm">
                        {formatDate(lead.created_at)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex gap-2">
                          {lead.status === 'novo' && (
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => updateStatus(lead.id, 'contatado')}
                            >
                              Contatado
                            </Button>
                          )}
                          <button
                            onClick={() => deleteLead(lead.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Excluir
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}