import React from 'react';
import { SAAS, CATEGORIES } from '../../lib/mockData';
import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from '../SharedUI';

// Tela 8: Página de categoria / Ranking
const Screen_Category = () => {
  const items = SAAS.filter(s => ['CRM', 'WhatsApp', 'IA'].includes(s.cat) || s.tags.includes('CRM') || s.tags.includes('WhatsApp')).slice(0, 10);
  // Make sure we have 10
  while (items.length < 10) items.push(...SAAS.slice(0, 10 - items.length));

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="rankings" />

      {/* breadcrumb + title */}
      <div style={{ padding: '24px 80px 0' }}>
        <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
          Rankings / <span style={{ color: 'var(--text)' }}>Melhores CRM com WhatsApp para salões</span>
        </div>
        <h1 style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.025em', margin: '14px 0 4px', maxWidth: 720, lineHeight: 1.1 }}>
          Melhores CRM com WhatsApp para <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--acc)', fontWeight: 400 }}>salões</span>
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 8, fontSize: 12.5, color: 'var(--text-dim)' }}>
          <span>Atualizado em <strong style={{ color: 'var(--text)' }}>22 de novembro de 2026</strong></span>
          <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
          <span>Avaliado em <strong style={{ color: 'var(--text)' }}>14.247</strong> reviews verificadas</span>
          <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
          <span>Editora: <strong style={{ color: 'var(--text)' }}>Stackly Insights</strong></span>
        </div>
      </div>

      <div style={{ padding: '24px 80px 60px', display: 'grid', gridTemplateColumns: '240px 1fr', gap: 28 }}>
        {/* SIDEBAR filters */}
        <aside>
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Filtros</div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Faixa de preço</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {[
                ['Grátis', 12],
                ['Até R$ 50', 28],
                ['R$ 50 – R$ 150', 41],
                ['R$ 150 – R$ 500', 23],
                ['Acima de R$ 500', 8],
              ].map(([t, n], i) => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-dim)', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={i === 1 || i === 2} style={{ accentColor: 'var(--acc)' }} />
                  <span style={{ flex: 1 }}>{t}</span>
                  <span style={{ color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: 10.5 }}>{n}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Recursos</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {['WhatsApp nativo', 'IA de qualificação', 'App mobile', 'API aberta', 'Multi-funil', 'Automações no-code'].map((t, i) => (
                <label key={t} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'var(--text-dim)', cursor: 'pointer' }}>
                  <input type="checkbox" defaultChecked={i < 2} style={{ accentColor: 'var(--acc)' }} />
                  <span>{t}</span>
                </label>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>País / Idioma</div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {[['🇧🇷 BR', true], ['🇺🇸 EN'], ['🇪🇸 ES'], ['🇲🇽 MX'], ['🇦🇷 AR']].map(([t, a]) => (
                <span key={t} className="sx-chip" style={{
                  background: a ? 'var(--acc)' : 'var(--surface-2)',
                  color: a ? 'var(--acc-ink)' : 'var(--text-dim)',
                  cursor: 'pointer',
                  borderColor: a ? 'transparent' : 'var(--border)',
                }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>SaaS Score™ mínimo</div>
            <div style={{ position: 'relative', height: 6, background: 'var(--surface-3)', borderRadius: 3 }}>
              <div style={{ position: 'absolute', left: 0, width: '75%', height: '100%', background: 'var(--acc)', borderRadius: 3 }} />
              <div style={{ position: 'absolute', left: '75%', top: '50%', transform: 'translate(-50%, -50%)', width: 14, height: 14, borderRadius: '50%', background: 'var(--acc)', border: '3px solid var(--bg)' }} />
            </div>
            <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 6 }}>0 → <strong style={{ color: 'var(--acc)' }}>75</strong> → 100</div>
          </div>

          <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center' }}>Limpar filtros</button>
        </aside>

        {/* RESULTS */}
        <div>
          {/* IA summary */}
          <div className="sx-card" style={{
            padding: 16, marginBottom: 18,
            background: 'linear-gradient(90deg, var(--ai-soft), transparent 70%), var(--surface)',
            display: 'flex', gap: 14,
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="sparkle" size={15} stroke="#fff" />
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55 }}>
              <strong>Resumo IA:</strong> Para salões e barbearias com até 5 colaboradores, a recomendação é começar com o <span style={{ color: 'var(--acc)' }}>Fluxia</span> (R$ 49/mês) ou o <span style={{ color: 'var(--acc)' }}>SalonPro</span> (R$ 79/mês) — ambos têm WhatsApp nativo e agenda visual. <span style={{ color: 'var(--acc)' }}>ZapCRM</span> é melhor se WhatsApp é o único canal. <a style={{ color: 'var(--ai)' }}>Ver análise completa →</a>
            </div>
          </div>

          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
            <div style={{ fontSize: 12.5, color: 'var(--text-dim)' }}>
              <strong style={{ color: 'var(--text)' }}>{items.length}</strong> ferramentas · ordenadas por <strong style={{ color: 'var(--text)' }}>SaaS Score™</strong>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="sx-btn sx-btn--sm">Score</button>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Preço</button>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Mais usados</button>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Avaliações</button>
            </div>
          </div>

          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {items.map((p, i) => {
              const isTop3 = i < 3;
              const medals = ['#FFD166', '#C9CDD4', '#D89478'];
              return (
                <div key={p.id + i} className="sx-card" style={{ padding: 16, display: 'grid', gridTemplateColumns: '48px 56px 1fr auto 120px', gap: 16, alignItems: 'center' }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: isTop3 ? medals[i] + '20' : 'transparent',
                    border: '1px solid ' + (isTop3 ? medals[i] : 'var(--border)'),
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontSize: 15, fontWeight: 600,
                    color: isTop3 ? medals[i] : 'var(--text-muted)',
                  }}>{i + 1}</div>
                  <LogoTile p={p} size={48} />
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 15, fontWeight: 600 }}>{p.name}</span>
                      {i === 0 && <span className="sx-pill sx-pill--acc">Escolha da editora</span>}
                      {i === 2 && <span className="sx-pill sx-pill--ai">Melhor custo-benefício</span>}
                      <span className="sx-pill">{p.cat}</span>
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-dim)', marginTop: 2 }}>{p.tag}</div>
                    <div style={{ display: 'flex', gap: 14, marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Stars value={p.stars} size={10} /> {p.stars} · {p.reviews.toLocaleString('pt-BR')}
                      </span>
                      <span className="sx-mono">{p.integrations} integrações</span>
                      <span className="sx-mono"><span style={{ color: 'var(--pos)' }}>●</span> {p.uptime}</span>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, justifyContent: 'flex-end' }}>
                      <ScoreGauge value={p.score} size={36} />
                      <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>{p.price}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <button className="sx-btn sx-btn--sm sx-btn--primary" style={{ justifyContent: 'center' }}>Testar grátis</button>
                    <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ justifyContent: 'center' }}>Comparar</button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SEO-like article preview */}
          <div className="sx-card" style={{ padding: 22, marginTop: 22 }}>
            <h3 style={{ fontSize: 18, fontWeight: 600, margin: '0 0 8px' }}>Como escolhemos os melhores CRM para salões</h3>
            <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6, margin: '0 0 12px' }}>
              Analisamos 47 plataformas que atendem o segmento de beleza no Brasil. Nosso ranking considera 6 dimensões: SaaS Score™ (peso 30%), avaliações verificadas (25%), preço relativo ao porte do negócio (20%), recursos específicos para salões (15%), suporte em PT-BR (5%) e velocidade de implementação (5%).
            </p>
            <p style={{ fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6, margin: 0 }}>
              Em 2026, o segmento foi dominado por ferramentas com WhatsApp nativo — 8 das 10 escolhidas integram o canal sem custo adicional. A IA também passou a ser fator de desempate: 6 das 10 oferecem qualificação automática de leads.
            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 14, flexWrap: 'wrap' }}>
              <span className="sx-chip">salões</span>
              <span className="sx-chip">CRM</span>
              <span className="sx-chip">WhatsApp</span>
              <span className="sx-chip">PME</span>
              <span className="sx-chip">brasil</span>
              <span className="sx-chip">2026</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Screen_Category;
