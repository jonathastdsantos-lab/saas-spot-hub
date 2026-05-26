import { TopNav } from '@/components/ui/TopNav';
import { Icon } from '@/components/ui/Icon';
import { LogoTile } from '@/components/ui/LogoTile';
import { SAAS } from '@/lib/data/mock';

export default function ConsultorPage() {
  return (
    <div className="sx-screen">
      <TopNav active="consultor" />
      <div style={{ display: 'grid', gridTemplateColumns: '260px 1fr 320px', height: 'calc(100% - 53px)' }}>
        {/* SIDEBAR — conversas */}
        <div style={{ borderRight: '1px solid var(--border)', padding: 16, background: 'var(--bg-2)', display: 'flex', flexDirection: 'column' }}>
          <button className="sx-btn sx-btn--primary" style={{ justifyContent: 'center', marginBottom: 14 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
            Nova conversa
          </button>
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 8, padding: '0 6px' }}>Hoje</div>
          {[
            { t: 'Stack para clínica de estética', sub: 'CRM + WhatsApp + Agenda', active: true },
            { t: 'Alternativas ao HubSpot', sub: '6 opções comparadas' },
            { t: 'ERP barato para SMB', sub: 'Caixa.AI vs Conta Azul' },
          ].map((c, i) => (
            <button key={i} style={{
              textAlign: 'left', padding: '10px 12px', borderRadius: 8, marginBottom: 2,
              background: c.active ? 'var(--surface-2)' : 'transparent', border: 0,
              color: 'var(--text)', cursor: 'pointer',
            }}>
              <div style={{ fontSize: 12.5, fontWeight: 500 }}>{c.t}</div>
              <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 1, fontFamily: 'var(--font-mono)' }}>{c.sub}</div>
            </button>
          ))}
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '14px 0 8px', padding: '0 6px' }}>Esta semana</div>
          {[
            { t: 'WhatsApp para imobiliária' },
            { t: 'Reduzir custo da stack' },
            { t: 'Migrar do Trello' },
            { t: 'Analytics no-SQL' },
          ].map((c, i) => (
            <button key={i} style={{
              textAlign: 'left', padding: '8px 12px', borderRadius: 8, background: 'transparent',
              border: 0, color: 'var(--text-dim)', cursor: 'pointer', fontSize: 12,
            }}>{c.t}</button>
          ))}

          <div style={{ marginTop: 'auto', padding: 12, background: 'var(--surface)', borderRadius: 10, border: '1px solid var(--border)' }}>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', marginBottom: 6 }}>Consultas restantes</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <strong className="sx-mono" style={{ fontSize: 16 }}>23<span style={{ color: 'var(--text-muted)', fontSize: 12, fontWeight: 400 }}>/30</span></strong>
              <button className="sx-btn sx-btn--sm">Upgrade</button>
            </div>
          </div>
        </div>

        {/* CHAT thread */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          <div style={{ padding: '14px 28px', borderBottom: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Stack para clínica de estética</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                clínica · 4 funcionárias · faturamento R$ 80k/mês · São Paulo
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Compartilhar</button>
              <button className="sx-btn sx-btn--sm">Salvar stack</button>
            </div>
          </div>

          <div style={{ flex: 1, overflow: 'hidden', padding: '24px 32px', display: 'flex', flexDirection: 'column', gap: 22 }}>
            {/* user msg */}
            <div style={{ alignSelf: 'flex-end', maxWidth: '78%' }}>
              <div style={{
                background: 'var(--surface-2)', padding: '12px 16px', borderRadius: '14px 14px 4px 14px',
                fontSize: 13.5, lineHeight: 1.55, border: '1px solid var(--border)',
              }}>
                Preciso de uma stack completa para abrir uma clínica de estética em SP. Tenho 4 funcionárias, espero faturar uns 80k/mês. Quero algo com WhatsApp, agendamento online e prontuário. Orçamento até R$ 500/mês.
              </div>
              <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 4, textAlign: 'right' }}>09:42</div>
            </div>

            {/* ai msg */}
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: 'var(--ai)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon name="sparkle" size={14} stroke="#fff" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13.5, lineHeight: 1.6, color: 'var(--text)' }}>
                  Perfeito. Para uma clínica de estética desse porte em SP, recomendo uma stack de 4 ferramentas que cobrem tudo dentro do seu orçamento — sobram <span style={{ color: 'var(--acc)' }}>R$ 124/mês</span> para reserva. Aqui vão:
                </div>

                {/* Recommendations */}
                <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    { p: SAAS[10], reason: 'Prontuário eletrônico + agendamento + teleconsulta. Único do mercado com integração ANVISA.', match: 96, price: 'R$ 149/mês' },
                    { p: SAAS[3],  reason: 'Agenda online com confirmação automática WhatsApp e ficha de cliente visual.', match: 92, price: 'R$ 79/mês' },
                    { p: SAAS[14], reason: 'Bot WhatsApp pré-treinado para estética. Confirma horários e qualifica leads do Instagram.', match: 90, price: 'R$ 69/mês' },
                    { p: SAAS[5],  reason: 'Cobrança recorrente PIX + cartão. Splits, antifraude e link de pagamento por WhatsApp.', match: 88, price: '1.99% + R$ 0.49' },
                  ].map(({ p, reason, match, price }) => (
                    <div key={p.id} className="sx-card" style={{
                      padding: 14, display: 'grid', gridTemplateColumns: '40px 1fr auto',
                      gap: 14, alignItems: 'center',
                    }}>
                      <LogoTile p={p} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: 13.5, fontWeight: 600 }}>{p.name}</span>
                          <span className="sx-pill sx-pill--acc"><Icon name="sparkle" size={9} stroke="var(--acc)" /> {match}% match</span>
                          <span className="sx-pill" style={{ fontSize: 10 }}>{p.cat}</span>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 3, lineHeight: 1.45 }}>{reason}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div className="sx-mono" style={{ fontSize: 12, fontWeight: 600 }}>{price}</div>
                        <button className="sx-btn sx-btn--sm" style={{ marginTop: 6 }}>Adicionar</button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div style={{
                  marginTop: 12, padding: 14, borderRadius: 12,
                  background: 'var(--surface)', border: '1px dashed var(--border-strong)',
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                }}>
                  <div>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Custo mensal estimado</div>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginTop: 4 }}>
                      <span className="sx-mono" style={{ fontSize: 26, fontWeight: 600 }}>R$ 376</span>
                      <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>+ 1.99% sobre vendas</span>
                      <span className="sx-pill sx-pill--pos">↓ 24% vs. média do nicho</span>
                    </div>
                  </div>
                  <button className="sx-btn sx-btn--primary">
                    Contratar stack completa
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
                  </button>
                </div>

                <div style={{ marginTop: 14, fontSize: 13.5, lineHeight: 1.6 }}>
                  Quer que eu adicione um <strong>módulo de marketing</strong> para Instagram, ou prefere começar com isso e expandir depois?
                </div>
              </div>
            </div>
          </div>

          {/* Composer */}
          <div style={{ padding: '16px 32px 22px', borderTop: '1px solid var(--border)' }}>
            <div className="sx-search" style={{ padding: '6px 6px 6px 18px' }}>
              <Icon name="sparkle" size={14} stroke="var(--ai)" />
              <input placeholder="Pergunte algo sobre a stack, peça comparações…" />
              <button className="sx-btn sx-btn--sm sx-btn--ghost" title="Anexar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5l-8.5 8.5a5 5 0 01-7-7L14 4.5a3.5 3.5 0 015 5L10 18.5a2 2 0 01-3-3L15 7" /></svg>
              </button>
              <button className="sx-btn sx-btn--primary sx-btn--sm" style={{ background: 'var(--ai)', color: '#fff' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </button>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 10, flexWrap: 'wrap' }}>
              {['Compare Caixa.AI vs Conta Azul', 'Adicione marketing para Instagram', 'Reduzir custos em 20%', 'Mostrar integrações entre eles'].map(s => (
                <button key={s} className="sx-chip" style={{ cursor: 'pointer', fontFamily: 'var(--font-display)' }}>{s}</button>
              ))}
            </div>
          </div>
        </div>

        {/* CONTEXT panel (right) */}
        <div style={{ borderLeft: '1px solid var(--border)', padding: 18, background: 'var(--bg-2)', overflow: 'hidden' }}>
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Contexto do seu negócio</div>
          <div className="sx-card" style={{ padding: 14 }}>
            {[
              ['Segmento', 'Clínica de estética'],
              ['Localização', 'São Paulo, SP'],
              ['Time', '4 pessoas'],
              ['Faturamento', 'R$ 80k/mês esperado'],
              ['Orçamento SaaS', 'R$ 500/mês'],
              ['Estágio', 'Abertura'],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '6px 0', borderBottom: '1px solid var(--border)', fontSize: 12 }}>
                <span style={{ color: 'var(--text-muted)' }}>{k}</span>
                <span style={{ color: 'var(--text)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
            <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ width: '100%', marginTop: 10, justifyContent: 'center' }}>Editar contexto</button>
          </div>

          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '20px 0 10px' }}>Sua stack atual</div>
          <div className="sx-card" style={{ padding: 12 }}>
            {[SAAS[10], SAAS[3], SAAS[14], SAAS[5]].map((p, i) => (
              <div key={p.id} style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '8px 4px',
                borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
              }}>
                <LogoTile p={p} size={26} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{p.cat}</div>
                </div>
                <button style={{ background: 'transparent', border: 0, color: 'var(--text-muted)', cursor: 'pointer' }}>×</button>
              </div>
            ))}
          </div>

          <div className="sx-card" style={{ padding: 14, marginTop: 14, background: 'var(--ai-soft)', borderColor: 'transparent' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--ai)', marginBottom: 4 }}>Próximo passo sugerido</div>
            <div style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Ver o <strong style={{ color: 'var(--text)' }}>mapa de integrações</strong> entre as 4 ferramentas — encontrei 11 automações prontas no n8n.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
