'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, action: 'login' }),
      });

if (!res.ok) {
        const data = await res.json();
        setErrorMsg(data.error || 'Erro ao fazer login');
        setStatus('error');
        return;
      }

      setStatus('success');
      setTimeout(() => {
        router.push('/admin');
      }, 1000);
    } catch {
      setErrorMsg('Erro de conexão');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-100">
      <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-center text-zinc-900 mb-8">
          Admin Motin Films
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="E-mail"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="admin@exemplo.com"
          />

          <Input
            label="Senha"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
          />

          {status === 'error' && (
            <p className="text-red-500 text-sm">{errorMsg}</p>
          )}

          <Button type="submit" isLoading={status === 'loading'} className="w-full">
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}