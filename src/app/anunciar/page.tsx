import { TopNav } from '@/components/ui/TopNav';
import { Icon } from '@/components/ui/Icon';
import { LogoTile } from '@/components/ui/LogoTile';
import { SAAS } from '@/lib/data/mock';

export default function OnboardingPage() {
  return (
    <div className="sx-screen">
      <TopNav active="" compact />

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', height: 'calc(100% - 49px)' }}>
        {/* Steps sidebar */}
        <aside style={{ borderRight: '1px solid var(--border)', padding: '28px 24px', background: 'var(--bg-2)' }}>
          <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Anunciar no Stackly · etapa 3 de 6
          </div>
          <h2 style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-0.015em', margin: '8px 0 4px' }}>Cadastre seu SaaS</h2>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '0 0 22px', lineHeight: 1.5 }}>
            Quanto mais completo, melhor o seu ranking e maior o seu SaaS Score™.
          </p>

          {[
            { n: 1, t: 'Conta & verificação', s: 'Domínio confirmado', done: true, active: false },
            { n: 2, t: 'Identidade do produto', s: 'Nome, logo, descrição', done: true, active: false },
            { n: 3, t: 'Recursos & integrações', s: 'O que seu SaaS faz', active: true, done: false },
            { n: 4, t: 'Planos & preços', s: 'Modelo de cobrança', active: false, done: false },
            { n: 5, t: 'Mídia', s: 'Screenshots, vídeo', active: false, done: false },
            { n: 6, t: 'SEO & publicação', s: 'Revisar e publicar', active: false, done: false },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: s.done ? 'var(--acc)' : s.active ? 'transparent' : 'var(--surface-2)',
                border: s.active ? '1.5px solid var(--acc)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600,
                color: s.done ? 'var(--acc-ink)' : s.active ? 'var(--acc)' : 'var(--text-muted)',
              }}>
                {s.done ? (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--acc-ink)" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg>
                ) : s.n}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: s.active ? 600 : 500, color: s.active ? 'var(--text)' : s.done ? 'var(--text-dim)' : 'var(--text-muted)' }}>{s.t}</div>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>{s.s}</div>
              </div>
            </div>
          ))}

          <div className="sx-card" style={{ padding: 14, marginTop: 22, background: 'var(--surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="sparkle" size={13} stroke="var(--ai)" />
              <div style={{ fontSize: 12, fontWeight: 600 }}>IA pode preencher por você</div>
            </div>
            <p style={{ fontSize: 11, color: 'var(--text-dim)', margin: '0 0 10px', lineHeight: 1.45 }}>
              Cole o link do seu site e a Stackly extrai recursos, integrações, planos e screenshots automaticamente.
            </p>
            <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center', background: 'var(--ai)', color: '#fff', borderColor: 'transparent' }}>
              Auto-preencher com IA
            </button>
          </div>
        </aside>

        {/* Form area */}
        <div style={{ overflow: 'auto', display: 'grid', gridTemplateColumns: '1fr 380px' }}>
          <div style={{ padding: '32px 36px 80px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
              <div>
                <h1 style={{ fontSize: 26, fontWeight: 500, letterSpacing: '-0.02em', margin: 0 }}>Recursos & integrações</h1>
                <p style={{ fontSize: 13, color: 'var(--text-dim)', margin: '4px 0 0' }}>O que seu SaaS faz e com que ferramentas ele conversa.</p>
              </div>
              <div className="sx-pill sx-pill--pos"><span className="dot" /> Salvo · 2s atrás</div>
            </div>

            {/* Recursos */}
            <div style={{ marginBottom: 28 }}>
              <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>Recursos principais · até 12</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 10 }}>
                {[
                  ['Pipeline visual', true], ['WhatsApp nativo', true], ['IA de qualificação', true],
                  ['Multi-funil', true], ['Inbox unificado', true], ['Automações no-code', true],
                  ['Relatórios em tempo real', true], ['API REST', true], ['Webhooks', true],
                  ['App iOS', true], ['App Android', true], ['Modo offline', true],
                ].map(([t]) => (
                  <span key={t as string} className="sx-chip" style={{ background: 'var(--acc-soft)', color: 'var(--acc)', borderColor: 'transparent' }}>
                    {t as string}
                    <button style={{ background: 'transparent', border: 0, color: 'var(--acc)', cursor: 'pointer', padding: 0, marginLeft: 4 }}>×</button>
                  </span>
                ))}
                <button className="sx-chip" style={{ borderStyle: 'dashed', cursor: 'pointer' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                  Adicionar
                </button>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: 10, background: 'var(--ai-soft)', borderRadius: 8, fontSize: 11.5, color: 'var(--text-dim)' }}>
                <Icon name="sparkle" size={12} stroke="var(--ai)" />
                <span>IA detectou <strong style={{ color: 'var(--text)' }}>3 recursos</strong> que seu site menciona mas não estão na lista: <span style={{ color: 'var(--acc)' }}>RAG</span>, <span style={{ color: 'var(--acc)' }}>chamadas de voz</span>, <span style={{ color: 'var(--acc)' }}>cobrança recorrente</span>.</span>
                <button className="sx-btn sx-btn--sm" style={{ marginLeft: 'auto', flexShrink: 0 }}>Adicionar todos</button>
              </div>
            </div>

            {/* Categorias */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 28 }}>
              <div>
                <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>Categoria principal</label>
                <div style={{ padding: 12, background: 'var(--surface)', border: '1px solid var(--border-strong)', borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>CRM &amp; Vendas</span>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                </div>
              </div>
              <div>
                <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>Subcategorias · até 3</label>
                <div style={{ padding: 12, background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 10, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['CRM para SMB', 'WhatsApp', 'Automação'].map(s => (
                    <span key={s} className="sx-pill" style={{ background: 'var(--surface-2)' }}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Integrações */}
            <div style={{ marginBottom: 28 }}>
              <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>
                Integrações · <span style={{ color: 'var(--acc)' }}>47 selecionadas</span>
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 8 }}>
                {[
                  ['Z', '#FFD166', 'Zapier'], ['n8', '#EA4B71', 'n8n'], ['M', '#FF4F00', 'Make'],
                  ['G', '#34A853', 'Google'], ['M', '#0F8F4E', 'Meta'], ['W', '#25D366', 'WhatsApp'],
                  ['S', '#000000', 'Stripe'], ['H', '#F77A52', 'HubSpot'], ['R', '#1A1A1A', 'RD'],
                  ['T', '#000000', 'Twilio'], ['S', '#4A154B', 'Slack'], ['+47', '#15151A', 'mais'],
                ].map(([l, c, n], i) => (
                  <div key={i} className="sx-card" style={{ padding: 10, display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ width: 26, height: 26, borderRadius: 6, background: c as string, color: '#fff', fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{l as string}</div>
                    <div style={{ fontSize: 11.5, fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{n as string}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* API */}
            <div style={{ marginBottom: 28 }}>
              <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>API &amp; webhooks</label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                {[
                  ['API REST', true],
                  ['GraphQL', false],
                  ['Webhooks', true],
                  ['SDK JavaScript', true],
                  ['SDK Python', false],
                  ['MCP server', false],
                  ['CLI', false],
                  ['SSO / SAML', true],
                ].map(([t, on]) => (
                  <label key={t as string} className="sx-card" style={{ padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                    <div style={{
                      width: 30, height: 18, borderRadius: 10,
                      background: on ? 'var(--acc)' : 'var(--surface-3)',
                      position: 'relative', transition: 'all .15s', flexShrink: 0,
                    }}>
                      <div style={{
                        position: 'absolute', top: 2, left: on ? 14 : 2,
                        width: 14, height: 14, borderRadius: '50%',
                        background: on ? 'var(--acc-ink)' : 'var(--text-muted)',
                      }} />
                    </div>
                    <span style={{ fontSize: 12 }}>{t as string}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div style={{ marginBottom: 28 }}>
              <label className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block', marginBottom: 8 }}>Idiomas suportados</label>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {[['Português', true], ['English', true], ['Español', true], ['Français', false], ['Italiano', false], ['Deutsch', false]].map(([l, on]) => (
                  <button key={l as string} className="sx-chip" style={{
                    cursor: 'pointer', fontFamily: 'var(--font-display)',
                    background: on ? 'var(--text)' : 'var(--surface-2)',
                    color: on ? 'var(--bg)' : 'var(--text-dim)',
                    borderColor: on ? 'transparent' : 'var(--border)',
                    fontWeight: on ? 600 : 400,
                  }}>{l as string}</button>
                ))}
              </div>
            </div>

            {/* Footer actions */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20, borderTop: '1px solid var(--border)' }}>
              <button className="sx-btn">← Identidade</button>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>Completude: <strong style={{ color: 'var(--text)' }}>84%</strong></span>
                <button className="sx-btn">Salvar rascunho</button>
                <button className="sx-btn sx-btn--primary">
                  Continuar para Planos →
                </button>
              </div>
            </div>
          </div>

          {/* Live preview */}
          <div style={{ padding: '32px 28px', borderLeft: '1px solid var(--border)', background: 'var(--bg-2)' }}>
            <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>
              Pré-visualização ao vivo
            </div>
            <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 80, background: 'linear-gradient(135deg, rgba(200,255,62,0.3), transparent), repeating-linear-gradient(135deg, rgba(255,255,255,0.03) 0 8px, transparent 8px 16px), var(--surface-2)' }} />
              <div style={{ padding: 14, paddingTop: 0 }}>
                <div style={{ display: 'flex', gap: 12, alignItems: 'flex-end', marginTop: -22 }}>
                  <LogoTile p={SAAS[0]} size={48} />
                  <div style={{ paddingBottom: 4 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Fluxia</div>
                    <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>fluxia.com.br · verificado</div>
                  </div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 10, lineHeight: 1.45 }}>
                  CRM com IA para vendas. Pipeline visual, WhatsApp nativo e relatórios em tempo real.
                </div>
                <div style={{ display: 'flex', gap: 4, marginTop: 10, flexWrap: 'wrap' }}>
                  {['CRM', 'WhatsApp', 'IA'].map(t => <span key={t} className="sx-chip" style={{ fontSize: 10, padding: '3px 8px' }}>{t}</span>)}
                </div>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>R$ 49/mês</span>
                  <span className="sx-pill sx-pill--acc">Score 94</span>
                </div>
              </div>
            </div>

            <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '22px 0 10px' }}>Checklist de qualidade</div>
            {[
              ['Logo enviada', true],
              ['Descrição completa', true],
              ['12+ recursos', true],
              ['10+ integrações', true],
              ['Pelo menos 3 screenshots', false],
              ['Vídeo demo', false],
              ['FAQ preenchida', false],
            ].map(([t, on]) => (
              <div key={t as string} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '5px 0', fontSize: 12 }}>
                <span style={{
                  width: 16, height: 16, borderRadius: 4, flexShrink: 0,
                  background: on ? 'var(--acc)' : 'transparent',
                  border: on ? 0 : '1.5px solid var(--text-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  {on && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--acc-ink)" strokeWidth="3.5"><path d="M5 12l5 5 9-11" /></svg>}
                </span>
                <span style={{ color: on ? 'var(--text-dim)' : 'var(--text)' }}>{t as string}</span>
              </div>
            ))}

            <div className="sx-card" style={{ padding: 12, marginTop: 16, background: 'var(--acc-soft)', borderColor: 'transparent' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--acc)', marginBottom: 2 }}>Score atual estimado</div>
              <div className="sx-mono" style={{ fontSize: 22, fontWeight: 600 }}>87<span style={{ fontSize: 12, color: 'var(--text-muted)' }}>/100</span></div>
              <div style={{ fontSize: 10.5, color: 'var(--text-dim)', marginTop: 2 }}>Adicione vídeo e screenshots para chegar a 95+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
