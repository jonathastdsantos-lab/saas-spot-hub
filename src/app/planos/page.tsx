import { TopNav } from '@/components/ui/TopNav';
import { Icon } from '@/components/ui/Icon';

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      tag: 'Para validar',
      price: 'R$ 0',
      sub: 'para sempre',
      cta: 'Começar grátis',
      primary: false,
      features: [
        ['Listagem básica no marketplace', true],
        ['Perfil público + SEO básico', true],
        ['Até 500 visualizações/mês', true],
        ['1 categoria + 3 tags', true],
        ['Responder até 5 reviews/mês', true],
        ['Analytics — últimos 7 dias', true],
        ['Badge "verificado"', false],
        ['Destaque em rankings', false],
        ['Comparador automático', false],
        ['Suporte prioritário', false],
      ],
    },
    {
      name: 'Pro',
      tag: 'Mais escolhido',
      price: 'R$ 290',
      sub: '/mês · cobrança anual',
      cta: 'Assinar Pro',
      primary: true,
      badge: 'Recomendado',
      features: [
        ['Tudo do Free', true],
        ['Visualizações ilimitadas', true],
        ['Até 3 categorias + tags ilimitadas', true],
        ['Badge "verificado" + SaaS Score™', true],
        ['Analytics completo · 12 meses', true],
        ['Aparece no comparador automático', true],
        ['Suporte 24h em PT-BR', true],
        ['Respostas com IA para reviews', true],
        ['Destaque em rankings', false],
        ['Patrocínio em buscas', false],
      ],
    },
    {
      name: 'Premium',
      tag: 'Para crescer rápido',
      price: 'R$ 890',
      sub: '/mês · cobrança anual',
      cta: 'Assinar Premium',
      primary: false,
      features: [
        ['Tudo do Pro', true],
        ['Destaque em 2 categorias', true],
        ['Patrocínio em buscas IA', true],
        ['Lead gen — 200 leads qualif./mês', true],
        ['Aparece no Consultor IA', true],
        ['Comparativos guiados (vs concorrentes)', true],
        ['Account manager dedicado', true],
        ['Insights de IA sobre concorrência', true],
        ['White-label opcional', false],
        ['SLA contratual', false],
      ],
    },
    {
      name: 'Enterprise',
      tag: 'Sob medida',
      price: 'Sob consulta',
      sub: 'a partir de R$ 4.5k/mês',
      cta: 'Falar com vendas',
      primary: false,
      features: [
        ['Tudo do Premium', true],
        ['Leads ilimitados', true],
        ['Integração CRM nativa', true],
        ['White-label completo', true],
        ['SLA 99.99% + multas contratuais', true],
        ['SSO / SAML / auditoria', true],
        ['API privada de leads', true],
        ['Co-marketing com Stackly', true],
        ['Contrato em USD/EUR', true],
        ['Onboarding técnico dedicado', true],
      ],
    },
  ];

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="" />

      {/* Hero */}
      <div style={{ padding: '56px 80px 32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', top: -150, left: '50%', transform: 'translateX(-50%)',
          width: 800, height: 500, pointerEvents: 'none',
          background: 'radial-gradient(ellipse, var(--acc-soft) 0%, transparent 60%)',
          filter: 'blur(40px)',
        }} />
        <div className="sx-pill sx-pill--acc" style={{ position: 'relative', marginBottom: 18 }}>
          <span className="dot" /> Planos para anunciantes · cobrança recorrente
        </div>
        <h1 style={{
          position: 'relative', fontSize: 52, fontWeight: 500, letterSpacing: '-0.03em',
          margin: 0, lineHeight: 1.05, maxWidth: 780, marginLeft: 'auto', marginRight: 'auto',
        }}>
          Pague para <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--acc)', fontWeight: 400 }}>aparecer</span> só quando faz sentido.
        </h1>
        <p style={{ position: 'relative', fontSize: 15, color: 'var(--text-dim)', maxWidth: 560, margin: '18px auto 0', lineHeight: 1.5 }}>
          Listar é grátis. Você paga quando quer aparecer mais, gerar leads ou destacar contra concorrentes — sempre com ROI medido em tempo real.
        </p>

        {/* Toggle */}
        <div style={{ position: 'relative', display: 'inline-flex', marginTop: 30, padding: 3, background: 'var(--surface-2)', borderRadius: 10, border: '1px solid var(--border)' }}>
          <button className="sx-btn sx-btn--sm" style={{ background: 'transparent', borderColor: 'transparent', color: 'var(--text-dim)' }}>Mensal</button>
          <button className="sx-btn sx-btn--sm" style={{ background: 'var(--surface)', borderColor: 'var(--border-strong)' }}>
            Anual <span className="sx-pill sx-pill--pos" style={{ marginLeft: 6, padding: '1px 6px', fontSize: 9.5 }}>−20%</span>
          </button>
        </div>
      </div>

      {/* Plans grid */}
      <div style={{ padding: '0 60px 36px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {plans.map(plan => (
            <div key={plan.name} className="sx-card" style={{
              padding: 22, position: 'relative',
              background: plan.primary ? 'linear-gradient(180deg, var(--acc-soft), transparent 50%), var(--surface)' : 'var(--surface)',
              borderColor: plan.primary ? 'var(--acc)' : 'var(--border)',
              boxShadow: plan.primary ? '0 0 0 1px var(--acc), 0 12px 40px var(--acc-glow)' : 'var(--shadow-card)',
            }}>
              {plan.badge && (
                <div style={{
                  position: 'absolute', top: -10, left: '50%', transform: 'translateX(-50%)',
                  background: 'var(--acc)', color: 'var(--acc-ink)',
                  padding: '4px 12px', borderRadius: 6, fontSize: 10.5, fontWeight: 600,
                  letterSpacing: '0.04em', textTransform: 'uppercase', fontFamily: 'var(--font-mono)',
                }}>{plan.badge}</div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 600 }}>{plan.name}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--text-muted)', marginTop: 2 }}>{plan.tag}</div>
                </div>
              </div>
              <div style={{ margin: '20px 0 4px', display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span className="sx-mono" style={{ fontSize: 32, fontWeight: 600, letterSpacing: '-0.02em' }}>{plan.price}</span>
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 16 }}>{plan.sub}</div>
              <button className={'sx-btn ' + (plan.primary ? 'sx-btn--primary' : '')} style={{
                width: '100%', justifyContent: 'center', marginBottom: 18,
              }}>{plan.cta}</button>

              <div style={{ height: 1, background: 'var(--border)', margin: '0 -4px 14px' }} />

              <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                {plan.features.map(([f, on]) => (
                  <div key={f as string} style={{ display: 'flex', gap: 8, fontSize: 11.5, color: on ? 'var(--text-dim)' : 'var(--text-muted)' }}>
                    {on ? (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: 1 }}><path d="M5 12l5 5 9-11" /></svg>
                    ) : (
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.8" style={{ flexShrink: 0, marginTop: 1, opacity: 0.5 }}><path d="M6 6l12 12M6 18L18 6" /></svg>
                    )}
                    <span style={{ lineHeight: 1.4, opacity: on ? 1 : 0.55 }}>{f as string}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div style={{ padding: '20px 80px 36px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <h3 style={{ fontSize: 18, fontWeight: 500, margin: 0, letterSpacing: '-0.015em' }}>Add-ons · cobre apenas o que usa</h3>
          <span className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>Avulsos, sem fidelidade</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { t: 'Patrocínio em busca', d: 'Aparece no topo para termos escolhidos', p: 'R$ 0.40/clique', icon: 'megaphone' },
            { t: 'Destaque em categoria', d: 'Topo da página por 7 dias', p: 'R$ 480/sem', icon: 'sparkle' },
            { t: 'Pack de leads', d: 'Leads B2B verificados por nicho', p: 'R$ 18/lead', icon: 'people' },
            { t: 'Newsletter Stackly', d: 'Patrocínio na newsletter (62k subs)', p: 'R$ 2.4k/edição', icon: 'check' },
          ].map(a => (
            <div key={a.t} className="sx-card" style={{ padding: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--acc-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10 }}>
                <Icon name={a.icon} size={14} stroke="var(--acc)" />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{a.t}</div>
              <div style={{ fontSize: 11, color: 'var(--text-dim)', margin: '4px 0 12px', lineHeight: 1.45 }}>{a.d}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                <span className="sx-mono" style={{ fontSize: 12, fontWeight: 600 }}>{a.p}</span>
                <button className="sx-btn sx-btn--sm sx-btn--ghost">Adicionar →</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Calculator + FAQ */}
      <div style={{ padding: '0 80px 60px', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 18 }}>
        <div className="sx-card" style={{ padding: 22, background: 'linear-gradient(135deg, var(--ai-soft), transparent 60%), var(--surface)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
            <Icon name="sparkle" size={14} stroke="var(--ai)" />
            <span className="sx-mono" style={{ fontSize: 11, color: 'var(--ai)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Calculadora de ROI</span>
          </div>
          <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 18px', letterSpacing: '-0.015em' }}>Quanto você ganharia com o Stackly?</h3>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 18 }}>
            <div>
              <label style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>Ticket médio mensal</label>
              <div style={{ position: 'relative', padding: '10px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="sx-mono" style={{ fontSize: 13 }}>R$ 149</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>/mês</span>
              </div>
            </div>
            <div>
              <label style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 6 }}>LTV médio (meses)</label>
              <div style={{ position: 'relative', padding: '10px 12px', background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="sx-mono" style={{ fontSize: 13 }}>18</span>
                <span style={{ fontSize: 11, color: 'var(--text-muted)' }}>meses</span>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ fontSize: 11, color: 'var(--text-muted)', display: 'block', marginBottom: 10 }}>Plano selecionado</label>
            <div style={{ display: 'flex', gap: 4 }}>
              {['Free', 'Pro', 'Premium', 'Enterprise'].map((p, i) => (
                <button key={p} className="sx-btn sx-btn--sm" style={{
                  flex: 1, justifyContent: 'center',
                  background: i === 2 ? 'var(--acc)' : 'var(--surface-2)',
                  color: i === 2 ? 'var(--acc-ink)' : 'var(--text-dim)',
                  borderColor: i === 2 ? 'transparent' : 'var(--border)',
                  fontWeight: i === 2 ? 600 : 400,
                }}>{p}</button>
              ))}
            </div>
          </div>

          <div style={{ padding: 16, background: 'var(--bg-2)', borderRadius: 10, border: '1px dashed var(--border-strong)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 12 }}>
              {[
                ['Leads/mês', '200', 'var(--text)'],
                ['Conv. esperada', '8.5%', 'var(--text)'],
                ['Clientes novos/mês', '17', 'var(--acc)'],
              ].map(([k, v, c]) => (
                <div key={k}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{k}</div>
                  <div className="sx-mono" style={{ fontSize: 18, fontWeight: 600, color: c, marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ height: 1, background: 'var(--border)', margin: '12px 0' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Receita atribuída ano 1</div>
                <div className="sx-mono" style={{ fontSize: 30, fontWeight: 600, color: 'var(--acc)', marginTop: 2 }}>R$ 547.080</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>ROI estimado</div>
                <div className="sx-mono" style={{ fontSize: 18, fontWeight: 600, color: 'var(--pos)' }}>51x</div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 14px', letterSpacing: '-0.015em' }}>Perguntas comuns</h3>
          {[
            ['Posso começar pelo Free?', 'Sim, e ficar nele para sempre. Você só paga quando quiser mais visibilidade ou recursos.'],
            ['Como funciona a cobrança?', 'Mensal ou anual (−20%). Aceita cartão, PIX e boleto. Cancelamento a qualquer momento.'],
            ['Há comissão sobre vendas?', 'No Premium e Enterprise, oferecemos modelo CPA opcional: você paga só pelos clientes que vieram do Stackly.'],
            ['Lead qualificado significa o quê?', 'Empresa que pediu informação ativa, com porte e segmento compatíveis com seu ICP. Não-qualificados são reembolsados.'],
          ].map(([q, a], i) => (
            <details key={i} className="sx-card" style={{ padding: 14, marginBottom: 6, cursor: 'pointer' }} open={i === 0}>
              <summary style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', listStyle: 'none' }}>
                <span style={{ fontSize: 13, fontWeight: 500 }}>{q}</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
              </summary>
              <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '10px 0 0', lineHeight: 1.55 }}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
