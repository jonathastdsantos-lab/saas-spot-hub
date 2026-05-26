// Tela 15: SEO programático — "Alternativas ao Notion" (estrutura indexável)
const Screen_SEO = () => {
  const competitor = { name: 'Notion', tag: 'Workspace tudo-em-um', color: ['#000000', '#FFFFFF'], letter: 'N' };
  const alternatives = [
    { p: SAAS[12], why: 'Mais leve, focado em projetos. Substitui Notion + Asana.', diff: { Preço: '−68%', IA: 'melhor', Curva: 'menor' } },
    { p: SAAS[7],  why: 'Cria apps internos com prompts — vai além de wiki.', diff: { Preço: '−40%', IA: 'similar', Apps: 'sim' } },
    { p: SAAS[9],  why: 'Analytics conversacional. Notion não tem nada parecido.', diff: { BI: 'sim', Wiki: 'parcial', Custo: '−15%' } },
    { p: SAAS[0],  why: 'Foco em vendas com IA. Para quem usa Notion como CRM.', diff: { CRM: 'nativo', WhatsApp: 'sim', Preço: '−65%' } },
    { p: SAAS[8],  why: 'Helpdesk omnichannel. Para times que usam Notion para suporte.', diff: { Helpdesk: 'sim', SLA: '99.9%', Preço: '+10%' } },
  ];

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="descobrir" />

      {/* breadcrumb */}
      <div style={{ padding: '16px 80px 0', fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
        Stackly / Alternativas / <span style={{ color: 'var(--text)' }}>Notion</span>
      </div>

      {/* Hero — head-to-head */}
      <div style={{ padding: '20px 80px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10, fontSize: 11.5, color: 'var(--text-muted)' }}>
          <span className="sx-mono" style={{ textTransform: 'uppercase', letterSpacing: '0.08em' }}>SEO Hub</span>
          <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
          <span>Atualizado <strong style={{ color: 'var(--text)' }}>22 nov 2026</strong></span>
          <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
          <span><strong style={{ color: 'var(--text)' }}>47.392</strong> visitas/mês</span>
          <span style={{ width: 1, height: 12, background: 'var(--border)' }} />
          <span>Editora <strong style={{ color: 'var(--text)' }}>Stackly Insights</strong></span>
        </div>
        <h1 style={{ fontSize: 44, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05, maxWidth: 880 }}>
          <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>As melhores</span> alternativas <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>ao</span> Notion <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--text-muted)', fontWeight: 400 }}>em 2026</span>
        </h1>
        <p style={{ fontSize: 15, color: 'var(--text-dim)', margin: '14px 0 0', maxWidth: 720, lineHeight: 1.55 }}>
          Comparamos 23 ferramentas que podem substituir o Notion — por preço, IA, curva de aprendizado e foco. Aqui vão as 5 melhores escolhas para times brasileiros em 2026.
        </p>

        {/* head-to-head visual */}
        <div className="sx-card" style={{ padding: 20, marginTop: 22, display: 'grid', gridTemplateColumns: '1fr auto 1fr', gap: 22, alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div className="sx-logo-tile" style={{ width: 56, height: 56, background: competitor.color[0], color: competitor.color[1], fontSize: 24 }}>{competitor.letter}</div>
            <div>
              <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>O incumbente</div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}>Notion</div>
              <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>{competitor.tag} · US$ 10/usuário/mês</div>
            </div>
          </div>
          <div style={{ width: 1, height: 60, background: 'var(--border)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'flex-end' }}>
            <div style={{ textAlign: 'right' }}>
              <div className="sx-mono" style={{ fontSize: 10, color: 'var(--acc)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>5 alternativas brasileiras</div>
              <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.015em' }}>Stackly recomenda</div>
              <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>A partir de R$ 29/mês · em PT-BR</div>
            </div>
            <div style={{ display: 'flex' }}>
              {alternatives.slice(0, 4).map((a, i) => (
                <div key={a.p.id} style={{ marginLeft: i === 0 ? 0 : -10 }}>
                  <LogoTile p={a.p} size={44} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick navigation / TOC */}
      <div style={{ padding: '0 80px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32 }}>
        <div>
          {/* AI summary */}
          <div className="sx-card" style={{ padding: 18, background: 'linear-gradient(135deg, var(--ai-soft), transparent 70%), var(--surface)', display: 'flex', gap: 14, marginBottom: 28 }}>
            <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name="sparkle" size={14} stroke="#fff" />
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55 }}>
              <strong>TL;DR da IA:</strong> Se você quer <strong>economizar e ter IA superior</strong>, vá de <span style={{ color: 'var(--acc)' }}>Planely</span> (R$ 29). Se precisa criar apps internos sem código, vá de <span style={{ color: 'var(--acc)' }}>Forge</span>. Pra dados, <span style={{ color: 'var(--acc)' }}>Pulse</span>. <span style={{ color: 'var(--text-muted)' }}>Notion ainda vence se você usa principalmente como wiki colaborativa pública.</span>
            </div>
          </div>

          {/* Top picks list */}
          <h2 style={{ fontSize: 24, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 16px' }}>
            Top 5 alternativas, lado a lado
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {alternatives.map((a, i) => (
              <article key={a.p.id} className="sx-card" style={{ padding: 18 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ position: 'relative' }}>
                    <LogoTile p={a.p} size={56} />
                    <div style={{
                      position: 'absolute', bottom: -6, right: -6,
                      width: 24, height: 24, borderRadius: 6,
                      background: i === 0 ? 'var(--acc)' : 'var(--surface-3)',
                      color: i === 0 ? 'var(--acc-ink)' : 'var(--text)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600,
                      border: '2px solid var(--surface)',
                    }}>{i + 1}</div>
                  </div>
                  <div>
                    <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
                      {a.p.name}
                      {i === 0 && <span className="sx-pill sx-pill--acc">Escolha #1</span>}
                      {i === 1 && <span className="sx-pill sx-pill--ai">Inovador</span>}
                    </h3>
                    <div style={{ fontSize: 12.5, color: 'var(--text-dim)', marginTop: 4, lineHeight: 1.5 }}>{a.why}</div>
                    <div style={{ display: 'flex', gap: 8, marginTop: 10 }}>
                      {Object.entries(a.diff).map(([k, v]) => (
                        <span key={k} className="sx-chip" style={{ fontSize: 10.5 }}>
                          <strong style={{ color: 'var(--text)' }}>{k}</strong>
                          <span style={{ color: v.startsWith('−') ? 'var(--pos)' : v === 'sim' || v === 'nativo' || v === 'melhor' ? 'var(--acc)' : 'var(--text-dim)' }}>{v}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: 6 }}>
                    <div className="sx-mono" style={{ fontSize: 13, fontWeight: 600 }}>{a.p.price}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>Score <strong style={{ color: 'var(--acc)' }}>{a.p.score}</strong> · <Stars value={a.p.stars} size={9} /></div>
                    <button className="sx-btn sx-btn--sm sx-btn--primary" style={{ justifyContent: 'center' }}>Testar grátis</button>
                    <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ justifyContent: 'center', fontSize: 11 }}>vs Notion →</button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* SEO body */}
          <div style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: 22, fontWeight: 500, letterSpacing: '-0.02em', margin: '0 0 12px' }}>Como escolhemos as melhores alternativas ao Notion</h2>
            <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.65, margin: '0 0 14px' }}>
              Analisamos 23 ferramentas que se posicionam como substitutas do Notion no mercado brasileiro. Filtramos pelas que têm SaaS Score™ acima de 80, suporte em PT-BR e mais de 100 reviews verificadas. Para o ranking final, ponderamos: IA (peso 25%), preço relativo (20%), curva de aprendizado (15%), foco vertical (15%), ecossistema de integrações (15%) e suporte (10%).
            </p>
            <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.65, margin: '0 0 14px' }}>
              Nossa <strong style={{ color: 'var(--text)' }}>escolha #1</strong>, <strong style={{ color: 'var(--acc)' }}>Planely</strong>, é uma alternativa mais focada em projetos e produtividade. A 27% do preço do Notion Plus, oferece IA de priorização e roadmap visual — recursos pelos quais usuários pagam separadamente no Notion via add-ons.
            </p>
            <h3 style={{ fontSize: 16, fontWeight: 600, margin: '22px 0 10px' }}>Quando o Notion ainda vence</h3>
            <ul style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
              <li>Se sua principal necessidade é uma <strong style={{ color: 'var(--text)' }}>wiki colaborativa</strong> e a equipe já está acostumada com o produto.</li>
              <li>Para times distribuídos internacionalmente que precisam de integração nativa com Slack, GitHub e Linear.</li>
              <li>Quando o orçamento permite o ticket por usuário (US$ 10–18/mês) e ROI vem da padronização de processos.</li>
            </ul>
          </div>

          {/* Related search queries (for SEO) */}
          <div style={{ marginTop: 36, padding: 18, background: 'var(--surface-2)', borderRadius: 12, border: '1px solid var(--border)' }}>
            <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 12 }}>Buscas relacionadas</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {[
                'Notion gratuito brasileiro', 'Notion vs ClickUp', 'Alternativa ao Notion com IA',
                'Notion para empresas', 'Notion offline', 'Notion vs Obsidian',
                'Wiki interna self-hosted', 'Notion + WhatsApp', 'Alternativa Notion grátis',
                'Notion alternativa nacional', 'Notion alternativa pt-br', 'Notion vs Coda',
              ].map(t => (
                <a key={t} className="sx-chip" style={{ cursor: 'pointer', textDecoration: 'none' }}>{t}</a>
              ))}
            </div>
          </div>
        </div>

        {/* Right rail — sticky TOC */}
        <aside>
          <div style={{ position: 'sticky', top: 20 }}>
            <div className="sx-card" style={{ padding: 16, marginBottom: 14 }}>
              <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Neste artigo</div>
              {[
                ['TL;DR', false],
                ['Top 5 alternativas', true],
                ['Como escolhemos', false],
                ['Quando o Notion vence', false],
                ['Buscas relacionadas', false],
              ].map(([t, a], i) => (
                <div key={t} style={{ padding: '6px 0', fontSize: 12, color: a ? 'var(--text)' : 'var(--text-dim)', borderLeft: '2px solid ' + (a ? 'var(--acc)' : 'transparent'), paddingLeft: 10, fontWeight: a ? 600 : 400, cursor: 'pointer' }}>
                  {t}
                </div>
              ))}
            </div>

            <div className="sx-card" style={{ padding: 16, marginBottom: 14, background: 'linear-gradient(180deg, var(--acc-soft), transparent 70%), var(--surface)' }}>
              <div style={{ fontSize: 11, color: 'var(--acc)', fontWeight: 600, fontFamily: 'var(--font-mono)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>Sua melhor escolha</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <LogoTile p={SAAS[12]} size={36} />
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>Planely</div>
                  <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>R$ 29/mês · −68%</div>
                </div>
              </div>
              <button className="sx-btn sx-btn--primary" style={{ width: '100%', justifyContent: 'center' }}>Testar grátis · 14 dias</button>
              <div style={{ fontSize: 10.5, color: 'var(--text-muted)', textAlign: 'center', marginTop: 6 }}>Sem cartão · cancela quando quiser</div>
            </div>

            <div className="sx-card" style={{ padding: 16 }}>
              <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Outras alternativas a</div>
              {[
                ['HubSpot', 487], ['Slack', 342], ['Trello', 298],
                ['Asana', 234], ['Pipedrive', 198], ['ClickUp', 156],
              ].map(([n, c], i) => (
                <a key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: i < 5 ? '1px solid var(--border)' : 0, fontSize: 12.5, color: 'var(--text)', cursor: 'pointer' }}>
                  <span>Alternativas a <strong>{n}</strong></span>
                  <span className="sx-mono" style={{ color: 'var(--text-muted)', fontSize: 10.5 }}>{c}k buscas/mês</span>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div style={{ height: 60 }} />
    </div>
  );
};

window.Screen_SEO = Screen_SEO;
