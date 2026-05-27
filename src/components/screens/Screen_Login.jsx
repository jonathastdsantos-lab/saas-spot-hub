import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Github, Facebook, Mail, KeyRound } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || 'https://fallback.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'fallback';
const supabase = createClient(supabaseUrl, supabaseKey);

export default function Screen_Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      navigate({ to: '/' });
    }
    setLoading(false);
  };

  const handleEmailSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');
    setSuccessMsg('');

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccessMsg('Verifique seu email para confirmar o cadastro!');
    }
    setLoading(false);
  };

  const handleOAuthLogin = async (provider) => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: window.location.origin,
      },
    });

    if (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="sx-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)', minHeight: '100vh', padding: 20 }}>
      <div className="sx-card" style={{ padding: 40, width: '100%', maxWidth: 440, display: 'flex', flexDirection: 'column', gap: 24 }}>
        
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em', marginBottom: 8 }}>Entrar na Stackly</h1>
          <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
            Acesse sua conta para salvar stacks e cadastrar seu SaaS.
          </p>
        </div>

        {errorMsg && (
          <div style={{ padding: 12, borderRadius: 8, background: 'var(--surface-3)', color: '#ff4d4f', fontSize: 13 }}>
            {errorMsg}
          </div>
        )}

        {successMsg && (
          <div style={{ padding: 12, borderRadius: 8, background: 'var(--ai-soft)', color: 'var(--text)', fontSize: 13 }}>
            {successMsg}
          </div>
        )}

        {/* Social Auth */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <button 
            onClick={() => handleOAuthLogin('google')}
            className="sx-btn sx-btn--ghost" 
            style={{ width: '100%', justifyContent: 'center', background: 'var(--surface)', padding: 14 }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ marginRight: 8 }}>
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Entrar com Google
          </button>

          <button 
            onClick={() => handleOAuthLogin('github')}
            className="sx-btn sx-btn--ghost" 
            style={{ width: '100%', justifyContent: 'center', background: 'var(--surface)', padding: 14 }}
          >
            <Github size={18} style={{ marginRight: 8 }} />
            Entrar com GitHub
          </button>

          <button 
            onClick={() => handleOAuthLogin('facebook')}
            className="sx-btn sx-btn--ghost" 
            style={{ width: '100%', justifyContent: 'center', background: 'var(--surface)', padding: 14, color: '#1877F2' }}
          >
            <Facebook size={18} style={{ marginRight: 8 }} />
            Entrar com Facebook
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }}></div>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>ou com email</span>
          <div style={{ flex: 1, height: 1, background: 'var(--border)' }}></div>
        </div>

        {/* Email Auth */}
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-dim)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <Mail size={14} /> Email
            </label>
            <input 
              type="email" 
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="sx-input"
              style={{ width: '100%' }}
              placeholder="seu@email.com"
              required
            />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-dim)', marginBottom: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
              <KeyRound size={14} /> Senha
            </label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="sx-input"
              style={{ width: '100%' }}
              placeholder="••••••••"
              required
            />
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <button onClick={handleEmailLogin} disabled={loading} className="sx-btn sx-btn--primary" style={{ flex: 1, justifyContent: 'center', padding: '14px' }}>
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
            <button onClick={handleEmailSignup} disabled={loading} className="sx-btn sx-btn--ghost" style={{ flex: 1, justifyContent: 'center', padding: '14px', background: 'var(--surface)' }}>
              Criar Conta
            </button>
          </div>
        </form>

      </div>
    </div>
  );
}
