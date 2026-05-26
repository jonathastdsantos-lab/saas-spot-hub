import React from 'react';
import { SAAS, CATEGORIES } from '../../lib/mockData';
import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';

// Tela 4: Comparador lado a lado
const Screen_Compare = () => {
  const items = [SAAS[0], SAAS[1], SAAS[6]]; // Fluxia, ZapCRM, Agentik
  const rows = [
    { sec: 'Preços', rows: [
      ['Plano inicial', ['R$ 49/mês', 'R$ 89/mês', 'R$ 199/mês']],
      ['Plano pro', ['R$ 129/mês', 'R$ 199/mês', 'R$ 449/mês']],
      ['Plano enterprise', ['Sob consulta', 'R$ 599/mês', 'Sob consulta']],
      ['Trial grátis', ['14 dias', '7 dias', '14 dias']],
      ['Sem cartão no trial', [true, false, true]],
    ]},
    { sec: 'Recursos', rows: [
      ['WhatsApp Business API', [true, true, false]],
      ['IA de qualificação', [true, false, true]],
      ['Multi-funil', [true, true, true]],
      ['Automações no-code', [true, true, true]],
      ['Inbox unificado', [true, true, false]],
      ['App mobile', [true, true, false]],
      ['Modo offline', [true, false, false]],
      ['Agentes IA customizáveis', [false, false, true]],
      ['RAG / Base de conhecimento', [false, false, true]],
    ]},
    { sec: 'Integrações & API', rows: [
      ['Integrações nativas', ['47', '32', '89']],
      ['Zapier', [true, true, true]],
      ['n8n', [true, true, true]],
      ['Make', [true, true, true]],
      ['Webhooks', [true, true, true]],
      ['API REST', [true, true, true]],
      ['SDK JS', [false, false, true]],
    ]},
    { sec: 'Suporte & SLA', rows: [
      ['Suporte 24/7', [true, true, false]],
      ['Idioma PT-BR', [true, true, false]],
      ['SLA uptime', ['99.98%', '99.92%', '99.97%']],
      ['Tempo médio resposta', ['12 min', '34 min', '2 h']],
      ['Onboarding incluso', [true, false, true]],
    ]},
  ];

  const Cell = ({ v, win, col }) => {
    const bg = win ? 'var(--acc-soft)' : 'transparent';
    if (v === true) return (
      <div style={{ background: bg, padding: '14px 16px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={win ? 'var(--acc)' : 'var(--pos)'} strokeWidth="2.5"><path d="M5 12l5 5 9-11" /></svg>
      </div>
    );
    if (v === false) return (
      <div style={{ padding: '14px 16px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M6 18L18 6" /></svg>
      </div>
    );
    return (
      <div style={{
        background: bg, padding: '14px 16px', textAlign: 'center', fontSize: 13,
        fontFamily: 'var(--font-mono)', fontWeight: win ? 600 : 400,
        color: win ? 'var(--acc)' : 'var(--text)',
      }}>{v}</div>
    );
  };

  // Compute winners (very rough — for visual emphasis)
  const winners = {
    'Plano inicial': 0,
    'Tempo médio resposta': 0,
    'SLA uptime': 0,
    'Integrações nativas': 2,
    'Agentes IA customizáveis': 2,
    'IA de qualificação': 0,
    'WhatsApp Business API': 0,
    'Modo offline': 0,
  };

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="descobrir" />

      <div style={{ padding: '24px 80px 16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 6 }}>
          <div>
            <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Comparador</div>
            <h1 style={{ fontSize: 30, fontWeight: 500, letterSpacing: '-0.02em', margin: '6px 0 0' }}>
              Fluxia <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>vs</span> ZapCRM <span style={{ color: 'var(--text-muted)', fontWeight: 300 }}>vs</span> Agentik
            </h1>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            <button className="sx-btn sx-btn--sm">
              <Icon name="sparkle" size={12} stroke="var(--ai)" />
              Resumo IA
            </button>
            <button className="sx-btn sx-btn--sm sx-btn--ghost">Exportar PDF</button>
            <button className="sx-btn sx-btn--sm sx-btn--ghost">Compartilhar</button>
          </div>
        </div>

        {/* AI verdict */}
        <div className="sx-card" style={{
          padding: 16, marginTop: 18,
          background: 'linear-gradient(90deg, var(--ai-soft), transparent 70%), var(--surface)',
          display: 'flex', gap: 14,
        }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="sparkle" size={13} stroke="#fff" />
          </div>
          <div style={{ fontSize: 13, lineHeight: 1.55 }}>
            <strong>Veredito da IA:</strong> Para times <strong>focados em vendas via WhatsApp no Brasil</strong>, o <span style={{ color: 'var(--acc)' }}>Fluxia</span> é a melhor escolha — ganha em 9 de 14 critérios e tem o melhor custo-benefício. Escolha <span style={{ color: 'var(--acc)' }}>ZapCRM</span> se WhatsApp é literalmente o único canal. Escolha <span style={{ color: 'var(--acc)' }}>Agentik</span> se a operação depende de agentes IA customizáveis e você tem time técnico.
          </div>
          <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ flexShrink: 0 }}>Detalhar</button>
        </div>
      </div>

      {/* Sticky header */}
      <div style={{ padding: '16px 80px 28px' }}>
        <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '220px repeat(3, 1fr)', borderBottom: '1px solid var(--border)' }}>
            <div style={{ padding: 18, borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end' }}>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
                Adicionar
              </button>
            </div>
            {items.map((p, i) => (
              <div key={p.id} style={{
                padding: 18, textAlign: 'center', borderRight: i < 2 ? '1px solid var(--border)' : 0,
                background: i === 0 ? 'var(--acc-soft)' : 'transparent',
                position: 'relative',
              }}>
                {i === 0 && (
                  <div className="sx-pill sx-pill--acc" style={{ position: 'absolute', top: 12, right: 12 }}>
                    <Icon name="sparkle" size={10} stroke="var(--acc)" /> Recomendado
                  </div>
                )}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  <LogoTile p={p} size={52} />
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 600 }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{p.tag}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11 }}>
                    <Stars value={p.stars} /> {p.stars} · {p.reviews}
                  </div>
                  <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>
                    Score <strong style={{ color: 'var(--acc)' }}>{p.score}</strong> · {p.price}
                  </div>
                  <button className="sx-btn sx-btn--primary sx-btn--sm" style={{ width: '100%', justifyContent: 'center', marginTop: 4 }}>
                    Testar grátis
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sections */}
          {rows.map((sec, si) => (
            <div key={sec.sec}>
              <div style={{
                padding: '12px 20px', background: 'var(--bg-2)',
                fontSize: 11, color: 'var(--text-dim)', textTransform: 'uppercase',
                letterSpacing: '0.08em', fontFamily: 'var(--font-mono)',
                borderTop: si > 0 ? '1px solid var(--border)' : 0,
                borderBottom: '1px solid var(--border)',
              }}>{sec.sec}</div>
              {sec.rows.map(([label, values], ri) => (
                <div key={label} style={{
                  display: 'grid', gridTemplateColumns: '220px repeat(3, 1fr)',
                  borderBottom: ri < sec.rows.length - 1 ? '1px solid var(--border)' : 0,
                }}>
                  <div style={{
                    padding: '14px 20px', fontSize: 12.5, color: 'var(--text-dim)',
                    borderRight: '1px solid var(--border)', display: 'flex', alignItems: 'center',
                  }}>{label}</div>
                  {values.map((v, ci) => (
                    <div key={ci} style={{ borderRight: ci < 2 ? '1px solid var(--border)' : 0 }}>
                      <Cell v={v} col={ci} win={winners[label] === ci} />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}

          {/* Final CTA row */}
          <div style={{ display: 'grid', gridTemplateColumns: '220px repeat(3, 1fr)', background: 'var(--bg-2)', borderTop: '1px solid var(--border)' }}>
            <div style={{ padding: 16, borderRight: '1px solid var(--border)' }} />
            {items.map((p, i) => (
              <div key={p.id} style={{ padding: 16, borderRight: i < 2 ? '1px solid var(--border)' : 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                <button className="sx-btn sx-btn--primary" style={{ justifyContent: 'center' }}>Testar grátis</button>
                <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ justifyContent: 'center' }}>Ver perfil completo →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Screen_Compare;
