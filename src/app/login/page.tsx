import { login, signup } from './actions'

export default function LoginPage() {
  return (
    <div className="sx-screen" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--bg)' }}>
      <div className="sx-card" style={{ padding: 32, width: '100%', maxWidth: 400 }}>
        <h1 style={{ fontSize: 24, fontWeight: 600, marginBottom: 8, textAlign: 'center' }}>Entrar na Stackly</h1>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 24, textAlign: 'center' }}>
          Salve suas stacks e avalie ferramentas.
        </p>
        
        <form style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <label htmlFor="email" style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-dim)', marginBottom: 6, display: 'block' }}>Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              required 
              style={{ width: '100%', padding: '10px 12px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 14 }}
              placeholder="seu@email.com"
            />
          </div>
          <div>
            <label htmlFor="password" style={{ fontSize: 12, fontWeight: 500, color: 'var(--text-dim)', marginBottom: 6, display: 'block' }}>Senha</label>
            <input 
              id="password" 
              name="password" 
              type="password" 
              required 
              style={{ width: '100%', padding: '10px 12px', background: 'var(--surface-2)', border: '1px solid var(--border)', borderRadius: 8, color: 'var(--text)', fontSize: 14 }}
              placeholder="••••••••"
            />
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
            <button formAction={login} className="sx-btn sx-btn--primary" style={{ flex: 1, justifyContent: 'center', padding: '12px', fontSize: 14 }}>
              Entrar
            </button>
            <button formAction={signup} className="sx-btn sx-btn--ghost" style={{ flex: 1, justifyContent: 'center', padding: '12px', fontSize: 14, background: 'var(--surface)' }}>
              Criar conta
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
