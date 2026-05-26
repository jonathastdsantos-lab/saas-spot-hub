import React from 'react';
import { SAAS, CATEGORIES } from '../../lib/mockData';
import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';

// Tela 3: Perfil individual do SaaS (Fluxia)
const Screen_Profile = () => {
  const p = SAAS[0]; // Fluxia
  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="descobrir" />

      {/* breadcrumb */}
      <div style={{ padding: '14px 80px 0', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        Descobrir / CRM &amp; Vendas / <span style={{ color: 'var(--text)' }}>{p.name}</span>
      </div>

      {/* HEADER */}
      <div style={{ padding: '20px 80px 28px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <LogoTile p={p} size={84} />
          <div style={{ paddingTop: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
              <h1 style={{ fontSize: 32, letterSpacing: '-0.02em', margin: 0, fontWeight: 600 }}>{p.name}</h1>
              <span className="sx-pill sx-pill--pos"><span className="dot" /> Verificado</span>
              <span className="sx-pill">{p.cat}</span>
            </div>
            <div style={{ fontSize: 15, color: 'var(--text-dim)', marginBottom: 12 }}>{p.tag}</div>
            <div style={{ display: 'flex', gap: 18, alignItems: 'center', fontSize: 12, color: 'var(--text-dim)' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <Stars value={p.stars} /> <strong style={{ color: 'var(--text)' }}>{p.stars}</strong> · {p.reviews.toLocaleString('pt-BR')} avaliações
              </span>
              <span style={{ height: 14, width: 1, background: 'var(--border)' }} />
              <span>🇧🇷 BR · PT/EN/ES</span>
              <span style={{ height: 14, width: 1, background: 'var(--border)' }} />
              <span className="sx-mono">{p.integrations} integrações</span>
              <span style={{ height: 14, width: 1, background: 'var(--border)' }} />
              <span className="sx-mono"><span style={{ color: 'var(--pos)' }}>●</span> Uptime {p.uptime}</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end', minWidth: 280 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            <button className="sx-btn sx-btn--primary sx-btn--lg">Testar grátis · 14 dias</button>
            <button className="sx-btn sx-btn--lg" style={{ padding: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 6.31a8 8 0 10-13.83 7.45L2 22l8.46-1.7A8 8 0 0017.6 6.31zM12 18.83a6.83 6.83 0 01-3.47-.95l-.25-.15-2.55.51.52-2.49-.16-.26A6.83 6.83 0 1112 18.83zm3.74-5.13c-.21-.1-1.21-.6-1.4-.67s-.32-.1-.46.11-.52.67-.64.81-.24.16-.45.05a5.62 5.62 0 01-1.65-1 6.13 6.13 0 01-1.14-1.42c-.12-.21 0-.31.09-.41s.21-.24.31-.36a1.39 1.39 0 00.21-.34.39.39 0 000-.36c-.05-.11-.46-1.12-.63-1.53s-.34-.34-.46-.34h-.39a.74.74 0 00-.54.25 2.27 2.27 0 00-.7 1.69 3.94 3.94 0 00.82 2.09 9.05 9.05 0 003.45 3.05c2.16.93 2.16.62 2.55.59a2.07 2.07 0 001.39-.97 1.71 1.71 0 00.12-.97c-.06-.09-.2-.14-.41-.24z"/></svg>
            </button>
            <button className="sx-btn sx-btn--lg" style={{ padding: '14px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1" /></svg>
            </button>
          </div>
          <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            A partir de <strong style={{ color: 'var(--text)' }}>{p.price}</strong> · sem cartão
          </div>
        </div>
      </div>

      {/* HERO MEDIA */}
      <div style={{ padding: '0 80px 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2.4fr 1fr', gap: 12, height: 380 }}>
          <div className="sx-img-ph" style={{ position: 'relative', overflow: 'hidden' }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${p.color[0]}30, transparent 50%), repeating-linear-gradient(135deg, rgba(255,255,255,0.025) 0 8px, transparent 8px 16px), var(--surface-2)`,
            }} />
            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <div style={{ width: 64, height: 64, borderRadius: 12, background: 'var(--surface)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', boxShadow: '0 4px 20px rgba(0,0,0,0.4)' }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--acc)"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11 }}>video_demo.mp4 · 2:14</div>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateRows: '1fr 1fr', gap: 12 }}>
            <div className="sx-img-ph">screenshot_pipeline.png</div>
            <div className="sx-img-ph">screenshot_inbox.png</div>
          </div>
        </div>
      </div>

      {/* AI summary */}
      <div style={{ padding: '0 80px 22px' }}>
        <div className="sx-card" style={{
          padding: 18, background: 'linear-gradient(180deg, var(--ai-soft), transparent 80%), var(--surface)',
          display: 'flex', gap: 14, alignItems: 'flex-start',
        }}>
          <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Icon name="sparkle" size={16} stroke="#fff" />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11, color: 'var(--ai)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: 6 }}>Resumo IA · baseado em 1.284 avaliações</div>
            <p style={{ fontSize: 13.5, lineHeight: 1.55, margin: 0, color: 'var(--text)' }}>
              O <strong>Fluxia</strong> se destaca como CRM <strong>especialmente forte para times pequenos no Brasil</strong> que precisam de WhatsApp nativo. Usuários elogiam a IA que prioriza leads (mencionada em 73% das reviews positivas) e a curva de aprendizado curta. Pontos fracos recorrentes: relatórios limitados em planos básicos e integração com ERPs locais ainda incipiente.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 12, flexWrap: 'wrap' }}>
              <span className="sx-pill sx-pill--pos">↑ WhatsApp nativo (mencionado em 89%)</span>
              <span className="sx-pill sx-pill--pos">↑ IA de qualificação</span>
              <span className="sx-pill" style={{ color: 'var(--neg)', borderColor: 'transparent', background: 'rgba(255,122,106,0.12)' }}>↓ Relatórios limitados</span>
              <span className="sx-pill" style={{ color: 'var(--neg)', borderColor: 'transparent', background: 'rgba(255,122,106,0.12)' }}>↓ Integrações com ERPs locais</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN GRID */}
      <div style={{ padding: '0 80px 60px', display: 'grid', gridTemplateColumns: '1fr 340px', gap: 24 }}>
        {/* LEFT: tabs */}
        <div>
          <div style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border)', marginBottom: 20 }}>
            {[['Visão geral', true], ['Recursos'], ['Planos'], ['Integrações'], ['Avaliações'], ['FAQ'], ['Updates']].map(([t, a]) => (
              <button key={t} style={{
                padding: '10px 14px', background: 'transparent', border: 0, cursor: 'pointer',
                fontSize: 13, color: a ? 'var(--text)' : 'var(--text-muted)', fontWeight: a ? 600 : 400,
                borderBottom: a ? '2px solid var(--acc)' : '2px solid transparent', marginBottom: -1,
              }}>{t}</button>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 600, margin: '8px 0 12px' }}>O que é o Fluxia?</h3>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-dim)', margin: '0 0 24px' }}>
            {p.desc} Fundado em 2022 por ex-funcionários da Pipedrive Brasil, o Fluxia já atende 8.400 empresas — de salões a startups B2B — com foco obsessivo em automação de funil pelo WhatsApp. Sua proposta: substituir CRM + WhatsApp Business API + bot de qualificação por um único produto.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 600, margin: '24px 0 12px' }}>Principais recursos</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              ['Pipeline visual drag-and-drop', 'Múltiplos funis, automações por etapa.'],
              ['IA de qualificação de leads', 'Pontuação automática 0–100, priorização.'],
              ['WhatsApp Business oficial', 'Multi-atendente, templates, disparo em massa.'],
              ['Inbox unificado', 'WhatsApp, Instagram, email e webchat.'],
              ['Automações no-code', 'Cadência, follow-up e tarefas.'],
              ['Relatórios em tempo real', 'Conversão por etapa, ROI por canal.'],
              ['API e Webhooks', 'Conector nativo Zapier, n8n e Make.'],
              ['Apps móveis', 'iOS e Android, offline-first.'],
            ].map(([title, sub]) => (
              <div key={title} className="sx-card" style={{ padding: 14, display: 'flex', gap: 10 }}>
                <div style={{ width: 24, height: 24, borderRadius: 6, background: 'var(--acc-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2.5"><path d="M5 12l5 5 9-11" /></svg>
                </div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 500 }}>{title}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>{sub}</div>
                </div>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 600, margin: '28px 0 12px' }}>Reviews recentes</h3>
          {[
            { n: 'Camila R.', r: 'Dona de salão · São Paulo', s: 5, t: 'Migrei do Excel + Pipedrive e foi a melhor decisão. A IA realmente sabe qual lead tem chance de fechar.', d: 'há 3 dias' },
            { n: 'Felipe M.', r: 'Head de Vendas · Startup B2B', s: 4, t: 'WhatsApp nativo é imbatível. Faltam mais opções de relatórios customizados, mas o suporte respondeu em 12 minutos.', d: 'há 1 semana' },
            { n: 'Renata C.', r: 'Agência de marketing', s: 5, t: 'Substituí 3 ferramentas por uma só. Economizo R$ 380/mês e ganhei integração nativa.', d: 'há 2 semanas' },
          ].map((r, i) => (
            <div key={i} className="sx-card" style={{ padding: 14, marginBottom: 8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div className="sx-avatar">{r.n.split(' ').map(x => x[0]).join('')}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{r.n}</div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{r.r}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Stars value={r.s} />
                  <span style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{r.d}</span>
                </div>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-dim)', margin: '10px 0 0', lineHeight: 1.5 }}>{r.t}</p>
            </div>
          ))}
        </div>

        {/* RIGHT: sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* SaaS Score */}
          <div className="sx-card" style={{ padding: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>SaaS Score™</div>
                <div style={{ fontSize: 28, fontFamily: 'var(--font-mono)', fontWeight: 600, lineHeight: 1.1, marginTop: 4 }}>
                  {p.score}<span style={{ fontSize: 14, color: 'var(--text-muted)' }}>/100</span>
                </div>
              </div>
              <ScoreGauge value={p.score} size={64} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ['Estabilidade', 96], ['Suporte', 92], ['Custo-benefício', 90],
                ['Integrações', 88], ['IA', 95], ['Segurança', 97],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ fontSize: 11, color: 'var(--text-dim)', width: 92 }}>{k}</span>
                  <div style={{ flex: 1, height: 4, background: 'var(--surface-3)', borderRadius: 2, overflow: 'hidden' }}>
                    <div style={{ width: `${v}%`, height: '100%', background: 'var(--acc)' }} />
                  </div>
                  <span className="sx-mono" style={{ fontSize: 11, width: 24, textAlign: 'right' }}>{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Alternatives */}
          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Alternativas próximas</div>
            {[SAAS[1], SAAS[5], SAAS[8]].map(alt => (
              <div key={alt.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                <LogoTile p={alt} size={28} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500 }}>{alt.name}</div>
                  <div style={{ fontSize: 10.5, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Score {alt.score}</div>
                </div>
                <button className="sx-btn sx-btn--sm sx-btn--ghost">Comparar</button>
              </div>
            ))}
            <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>
              Comparar Fluxia vs. 3 outros
            </button>
          </div>

          {/* Quick facts */}
          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Dados rápidos</div>
            {[
              ['Fundada em', '2022'],
              ['HQ', 'Florianópolis · BR'],
              ['Funcionários', '24–50'],
              ['Suporte', '24/7 PT-BR'],
              ['SLA', '99.9% (Pro+)'],
              ['LGPD', 'Conforme'],
              ['Trial', '14 dias sem cartão'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0', fontSize: 12 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                <span style={{ fontFamily: 'var(--font-mono)' }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Screen_Profile;
