// Tela 7: Dashboard do anunciante (dono de SaaS)
const Screen_Dashboard = () => {
  const p = SAAS[0]; // Fluxia owner
  const sparkline = [22, 28, 24, 35, 31, 42, 38, 48, 45, 56, 52, 68, 62, 78];
  const fbarsTop = [38, 52, 41, 64, 55, 72, 68, 88, 78, 96, 84, 110, 102, 124];

  return (
    <div className="sx-screen" style={{ display: 'flex' }}>
      {/* SIDEBAR */}
      <div style={{ width: 220, borderRight: '1px solid var(--border)', background: 'var(--bg-2)', padding: '16px 12px', display: 'flex', flexDirection: 'column' }}>
        <Logo size={14} />
        <div className="sx-mono" style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '22px 8px 6px' }}>Painel</div>
        {[
          ['Visão geral', 'chart', true],
          ['Meus produtos', 'grid'],
          ['Tráfego', 'pipeline'],
          ['Leads', 'people'],
          ['Avaliações', 'check'],
          ['Comparações', 'cube'],
        ].map(([t, icon, a]) => (
          <button key={t} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
            background: a ? 'var(--surface-2)' : 'transparent', border: 0, borderRadius: 7,
            color: a ? 'var(--text)' : 'var(--text-dim)', fontWeight: a ? 500 : 400,
            cursor: 'pointer', textAlign: 'left', marginBottom: 1, fontSize: 12.5,
          }}>
            <Icon name={icon} size={14} stroke={a ? 'var(--acc)' : 'var(--text-muted)'} />
            {t}
          </button>
        ))}
        <div className="sx-mono" style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '20px 8px 6px' }}>Crescimento</div>
        {[
          ['Impulsionar', 'sparkle'],
          ['Anúncios', 'megaphone'],
          ['SEO', 'check'],
          ['Afiliados', 'people'],
        ].map(([t, icon]) => (
          <button key={t} style={{
            display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
            background: 'transparent', border: 0, borderRadius: 7,
            color: 'var(--text-dim)', cursor: 'pointer', textAlign: 'left', fontSize: 12.5,
          }}>
            <Icon name={icon} size={14} stroke="var(--text-muted)" />
            {t}
          </button>
        ))}

        <div style={{ marginTop: 'auto', padding: 12, borderRadius: 10, background: 'var(--surface)', border: '1px solid var(--border)' }}>
          <div style={{ fontSize: 11, fontWeight: 600 }}>Plano: Pro</div>
          <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 2 }}>Renova em 21 dias</div>
          <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>Gerenciar</button>
        </div>
      </div>

      {/* MAIN */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        {/* Topbar */}
        <div style={{ padding: '14px 28px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <LogoTile p={p} size={32} />
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{p.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>stackly.com/fluxia · <span className="sx-pill sx-pill--pos" style={{ padding: '1px 6px' }}><span className="dot" /> publicado</span></div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ display: 'flex', background: 'var(--surface-2)', borderRadius: 8, padding: 2, border: '1px solid var(--border)' }}>
              {['7d', '30d', '90d', '12m'].map((d, i) => (
                <button key={d} style={{
                  padding: '6px 10px', background: i === 1 ? 'var(--surface)' : 'transparent', border: 0,
                  borderRadius: 6, color: 'var(--text)', fontSize: 11.5, fontWeight: i === 1 ? 500 : 400,
                  cursor: 'pointer', fontFamily: 'var(--font-mono)',
                }}>{d}</button>
              ))}
            </div>
            <button className="sx-btn sx-btn--sm sx-btn--ghost">Exportar</button>
            <button className="sx-btn sx-btn--primary sx-btn--sm">
              <Icon name="sparkle" size={11} stroke="var(--acc-ink)" />
              Impulsionar
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '24px 28px 40px' }}>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
            {[
              { k: 'Impressões', v: '124.8k', d: '+18%', t: 'pos', data: sparkline },
              { k: 'Cliques no site', v: '8.412', d: '+24%', t: 'pos', data: fbarsTop.map(x => x * 0.7) },
              { k: 'Leads', v: '342', d: '+12%', t: 'pos', data: sparkline.map(x => x * 0.9) },
              { k: 'Receita atribuída', v: 'R$ 48.290', d: '−4%', t: 'neg', data: sparkline.slice().reverse() },
            ].map(m => (
              <div key={m.k} className="sx-card" style={{ padding: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{m.k}</div>
                    <div className="sx-mono" style={{ fontSize: 24, fontWeight: 600, marginTop: 4 }}>{m.v}</div>
                  </div>
                  <span className="sx-pill" style={{
                    color: m.t === 'pos' ? 'var(--pos)' : 'var(--neg)',
                    background: m.t === 'pos' ? 'rgba(107,228,159,0.12)' : 'rgba(255,122,106,0.12)',
                    borderColor: 'transparent',
                  }}>{m.d}</span>
                </div>
                <div style={{ marginTop: 8 }}>
                  <Spark data={m.data} w={200} h={32} color={m.t === 'pos' ? 'var(--acc)' : 'var(--neg)'} />
                </div>
              </div>
            ))}
          </div>

          {/* CHART + funnel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 12, marginTop: 12 }}>
            <div className="sx-card" style={{ padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Tráfego e leads · últimos 30 dias</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Comparação com período anterior</div>
                </div>
                <div style={{ display: 'flex', gap: 14, fontSize: 11 }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, background: 'var(--acc)', borderRadius: 2 }} /> Visitas</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, background: 'var(--ai)', borderRadius: 2 }} /> Leads</span>
                </div>
              </div>
              {/* Chart svg */}
              <svg width="100%" height="200" viewBox="0 0 700 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="ag" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--acc)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--acc)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {[0, 50, 100, 150, 200].map(y => <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />)}
                {(() => {
                  const data1 = Array.from({ length: 30 }, (_, i) => 60 + Math.sin(i / 3) * 25 + Math.cos(i / 7) * 20 + i * 2);
                  const data2 = data1.map(v => v * 0.35 + Math.random() * 5);
                  const max = 200;
                  const path = (d, mode) => {
                    const pts = d.map((v, i) => `${(i / 29) * 700},${200 - (v / max) * 180}`);
                    if (mode === 'fill') return `M 0,200 L ${pts.join(' L ')} L 700,200 Z`;
                    return `M ${pts.join(' L ')}`;
                  };
                  return (
                    <>
                      <path d={path(data1, 'fill')} fill="url(#ag)" />
                      <path d={path(data1)} fill="none" stroke="var(--acc)" strokeWidth="2" />
                      <path d={path(data2)} fill="none" stroke="var(--ai)" strokeWidth="2" strokeDasharray="4 4" />
                    </>
                  );
                })()}
              </svg>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>
                <span>1 nov</span><span>8 nov</span><span>15 nov</span><span>22 nov</span><span>30 nov</span>
              </div>
            </div>

            {/* Funnel */}
            <div className="sx-card" style={{ padding: 18 }}>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Funil de conversão</div>
              {[
                ['Visitantes', 124800, 100, 'var(--acc)'],
                ['Página perfil', 32400, 26, 'var(--acc)'],
                ['Clicou em Testar', 8412, 6.7, 'var(--acc)'],
                ['Lead qualificado', 342, 0.27, 'var(--ai)'],
                ['Conversão', 84, 0.067, 'var(--ai)'],
              ].map(([label, n, pct, color], i) => (
                <div key={label} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, marginBottom: 4 }}>
                    <span style={{ color: 'var(--text-dim)' }}>{label}</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>
                      <strong style={{ color: 'var(--text)' }}>{n.toLocaleString('pt-BR')}</strong>
                      <span style={{ color: 'var(--text-muted)', marginLeft: 6 }}>{pct < 1 ? pct.toFixed(2) : pct}%</span>
                    </span>
                  </div>
                  <div style={{ height: 6, background: 'var(--surface-3)', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ width: `${100 - i * 18}%`, height: '100%', background: color, opacity: 1 - i * 0.1 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginTop: 12 }}>
            {/* Reviews to reply */}
            <div className="sx-card" style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Reviews · 4 sem resposta</div>
                <a style={{ fontSize: 11, color: 'var(--text-muted)' }}>Ver todas</a>
              </div>
              {[
                { n: 'Felipe M.', s: 4, t: 'WhatsApp nativo é imbatível. Faltam relatórios customizados.', d: 'há 6h' },
                { n: 'Renata C.', s: 5, t: 'Substituí 3 ferramentas por uma só.', d: 'há 1d' },
                { n: 'Bruno S.', s: 3, t: 'Tem que melhorar o app mobile, trava bastante.', d: 'há 2d' },
              ].map((r, i) => (
                <div key={i} style={{ padding: '10px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <div className="sx-avatar" style={{ width: 22, height: 22, fontSize: 10 }}>{r.n.split(' ').map(x => x[0]).join('')}</div>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>{r.n}</span>
                    <Stars value={r.s} size={9} />
                    <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginLeft: 'auto' }}>{r.d}</span>
                  </div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.45 }}>{r.t}</div>
                  <div style={{ marginTop: 6, display: 'flex', gap: 6 }}>
                    <button className="sx-btn sx-btn--sm" style={{ padding: '4px 8px', fontSize: 11 }}>
                      <Icon name="sparkle" size={9} stroke="var(--ai)" />
                      Responder com IA
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparisons */}
            <div className="sx-card" style={{ padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Top comparações</div>
                <span className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)' }}>30d</span>
              </div>
              {[
                ['Fluxia vs HubSpot', 1840, 'vence em 7/12'],
                ['Fluxia vs RD Station', 1432, 'vence em 9/12'],
                ['Fluxia vs ZapCRM', 987, 'vence em 9/14'],
                ['Fluxia vs Pipedrive', 612, 'vence em 6/12'],
                ['Fluxia vs Agendor', 489, 'vence em 8/11'],
              ].map(([t, n, v], i) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 0 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12, fontWeight: 500 }}>{t}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--pos)', fontFamily: 'var(--font-mono)', marginTop: 1 }}>{v}</div>
                  </div>
                  <span className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>{n.toLocaleString('pt-BR')}</span>
                </div>
              ))}
            </div>

            {/* Boost suggestions */}
            <div className="sx-card" style={{ padding: 16, background: 'linear-gradient(180deg, var(--acc-soft), transparent 70%), var(--surface)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <Icon name="sparkle" size={14} stroke="var(--acc)" />
                <div style={{ fontSize: 13, fontWeight: 600 }}>Oportunidades</div>
              </div>
              {[
                { t: 'Patrocinar "CRM para salão"', v: '+ R$ 8.2k receita estimada', cta: 'R$ 320/sem' },
                { t: 'Responder 4 reviews pendentes', v: '+ 0.2 no SaaS Score', cta: 'Gerar respostas' },
                { t: 'Adicionar 3 screenshots faltantes', v: '+ 14% no engajamento', cta: 'Fazer agora' },
                { t: 'Destacar diferencial: IA', v: 'Concorrentes não mencionam', cta: 'Editar perfil' },
              ].map((o, i) => (
                <div key={o.t} style={{ padding: '10px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{o.t}</div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                    <span style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{o.v}</span>
                    <button className="sx-btn sx-btn--sm" style={{ padding: '3px 8px', fontSize: 10.5 }}>{o.cta}</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Screen_Dashboard = Screen_Dashboard;
