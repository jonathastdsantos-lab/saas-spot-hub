import Link from 'next/link';
import { Logo } from './Logo';

export function TopNav({ active, compact = false }: { active?: string, compact?: boolean }) {
  const links = [
    { id: 'descobrir', label: 'Descobrir', href: '/descobrir' },
    { id: 'rankings', label: 'Rankings', href: '/rankings/crm' },
    { id: 'consultor', label: 'Consultor IA', href: '/consultor' },
    { id: 'comparar', label: 'Comparar', href: '/comparar' },
    { id: 'stacks', label: 'Stacks', href: '/stacks' },
    { id: 'comunidade', label: 'Comunidade', href: '/comunidade' },
  ];

  return (
    <nav style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between',
      padding: compact ? '12px 24px' : '16px 80px',
      borderBottom: '1px solid var(--border)',
      background: 'var(--bg)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
        <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Logo size={18} />
        </Link>
        
        {!compact && (
          <div style={{ display: 'flex', gap: 24, fontSize: 13, fontWeight: 500 }}>
            {links.map(l => (
              <Link 
                key={l.id} 
                href={l.href}
                style={{
                  color: active === l.id ? 'var(--text)' : 'var(--text-dim)',
                  textDecoration: 'none',
                  transition: 'color 0.2s'
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <button className="sx-btn sx-btn--ghost sx-btn--sm">Login</button>
        <Link href="/anunciar" style={{ textDecoration: 'none' }}>
          <button className="sx-btn sx-btn--primary sx-btn--sm">Anunciar SaaS</button>
        </Link>
      </div>
    </nav>
  );
}
