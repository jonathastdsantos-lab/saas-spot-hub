// Tela 10: Mapa de Integrações — node graph visual de como tudo se conecta
const Screen_Integrations = () => {
  // Node positions on an 1100x540 canvas. Center = hub.
  const center = { x: 550, y: 270 };
  const nodes = [
    { id: 'fluxia',  p: SAAS[0],  x: 200, y: 110, role: 'CRM' },
    { id: 'voxa',    p: SAAS[14], x: 200, y: 270, role: 'WhatsApp Bot' },
    { id: 'salonpro',p: SAAS[3],  x: 200, y: 430, role: 'Agenda' },
    { id: 'paganow', p: SAAS[5],  x: 900, y: 110, role: 'Pagamentos' },
    { id: 'caixa',   p: SAAS[2],  x: 900, y: 270, role: 'ERP' },
    { id: 'leadgrid',p: SAAS[4],  x: 900, y: 430, role: 'Landing pages' },
    { id: 'agentik', p: SAAS[6],  x: 550, y: 60,  role: 'Agentes IA' },
    { id: 'pulse',   p: SAAS[9],  x: 550, y: 480, role: 'Analytics' },
  ];

  // Edges (which nodes connect through the hub)
  const edges = [
    { from: 'fluxia',  to: 'voxa', type: 'native', label: 'lead → bot' },
    { from: 'fluxia',  to: 'paganow', type: 'native', label: 'cobrança' },
    { from: 'fluxia',  to: 'caixa', type: 'native', label: 'nota fiscal' },
    { from: 'voxa',    to: 'salonpro', type: 'zapier', label: 'agenda' },
    { from: 'leadgrid',to: 'fluxia', type: 'native', label: 'leads' },
    { from: 'agentik', to: 'voxa', type: 'n8n', label: 'IA' },
    { from: 'agentik', to: 'fluxia', type: 'native', label: 'IA' },
    { from: 'pulse',   to: 'fluxia', type: 'native', label: 'BI' },
    { from: 'pulse',   to: 'caixa', type: 'native', label: 'BI' },
    { from: 'salonpro',to: 'paganow', type: 'zapier', label: 'cobrança' },
  ];

  const nodeById = Object.fromEntries(nodes.map(n => [n.id, n]));
  const typeColors = {
    native: 'var(--acc)',
    zapier: '#FFD166',
    n8n: '#EA4B71',
  };

  return (
    <div className="sx-screen">
      <TopNav active="stacks" />

      {/* Header */}
      <div style={{ padding: '20px 32px 16px', borderBottom: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
        <div>
          <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Mapa de Integrações</div>
          <h1 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', margin: '4px 0 0' }}>
            Como sua stack se conecta <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>· em tempo real</span>
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          <button className="sx-btn sx-btn--sm">Visualização</button>
          <button className="sx-btn sx-btn--sm sx-btn--ghost">Lista</button>
          <button className="sx-btn sx-btn--sm sx-btn--primary">
            <Icon name="sparkle" size={11} stroke="var(--acc-ink)" />
            Sugerir conexões
          </button>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', height: 'calc(100% - 49px - 73px)' }}>
        {/* CANVAS */}
        <div style={{ position: 'relative', overflow: 'hidden', background: 'var(--bg)',
          backgroundImage: 'radial-gradient(circle at 20% 30%, var(--ai-soft) 0%, transparent 35%), radial-gradient(circle at 80% 70%, var(--acc-soft) 0%, transparent 35%)',
        }}>
          {/* dot grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
            opacity: 0.6,
            maskImage: 'linear-gradient(180deg, transparent, black 8%, black 92%, transparent)',
          }} />

          <svg viewBox="0 0 1100 540" preserveAspectRatio="xMidYMid meet" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
            <defs>
              <marker id="arrowAcc" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto">
                <path d="M0,0 L10,5 L0,10 z" fill="var(--acc)" />
              </marker>
            </defs>
            {edges.map((e, i) => {
              const a = nodeById[e.from], b = nodeById[e.to];
              const mid = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
              const offX = (mid.x - center.x) * 0.15;
              const offY = (mid.y - center.y) * 0.15;
              const c = { x: mid.x - offX, y: mid.y - offY };
              const color = typeColors[e.type];
              return (
                <g key={i}>
                  <path
                    d={`M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`}
                    fill="none" stroke={color} strokeWidth="1.5"
                    strokeDasharray={e.type === 'native' ? 'none' : '4 4'}
                    opacity="0.7"
                  />
                  {/* animated pulse */}
                  <circle r="3" fill={color}>
                    <animateMotion dur={`${3 + i * 0.4}s`} repeatCount="indefinite"
                      path={`M ${a.x} ${a.y} Q ${c.x} ${c.y} ${b.x} ${b.y}`} />
                  </circle>
                </g>
              );
            })}
          </svg>

          {/* Nodes */}
          {nodes.map(n => {
            const isHub = n.id === 'fluxia';
            return (
              <div key={n.id} style={{
                position: 'absolute',
                left: `calc(${(n.x / 1100) * 100}% - ${isHub ? 80 : 60}px)`,
                top: `calc(${(n.y / 540) * 100}% - ${isHub ? 40 : 30}px)`,
              }}>
                <div className="sx-card" style={{
                  padding: isHub ? '12px 14px' : '8px 12px',
                  display: 'flex', alignItems: 'center', gap: 10,
                  background: 'var(--surface)',
                  borderColor: isHub ? 'var(--acc)' : 'var(--border-strong)',
                  boxShadow: isHub ? '0 0 32px var(--acc-glow), var(--shadow-card)' : 'var(--shadow-card)',
                }}>
                  <LogoTile p={n.p} size={isHub ? 36 : 26} />
                  <div>
                    <div style={{ fontSize: isHub ? 13 : 11.5, fontWeight: 600 }}>{n.p.name}</div>
                    <div style={{ fontSize: 9.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>{n.role}</div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating legend */}
          <div className="sx-card" style={{
            position: 'absolute', bottom: 14, left: 14, padding: 12, display: 'flex', gap: 14,
            background: 'var(--surface)', alignItems: 'center',
          }}>
            {[
              ['Nativa', typeColors.native, 'solid'],
              ['Zapier', typeColors.zapier, 'dashed'],
              ['n8n / Make', typeColors.n8n, 'dashed'],
            ].map(([l, c, s]) => (
              <span key={l} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                <span style={{ width: 16, height: 2, background: c, borderTop: s === 'dashed' ? `2px dashed ${c}` : 'none', border: s === 'dashed' ? '0' : 'none' }} />
                {l}
              </span>
            ))}
          </div>

          {/* Floating stats */}
          <div className="sx-card" style={{ position: 'absolute', top: 14, right: 14, padding: 12, display: 'flex', gap: 18, background: 'var(--surface)' }}>
            {[['Conexões', '14'], ['Nativas', '8'], ['Automações', '23']].map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: 9.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{k}</div>
                <div className="sx-mono" style={{ fontSize: 18, fontWeight: 600 }}>{v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right panel: detail of selected edge */}
        <div style={{ borderLeft: '1px solid var(--border)', background: 'var(--bg-2)', padding: 18, overflow: 'auto' }}>
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Conexão selecionada</div>

          <div className="sx-card" style={{ padding: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <LogoTile p={SAAS[0]} size={28} />
              <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><path d="M2 6h16M14 2l4 4-4 4" stroke="var(--acc)" strokeWidth="1.5" /></svg>
              <LogoTile p={SAAS[14]} size={28} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Fluxia → Voxa</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-dim)', marginTop: 2 }}>Lead capturado vira conversa de bot WhatsApp</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
              <span className="sx-pill sx-pill--acc">Nativa</span>
              <span className="sx-pill">Bidirectional</span>
              <span className="sx-pill">SSO</span>
            </div>
          </div>

          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '20px 0 8px' }}>Automações prontas · 4</div>
          {[
            { t: 'Novo lead → mensagem de boas-vindas', d: 'Disparo em 30s', uses: '12.4k' },
            { t: 'Sem resposta em 24h → follow-up', d: 'Cadência inteligente', uses: '8.7k' },
            { t: 'Lead quente → notificar vendedor', d: 'Score ≥ 80', uses: '6.1k' },
            { t: 'Reagendamento → atualizar CRM', d: 'Sync ambos lados', uses: '3.8k' },
          ].map((a, i) => (
            <div key={i} className="sx-card" style={{ padding: 12, marginBottom: 6 }}>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{a.t}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 }}>
                <span style={{ fontSize: 10.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{a.d}</span>
                <span style={{ fontSize: 10.5, color: 'var(--text-dim)' }}>{a.uses} usos</span>
              </div>
            </div>
          ))}

          <button className="sx-btn sx-btn--primary" style={{ width: '100%', justifyContent: 'center', marginTop: 14 }}>
            <Icon name="sparkle" size={12} stroke="var(--acc-ink)" />
            Ativar automação com IA
          </button>

          <div className="sx-card" style={{ padding: 12, marginTop: 14, background: 'var(--ai-soft)', borderColor: 'transparent' }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ai)', marginBottom: 4 }}>Sugestão da IA</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Notei que sua stack tem <strong style={{ color: 'var(--text)' }}>PagaNow</strong> mas não conecta com Voxa. Configurar isso pode <strong style={{ color: 'var(--acc)' }}>aumentar conversão em 18%</strong> ao mandar boletos pelo WhatsApp.
            </div>
            <button className="sx-btn sx-btn--sm" style={{ marginTop: 8, width: '100%', justifyContent: 'center' }}>
              Configurar agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Screen_Integrations = Screen_Integrations;
