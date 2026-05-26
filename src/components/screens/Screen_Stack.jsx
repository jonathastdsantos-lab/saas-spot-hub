import React from 'react';
import { SAAS, CATEGORIES } from '../../lib/mockData';
import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';

// Tela 5: Gerador de Stack — quiz à esquerda + resultado à direita
const Screen_Stack = () => {
  const stack = [
    { p: SAAS[0], role: 'CRM & Vendas' },
    { p: SAAS[14], role: 'Atendimento WhatsApp' },
    { p: SAAS[2], role: 'ERP & Financeiro' },
    { p: SAAS[4], role: 'Marketing' },
    { p: SAAS[6], role: 'Agentes IA' },
    { p: SAAS[5], role: 'Pagamentos' },
  ];

  return (
    <div className="sx-screen">
      <TopNav active="stacks" />

      <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', height: 'calc(100% - 53px)' }}>
        {/* LEFT: quiz */}
        <div style={{ padding: '28px 28px 20px', borderRight: '1px solid var(--border)', background: 'var(--bg-2)', overflow: 'auto' }}>
          <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Gerador de Stack · etapa 4 de 6
          </div>
          <h1 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', margin: '8px 0 6px' }}>
            Conte sobre seu negócio.
          </h1>
          <p style={{ fontSize: 13, color: 'var(--text-dim)', margin: '0 0 22px' }}>
            Vamos montar uma stack que cabe no seu bolso e na sua operação.
          </p>

          {/* Progress */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 22 }}>
            {[1, 2, 3, 4, 5, 6].map(s => (
              <div key={s} style={{
                flex: 1, height: 3, borderRadius: 2,
                background: s <= 4 ? 'var(--acc)' : 'var(--surface-3)',
              }} />
            ))}
          </div>

          {/* Q1 nicho */}
          <div style={{ marginBottom: 20 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>1 · Qual o seu segmento?</label>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 8 }}>
              {['Clínica/Estética', 'Salão', 'E-commerce', 'Imobiliária', 'Agência', 'Indústria', 'SaaS B2B', 'Outro'].map((s, i) => (
                <button key={s} className="sx-chip" style={{
                  cursor: 'pointer', fontFamily: 'var(--font-display)',
                  background: i === 0 ? 'var(--acc)' : 'var(--surface-2)',
                  color: i === 0 ? 'var(--acc-ink)' : 'var(--text-dim)',
                  borderColor: i === 0 ? 'transparent' : 'var(--border)',
                  fontWeight: i === 0 ? 600 : 400,
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Q2 tamanho */}
          <div style={{ marginBottom: 20 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>2 · Tamanho do time</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6, marginTop: 8 }}>
              {['1–3', '4–10', '11–50', '50+'].map((s, i) => (
                <button key={s} className="sx-chip" style={{
                  justifyContent: 'center', padding: '10px 0', cursor: 'pointer',
                  fontFamily: 'var(--font-display)',
                  background: i === 1 ? 'var(--acc)' : 'var(--surface-2)',
                  color: i === 1 ? 'var(--acc-ink)' : 'var(--text-dim)',
                  borderColor: i === 1 ? 'transparent' : 'var(--border)',
                  fontWeight: i === 1 ? 600 : 400,
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Q3 faturamento */}
          <div style={{ marginBottom: 20 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>3 · Faturamento mensal</label>
            <div style={{ marginTop: 12 }}>
              <div style={{ position: 'relative', height: 6, background: 'var(--surface-3)', borderRadius: 3 }}>
                <div style={{ position: 'absolute', left: 0, width: '32%', height: '100%', background: 'var(--acc)', borderRadius: 3 }} />
                <div style={{ position: 'absolute', left: '32%', top: '50%', transform: 'translate(-50%, -50%)', width: 16, height: 16, borderRadius: '50%', background: 'var(--acc)', border: '3px solid var(--bg-2)' }} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                <span>R$ 0</span>
                <span style={{ color: 'var(--acc)', fontWeight: 600, fontSize: 13 }}>R$ 80k/mês</span>
                <span>R$ 1M+</span>
              </div>
            </div>
          </div>

          {/* Q4 objetivos (active) */}
          <div style={{ marginBottom: 20, padding: 14, background: 'var(--surface)', border: '1px solid var(--acc)', borderRadius: 10 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--acc)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>4 · Quais os objetivos para os próximos 6 meses?</label>
            <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '4px 0 12px' }}>Selecione até 3</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ['Captar mais leads via WhatsApp', true],
                ['Automatizar atendimento', true],
                ['Reduzir churn', false],
                ['Aumentar ticket médio', true],
                ['Lançar novo produto', false],
                ['Internacionalizar', false],
                ['Reduzir custos operacionais', false],
              ].map(([o, sel], i) => (
                <button key={o} style={{
                  display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px',
                  borderRadius: 8, background: sel ? 'var(--acc-soft)' : 'transparent',
                  border: '1px solid ' + (sel ? 'transparent' : 'var(--border)'),
                  color: 'var(--text)', cursor: 'pointer', textAlign: 'left',
                }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                    background: sel ? 'var(--acc)' : 'transparent',
                    border: sel ? 0 : '1.5px solid var(--text-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {sel && (
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--acc-ink)" strokeWidth="3.5"><path d="M5 12l5 5 9-11" /></svg>
                    )}
                  </span>
                  <span style={{ fontSize: 12.5 }}>{o}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Q5 orçamento */}
          <div style={{ marginBottom: 20, opacity: 0.4 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>5 · Orçamento mensal para SaaS</label>
          </div>
          <div style={{ marginBottom: 20, opacity: 0.4 }}>
            <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>6 · Maturidade técnica do time</label>
          </div>

          {/* Footer */}
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <button className="sx-btn">Voltar</button>
            <button className="sx-btn sx-btn--primary" style={{ flex: 1, justifyContent: 'center' }}>
              Próxima etapa
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>

        {/* RIGHT: live result */}
        <div style={{ padding: '28px 36px', overflow: 'auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Icon name="sparkle" size={14} stroke="var(--ai)" />
                <span className="sx-mono" style={{ fontSize: 11, color: 'var(--ai)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Stack gerada · atualiza em tempo real</span>
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', margin: '6px 0 0' }}>
                Stack para clínica de estética <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>· São Paulo · 4 pessoas</span>
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Salvar</button>
              <button className="sx-btn sx-btn--sm">Compartilhar</button>
            </div>
          </div>

          {/* Cost summary */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, margin: '20px 0' }}>
            {[
              ['Mensal', 'R$ 564', 'pos', '↓ 27% vs. média'],
              ['Anual', 'R$ 6.768', 'dim', 'pago mensal'],
              ['Ferramentas', '6', 'dim', '5 BR · 1 internacional'],
              ['Integrações', '14', 'pos', 'fluxos prontos'],
            ].map(([k, v, t, s]) => (
              <div key={k} className="sx-card" style={{ padding: 14 }}>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{k}</div>
                <div className="sx-mono" style={{ fontSize: 22, fontWeight: 600, marginTop: 4, color: t === 'pos' ? 'var(--text)' : 'var(--text)' }}>{v}</div>
                <div style={{ fontSize: 10.5, color: t === 'pos' ? 'var(--pos)' : 'var(--text-muted)', marginTop: 2 }}>{s}</div>
              </div>
            ))}
          </div>

          {/* Stack diagram */}
          <h3 style={{ fontSize: 13, fontWeight: 600, margin: '20px 0 12px', color: 'var(--text-dim)' }}>Ferramentas recomendadas</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {stack.map((s, i) => (
              <div key={s.p.id} className="sx-card" style={{ padding: 14, position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <LogoTile p={s.p} size={36} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{s.role}</div>
                    <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{s.p.name}</div>
                    <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 2 }}>{s.p.price}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                  <span className="sx-pill sx-pill--acc"><Icon name="sparkle" size={9} stroke="var(--acc)" /> {88 + (i*2)%10}% match</span>
                  <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ padding: '4px 8px' }}>Trocar</button>
                </div>
              </div>
            ))}
          </div>

          {/* Integrations visualization */}
          <h3 style={{ fontSize: 13, fontWeight: 600, margin: '24px 0 12px', color: 'var(--text-dim)' }}>Como tudo se conecta</h3>
          <div className="sx-card" style={{ padding: 22, position: 'relative', minHeight: 220 }}>
            <svg width="100%" height="180" style={{ display: 'block' }}>
              {[
                [120, 50, 360, 50], [360, 50, 600, 50],
                [120, 50, 120, 140], [360, 50, 360, 140], [600, 50, 600, 140],
                [120, 140, 360, 140], [360, 140, 600, 140],
              ].map(([x1, y1, x2, y2], i) => (
                <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--border-strong)" strokeWidth="1" strokeDasharray="4 4" />
              ))}
            </svg>
            <div style={{ position: 'absolute', inset: 22, pointerEvents: 'none' }}>
              {stack.slice(0, 6).map((s, i) => {
                const cols = 3, gap = 240;
                const x = 80 + (i % cols) * gap;
                const y = i < 3 ? 30 : 120;
                return (
                  <div key={s.p.id} style={{
                    position: 'absolute', left: x, top: y,
                    display: 'flex', alignItems: 'center', gap: 8,
                    padding: '6px 12px', background: 'var(--surface-2)',
                    borderRadius: 8, border: '1px solid var(--border)',
                    transform: 'translate(-50%, -50%)',
                  }}>
                    <LogoTile p={s.p} size={22} />
                    <span style={{ fontSize: 11, fontWeight: 500 }}>{s.p.name}</span>
                  </div>
                );
              })}
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--border)' }}>
              <span className="sx-chip"><Icon name="sparkle" size={10} stroke="var(--ai)" /> 14 automações prontas</span>
              <span className="sx-chip">3 templates n8n</span>
              <span className="sx-chip">7 fluxos Zapier</span>
              <span className="sx-chip">API unificada</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 20, alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 12, color: 'var(--text-dim)' }}>
              <strong style={{ color: 'var(--text)' }}>89.412</strong> negócios já implementaram stacks parecidas
            </div>
            <button className="sx-btn sx-btn--primary sx-btn--lg">
              Contratar stack completa · R$ 564/mês
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Screen_Stack;
