// Tela 1: Home / Landing — busca IA centralizada, categorias, em destaque, rankings
const Screen_Home = () => {
  const featured = SAAS.slice(0, 4);
  const trending = SAAS.slice(4, 10);
  return (
    <div className="sx-screen">
      <TopNav active="descobrir" />

      {/* HERO */}
      <div style={{ padding: '60px 80px 40px', position: 'relative', overflow: 'hidden' }}>
        {/* subtle mesh glow */}
        <div style={{
          position: 'absolute', top: -200, left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 600, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, var(--ai-soft) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }} />

        <div style={{ position: 'relative', maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div className="sx-pill sx-pill--ai" style={{ marginBottom: 24 }}>
            <span className="dot" /> v2 · Consultor IA agora monta sua stack inteira
          </div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontWeight: 500,
            fontSize: 64, lineHeight: 1.02, letterSpacing: '-0.035em',
            margin: 0, color: 'var(--text)',
          }}>
            A infraestrutura<br/>
            <span className="sx-serif" style={{ fontWeight: 400, fontStyle: 'italic', color: 'var(--acc)' }}>inteligente</span> do mercado SaaS.
          </h1>
          <p style={{ fontSize: 17, color: 'var(--text-dim)', margin: '20px auto 36px', maxWidth: 620, lineHeight: 1.5 }}>
            Descubra, compare e contrate softwares e agentes IA com um consultor que entende seu negócio. Sem planilha, sem comparativo enviesado, sem perder uma semana pesquisando.
          </p>

          {/* AI search */}
          <div className="sx-search" style={{
            padding: '6px 6px 6px 18px',
            background: 'var(--surface)',
            borderColor: 'var(--border-strong)',
            boxShadow: '0 8px 40px rgba(0,0,0,0.4), 0 0 0 6px var(--ai-soft)',
            textAlign: 'left',
          }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--ai)" strokeWidth="2">
              <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
            </svg>
            <input placeholder="Quero um CRM com WhatsApp e IA para minha clínica de estética…" defaultValue="" />
            <button className="sx-btn sx-btn--primary" style={{ background: 'var(--text)', color: 'var(--bg)' }}>
              Perguntar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>

          <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 18, flexWrap: 'wrap' }}>
            {['CRM para salão com WhatsApp', 'Alternativa ao Notion', 'IA para qualificar leads', 'ERP para oficina mecânica', 'Stack completa para clínica'].map(s => (
              <button key={s} className="sx-chip" style={{ cursor: 'pointer', fontFamily: 'var(--font-display)' }}>
                <Icon name="sparkle" size={11} stroke="var(--ai)" />
                {s}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginTop: 44, fontSize: 12, color: 'var(--text-muted)' }}>
            <div><strong style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 18, display: 'block', marginBottom: 2 }}>2.847</strong>softwares</div>
            <div><strong style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 18, display: 'block', marginBottom: 2 }}>156k</strong>avaliações verificadas</div>
            <div><strong style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 18, display: 'block', marginBottom: 2 }}>89k</strong>stacks montadas</div>
            <div><strong style={{ color: 'var(--text)', fontFamily: 'var(--font-mono)', fontSize: 18, display: 'block', marginBottom: 2 }}>R$ 12M</strong>economizados/mês</div>
          </div>
        </div>
      </div>

      {/* CATEGORIES grid */}
      <div style={{ padding: '20px 80px 32px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <h3 style={{ fontSize: 13, fontWeight: 500, color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: 0, fontFamily: 'var(--font-mono)' }}>
            Categorias · 2.847 ferramentas
          </h3>
          <a style={{ fontSize: 12, color: 'var(--text-dim)', textDecoration: 'none' }}>Ver todas →</a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
          {CATEGORIES.slice(0, 12).map(c => (
            <button key={c.id} className="sx-card" style={{
              padding: '14px', display: 'flex', flexDirection: 'column', gap: 8, textAlign: 'left',
              cursor: 'pointer', background: 'var(--surface)',
            }}>
              <Icon name={c.icon} size={18} stroke="var(--acc)" />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{c.count} apps</div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* FEATURED */}
      <div style={{ padding: '24px 80px 28px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 18 }}>
          <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>
            Em destaque <span style={{ color: 'var(--text-muted)', fontSize: 13, fontFamily: 'var(--font-mono)', fontWeight: 400 }}>· curado pela editora</span>
          </h3>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="sx-btn sx-btn--sm">Esta semana</button>
            <button className="sx-btn sx-btn--sm sx-btn--ghost">Este mês</button>
            <button className="sx-btn sx-btn--sm sx-btn--ghost">2026</button>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {featured.map((p, i) => (
            <div key={p.id} className="sx-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <LogoTile p={p} />
                <div className="sx-pill sx-pill--acc"># {i + 1}</div>
              </div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>{p.tag}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--text-muted)' }}>
                <Stars value={p.stars} /> {p.stars} · {p.reviews}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 8, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)' }}>{p.price}</div>
                <div className="sx-pill" style={{ background: 'transparent', borderColor: 'transparent', padding: 0 }}>
                  Score <strong style={{ color: 'var(--acc)', marginLeft: 4 }}>{p.score}</strong>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* TRENDING / RANKINGS */}
      <div style={{ padding: '8px 80px 60px', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 18 }}>
        {/* Trending list */}
        <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <Icon name="sparkle" size={14} stroke="var(--acc)" />
              <h3 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>Tendências da semana</h3>
            </div>
            <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Atualizado há 4 min</div>
          </div>
          {trending.map((p, i) => (
            <div key={p.id} style={{
              padding: '12px 20px', display: 'grid',
              gridTemplateColumns: '20px 40px 1fr auto 90px auto',
              gap: 14, alignItems: 'center',
              borderBottom: i < trending.length - 1 ? '1px solid var(--border)' : 'none',
            }}>
              <div className="sx-mono" style={{ fontSize: 12, color: 'var(--text-muted)', textAlign: 'right' }}>{i + 1}</div>
              <LogoTile p={p} size={32} />
              <div>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 1 }}>{p.tag}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, color: 'var(--text-dim)' }}>
                <Stars value={p.stars} size={10} /> {p.stars}
              </div>
              <Spark data={Array.from({ length: 10 }, () => 3 + Math.random() * 10)} w={80} h={22} />
              <div className="sx-mono" style={{ fontSize: 11, color: 'var(--pos)' }}>
                ↑ {12 + (i * 7) % 40}%
              </div>
            </div>
          ))}
        </div>

        {/* AI consultant teaser */}
        <div className="sx-card" style={{
          padding: 20,
          background: 'linear-gradient(180deg, var(--ai-soft), transparent 60%), var(--surface)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Icon name="sparkle" size={14} stroke="#fff" />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Consultor Stackly</div>
          </div>
          <h3 className="sx-serif" style={{ fontSize: 28, fontWeight: 400, letterSpacing: '-0.01em', margin: '4px 0 14px', lineHeight: 1.15 }}>
            Conte o que você precisa.<br/>Eu monto a stack inteira.
          </h3>
          <p style={{ fontSize: 12.5, color: 'var(--text-dim)', lineHeight: 1.5, margin: '0 0 16px' }}>
            CRM, WhatsApp, ERP, agentes IA — comparados, integrados e prontos para contratar. Em segundos.
          </p>
          <button className="sx-btn sx-btn--primary" style={{ width: '100%', justifyContent: 'center', background: 'var(--ai)', color: '#fff' }}>
            Conversar com a IA
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
          <div style={{ marginTop: 16, padding: 12, background: 'var(--bg-2)', borderRadius: 10, fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.7 }}>
            <span style={{ color: 'var(--ai)' }}>›</span> 89.412 stacks geradas<br/>
            <span style={{ color: 'var(--ai)' }}>›</span> média de 7 ferramentas/stack<br/>
            <span style={{ color: 'var(--ai)' }}>›</span> 96% dos usuários economizam &gt;30%
          </div>
        </div>
      </div>
    </div>
  );
};

window.Screen_Home = Screen_Home;
