import React, { useEffect, useState } from 'react';
import { Link } from '@tanstack/react-router';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
);

export const TopNav = ({ active, compact }: { active?: string; compact?: boolean }) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });
    return () => authListener.subscription.unsubscribe();
  }, []);

  return (
    <nav className="p-4 border-b border-gray-800 flex justify-between items-center bg-gray-900 text-white">
      <Link to="/" className="font-bold text-xl text-white no-underline">Stackly</Link>
      <div className="flex gap-4 items-center">
        <Link to="/" className={`text-white no-underline ${active === 'descobrir' ? 'text-neon' : ''}`}>Descobrir</Link>
        <span className={active === 'rankings' ? 'text-neon' : ''}>Rankings</span>
        <span className={active === 'comunidade' ? 'text-neon' : ''}>Comunidade</span>
        <Link to="/anunciar" className="text-white no-underline ml-4 bg-gray-800 px-3 py-1 rounded">Anunciar</Link>
        {user ? (
          <button onClick={() => supabase.auth.signOut()} className="text-red-400 ml-2">Sair</button>
        ) : (
          <Link to="/login" className="text-white no-underline ml-2 bg-[var(--ai)] text-black px-3 py-1 rounded font-medium">Entrar</Link>
        )}
      </div>
    </nav>
  );
};

export const Icon = ({ name, size = 24, stroke = 'currentColor', fill = 'none' }: any) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

export const LogoTile = ({ p, size = 48 }: any) => (
  <div style={{ width: size, height: size, backgroundColor: p?.color || '#ccc', borderRadius: 8 }} />
);

export const Logo = ({ size = 24 }: any) => (
  <div style={{ fontWeight: 'bold', fontSize: size }}>Stackly Logo</div>
);

export const IOSDevice = ({ children, dark }: any) => (
  <div style={{
    width: 375, height: 812, borderRadius: 40, border: '14px solid #111', 
    overflow: 'hidden', position: 'relative', background: dark ? '#000' : '#fff'
  }}>
    <div style={{
      position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
      width: 150, height: 30, background: '#111', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, zIndex: 10
    }} />
    {children}
  </div>
);

export const ScoreGauge = ({ score }: any) => (
  <div style={{
    width: 40, height: 40, borderRadius: '50%', border: '4px solid var(--acc)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontWeight: 'bold', fontSize: 14, color: 'var(--acc)'
  }}>
    {score || 95}
  </div>
);

export const Stars = ({ value, size = 14 }: any) => (
  <div style={{ display: 'flex', color: '#FFD700', fontSize: size }}>
    {'★'.repeat(Math.round(value || 0))}
  </div>
);

export const Spark = ({ data, w, h }: any) => (
  <div style={{ width: w, height: h, background: 'linear-gradient(to right, #ccc, #999)' }} />
);
