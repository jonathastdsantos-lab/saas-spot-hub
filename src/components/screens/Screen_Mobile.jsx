// Telas mobile: Home + Consultor IA renderizadas em frames iOS
const Screen_Mobile_Home = () => {
  return (
    <IOSDevice dark={true}>
      <div className="sx-screen" style={{ background: 'var(--bg)', height: '100%', overflow: 'auto' }}>
        {/* compact nav */}
        <div style={{ padding: '8px 20px 6px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={14} />
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="sx-btn sx-btn--sm sx-btn--ghost sx-btn--icon" style={{ padding: 6 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M21 21l-5-5" /></svg>
            </button>
            <div className="sx-avatar" style={{ width: 26, height: 26, fontSize: 10 }}>MR</div>
          </div>
        </div>

        {/* Hero */}
        <div style={{ padding: '8px 20px 20px', position: 'relative' }}>
          <div style={{
            position: 'absolute', inset: '0 -20px 40px -20px',
            background: 'radial-gradient(circle at 50% 30%, var(--ai-soft), transparent 60%)',
            pointerEvents: 'none',
          }} />
          <div className="sx-pill sx-pill--ai" style={{ marginBottom: 14, position: 'relative' }}>
            <span className="dot" /> v2 · IA monta sua stack
          </div>
          <h1 style={{ fontSize: 34, fontWeight: 500, lineHeight: 1.02, letterSpacing: '-0.03em', margin: 0, position: 'relative' }}>
            A infra-<br />estrutura<br />
            <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--acc)', fontWeight: 400 }}>inteligente</span><br />
            do SaaS.
          </h1>

          {/* Search */}
          <div className="sx-search" style={{
            padding: '8px 8px 8px 14px', marginTop: 24,
            boxShadow: '0 0 0 4px var(--ai-soft)',
            position: 'relative',
          }}>
            <Icon name="sparkle" size={14} stroke="var(--ai)" />
            <input placeholder="Quero um CRM com WhatsApp…" style={{ fontSize: 13 }} />
            <button className="sx-btn sx-btn--primary sx-btn--sm" style={{ padding: 8 }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>

          <div style={{ display: 'flex', gap: 6, marginTop: 12, flexWrap: 'wrap', position: 'relative' }}>
            {['CRM salão', 'Alt. ao Notion', 'IA p/ leads', 'ERP oficina'].map(s => (
              <span key={s} className="sx-chip" style={{ fontSize: 10.5, padding: '4px 9px' }}>
                <Icon name="sparkle" size={9} stroke="var(--ai)" />
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div style={{ padding: '0 20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 8 }}>
          {[['2.847', 'softwares'], ['156k', 'reviews'], ['89k', 'stacks'], ['R$ 12M', 'economiz./mês']].map(([v, k]) => (
            <div key={k} className="sx-card" style={{ padding: 12 }}>
              <div className="sx-mono" style={{ fontSize: 17, fontWeight: 600 }}>{v}</div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', marginTop: 1 }}>{k}</div>
            </div>
          ))}
        </div>

        {/* Top */}
        <div style={{ padding: '24px 20px 8px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Em destaque</h3>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>Ver todos →</span>
        </div>
        <div style={{ padding: '0 20px', display: 'flex', gap: 10, overflow: 'auto' }}>
          {SAAS.slice(0, 5).map((p, i) => (
            <div key={p.id} className="sx-card" style={{ padding: 12, minWidth: 200, flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 8 }}>
                <LogoTile p={p} size={36} />
                <span className="sx-pill sx-pill--acc">#{i+1}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 10.5, color: 'var(--text-dim)', marginTop: 2 }}>{p.tag}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 10, color: 'var(--text-muted)', marginTop: 8 }}>
                <Stars value={p.stars} size={9} /> {p.stars}
              </div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Categorias</h3>
          <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>12 →</span>
        </div>
        <div style={{ padding: '12px 20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          {CATEGORIES.slice(0, 6).map(c => (
            <div key={c.id} className="sx-card" style={{ padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--acc-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Icon name={c.icon} size={14} stroke="var(--acc)" />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{c.name}</div>
                <div style={{ fontSize: 9.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{c.count}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Floating AI CTA */}
        <div style={{ position: 'sticky', bottom: 14, padding: '0 20px 16px' }}>
          <button className="sx-btn sx-btn--primary" style={{
            width: '100%', justifyContent: 'space-between',
            background: 'var(--ai)', color: '#fff',
            padding: '14px 16px', borderRadius: 14,
            boxShadow: '0 12px 30px var(--ai-glow)',
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
              <Icon name="sparkle" size={14} stroke="#fff" />
              Conversar com o Consultor IA
            </span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </IOSDevice>
  );
};

const Screen_Mobile_Chat = () => {
  return (
    <IOSDevice dark={true}>
      <div className="sx-screen" style={{ background: 'var(--bg)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* Top */}
        <div style={{ padding: '8px 20px 12px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button className="sx-btn sx-btn--sm sx-btn--ghost sx-btn--icon" style={{ padding: 4 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Consultor Stackly</div>
            <div style={{ fontSize: 10.5, color: 'var(--pos)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--pos)' }} />
              online · responde instantâneo
            </div>
          </div>
          <button className="sx-btn sx-btn--sm sx-btn--ghost sx-btn--icon" style={{ padding: 4 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="6" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="12" cy="18" r="1.5" /></svg>
          </button>
        </div>

        {/* Chat */}
        <div style={{ flex: 1, overflow: 'auto', padding: '20px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {/* user */}
          <div style={{ alignSelf: 'flex-end', maxWidth: '82%' }}>
            <div style={{ background: 'var(--surface-2)', padding: '10px 13px', borderRadius: '14px 14px 4px 14px', fontSize: 12.5, lineHeight: 1.5, border: '1px solid var(--border)' }}>
              Preciso de uma stack pra clínica de estética em SP. 4 funcionárias, 80k/mês.
            </div>
            <div style={{ fontSize: 9.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 3, textAlign: 'right' }}>09:42</div>
          </div>

          {/* ai */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', maxWidth: '92%' }}>
            <div style={{ width: 24, height: 24, borderRadius: 7, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="sparkle" size={11} stroke="#fff" />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ background: 'var(--surface)', padding: '10px 13px', borderRadius: '14px 14px 14px 4px', fontSize: 12.5, lineHeight: 1.5, border: '1px solid var(--border)' }}>
                Perfeito! Para esse porte recomendo <strong>4 ferramentas</strong> dentro de R$ 500/mês.
              </div>

              {/* recommendation cards */}
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
                {[SAAS[10], SAAS[3], SAAS[14]].map((p, i) => (
                  <div key={p.id} className="sx-card" style={{ padding: 10, display: 'grid', gridTemplateColumns: '32px 1fr auto', gap: 10, alignItems: 'center' }}>
                    <LogoTile p={p} size={32} />
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <span style={{ fontSize: 12, fontWeight: 600 }}>{p.name}</span>
                        <span className="sx-pill sx-pill--acc" style={{ fontSize: 9, padding: '1px 5px' }}>{95 - i*2}%</span>
                      </div>
                      <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-dim)', marginTop: 1 }}>{p.price}</div>
                    </div>
                    <button className="sx-btn sx-btn--sm" style={{ padding: '4px 8px', fontSize: 10 }}>+</button>
                  </div>
                ))}
              </div>

              {/* total */}
              <div className="sx-card" style={{ padding: 10, marginTop: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--acc-soft)', borderColor: 'transparent' }}>
                <div>
                  <div style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Total/mês</div>
                  <div className="sx-mono" style={{ fontSize: 18, fontWeight: 600 }}>R$ 376</div>
                </div>
                <button className="sx-btn sx-btn--primary" style={{ padding: '8px 12px', fontSize: 11 }}>Contratar</button>
              </div>
            </div>
          </div>

          {/* typing */}
          <div style={{ display: 'flex', gap: 6, alignItems: 'center', padding: '0 4px', color: 'var(--text-muted)', fontSize: 10 }}>
            <span style={{ display: 'inline-flex', gap: 3 }}>
              {[0, 1, 2].map(i => (
                <span key={i} style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ai)', opacity: 0.4 + i * 0.2 }} />
              ))}
            </span>
            consultor digitando…
          </div>
        </div>

        {/* Composer */}
        <div style={{ padding: '10px 14px 16px', borderTop: '1px solid var(--border)' }}>
          <div style={{ display: 'flex', gap: 6, marginBottom: 8, overflow: 'auto' }}>
            {['Adicione marketing', 'Reduzir custo', 'Ver integrações'].map(s => (
              <span key={s} className="sx-chip" style={{ fontSize: 10, padding: '4px 9px', flexShrink: 0 }}>{s}</span>
            ))}
          </div>
          <div className="sx-search" style={{ padding: '4px 4px 4px 12px' }}>
            <input placeholder="Mensagem…" style={{ fontSize: 12 }} />
            <button className="sx-btn sx-btn--primary sx-btn--sm" style={{ padding: 8, background: 'var(--ai)', color: '#fff' }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M3 12l18-9-5 18-4-7z" /></svg>
            </button>
          </div>
        </div>
      </div>
    </IOSDevice>
  );
};

window.Screen_Mobile_Home = Screen_Mobile_Home;
window.Screen_Mobile_Chat = Screen_Mobile_Chat;
