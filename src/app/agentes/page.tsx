import { TopNav } from '@/components/ui/TopNav';
import { Icon } from '@/components/ui/Icon';
import { Stars } from '@/components/ui/Stars';

export default function AgentsPage() {
  const agents = [
    { name: 'Closer GPT', tag: 'Fecha vendas no WhatsApp', author: 'Stackly Labs', price: 'R$ 49/mês', installs: '12.4k', stars: 4.8, badge: 'oficial', cat: 'Vendas', emoji: '◐', col: 'var(--acc)' },
    { name: 'SAC 24h', tag: 'Atendimento omnichannel', author: 'Voxa Studio', price: 'R$ 89/mês', installs: '8.7k', stars: 4.7, badge: 'verificado', cat: 'Atendimento', emoji: '◑', col: '#9D7CFE' },
    { name: 'Cobrador Educado', tag: 'Régua de cobrança PIX', author: 'PagaNow', price: 'Grátis', installs: '23.1k', stars: 4.9, badge: 'oficial', cat: 'Financeiro', emoji: '◒', col: '#0F8F4E' },
    { name: 'Lead Hunter', tag: 'Qualifica leads do Instagram', author: 'Felipe M.', price: 'R$ 29/mês', installs: '5.2k', stars: 4.6, cat: 'Marketing', emoji: '◓', col: '#FF6A4D' },
    { name: 'Recepcionista IA', tag: 'Agenda consultas via voz', author: 'ClinicFlow', price: 'R$ 119/mês', installs: '3.8k', stars: 4.7, badge: 'verificado', cat: 'Vertical', emoji: '◐', col: '#5EEAFE' },
    { name: 'Curador de Conteúdo', tag: 'Publica em redes sociais', author: 'LeadGrid', price: 'R$ 39/mês', installs: '9.1k', stars: 4.5, cat: 'Marketing', emoji: '◑', col: '#A78BFA' },
    { name: 'Analisador Fiscal', tag: 'Audita notas e impostos', author: 'Caixa.AI', price: 'R$ 149/mês', installs: '2.4k', stars: 4.8, badge: 'verificado', cat: 'Financeiro', emoji: '◒', col: '#FFD166' },
    { name: 'RH Bot', tag: 'Triagem de currículos', author: 'Huma', price: 'R$ 69/mês', installs: '4.1k', stars: 4.6, cat: 'RH', emoji: '◓', col: '#FF9A4D' },
    { name: 'Comprador Inteligente', tag: 'Cotação automática', author: 'Comunidade', price: 'R$ 19/mês', installs: '1.8k', stars: 4.4, cat: 'Compras', emoji: '◐', col: '#7AB8FF' },
  ];

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="agentes" />

      {/* Hero */}
      <div style={{ padding: '40px 80px 28px', borderBottom: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', right: -100, top: -100,
          width: 400, height: 400,
          background: 'radial-gradient(circle, var(--ai-soft) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end' }}>
          <div>
            <div className="sx-pill sx-pill--ai" style={{ marginBottom: 14 }}>
              <span className="dot" /> 2.418 agentes · 89 atualizados esta semana
            </div>
            <h1 style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.03em', margin: 0, lineHeight: 1.05 }}>
              Agentes IA <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--ai)', fontWeight: 400 }}>prontos para</span> trabalhar.
            </h1>
            <p style={{ fontSize: 14.5, color: 'var(--text-dim)', margin: '14px 0 0', maxWidth: 560, lineHeight: 1.5 }}>
              Instale agentes que vendem, atendem, cobram e operam — em segundos. Compatíveis com sua stack atual.
            </p>
          </div>
          <button className="sx-btn sx-btn--primary sx-btn--lg">
            <Icon name="sparkle" size={14} stroke="var(--acc-ink)" />
            Construir um agente
          </button>
        </div>

        {/* Categories filter */}
        <div style={{ display: 'flex', gap: 6, marginTop: 26, flexWrap: 'wrap' }}>
          {[
            ['Todos', true, '2.418'],
            ['Vendas', false, '342'],
            ['Atendimento', false, '418'],
            ['Marketing', false, '623'],
            ['Financeiro', false, '187'],
            ['RH', false, '94'],
            ['Operações', false, '254'],
            ['Verticais', false, '500'],
          ].map(([t, a, n], i) => (
            <button key={t as string} className="sx-chip" style={{
              cursor: 'pointer', fontFamily: 'var(--font-display)',
              background: a ? 'var(--text)' : 'var(--surface-2)',
              color: a ? 'var(--bg)' : 'var(--text-dim)',
              borderColor: a ? 'transparent' : 'var(--border)',
              fontWeight: a ? 600 : 400, padding: '7px 12px', fontSize: 12,
            }}>
              {t as string} <span style={{ opacity: 0.5, marginLeft: 4 }}>{n as string}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Featured agent (large) */}
      <div style={{ padding: '24px 80px 8px' }}>
        <div className="sx-card" style={{
          padding: 0, overflow: 'hidden',
          display: 'grid', gridTemplateColumns: '1.4fr 1fr',
        }}>
          <div style={{ padding: 28 }}>
            <div className="sx-pill sx-pill--acc" style={{ marginBottom: 14 }}>
              <Icon name="sparkle" size={10} stroke="var(--acc)" /> Agente da semana
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 14 }}>
              <div style={{ width: 64, height: 64, borderRadius: 14, background: 'var(--acc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, color: 'var(--acc-ink)', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>◐</div>
              <div>
                <h2 style={{ fontSize: 26, fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>Closer GPT</h2>
                <div style={{ fontSize: 13, color: 'var(--text-dim)', marginTop: 2 }}>Fecha vendas no WhatsApp · por Stackly Labs</div>
              </div>
            </div>
            <p style={{ fontSize: 13.5, color: 'var(--text-dim)', lineHeight: 1.6, margin: '0 0 16px' }}>
              Treinado em 47 milhões de conversas reais de vendas no WhatsApp brasileiro. Identifica objeções, contorna preço, propõe condições, agenda follow-up e fecha — com tom natural. Plugue em qualquer CRM da Stackly em 2 cliques.
            </p>
            <div style={{ display: 'flex', gap: 22, padding: '12px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', marginBottom: 18 }}>
              {[['Conversão média', '+34%'], ['Resposta', '<1s'], ['Instalações', '12.4k'], ['Avaliação', '4.8 ★']].map(([k, v]) => (
                <div key={k}>
                  <div style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{k}</div>
                  <div className="sx-mono" style={{ fontSize: 18, fontWeight: 600, marginTop: 2 }}>{v}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <button className="sx-btn sx-btn--primary sx-btn--lg">Instalar agente · R$ 49/mês</button>
              <button className="sx-btn sx-btn--lg sx-btn--ghost">Ver demo ao vivo →</button>
            </div>
          </div>
          <div style={{
            background: 'var(--bg-2)', padding: 28, borderLeft: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: 10,
            fontFamily: 'var(--font-mono)', fontSize: 12,
          }}>
            <div style={{ color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', fontSize: 10, marginBottom: 4 }}>Conversa de exemplo</div>
            <div style={{ background: 'var(--surface)', padding: '10px 12px', borderRadius: '12px 12px 12px 4px', maxWidth: '85%', border: '1px solid var(--border)' }}>
              Oi! Vi seu produto no Instagram. Quanto custa?
            </div>
            <div style={{ alignSelf: 'flex-end', background: 'var(--acc)', color: 'var(--acc-ink)', padding: '10px 12px', borderRadius: '12px 12px 4px 12px', maxWidth: '85%' }}>
              Oi! 👋 O nosso plano popular é R$ 49/mês. Posso te mandar um vídeo de 60s mostrando como funciona pra você?
            </div>
            <div style={{ background: 'var(--surface)', padding: '10px 12px', borderRadius: '12px 12px 12px 4px', maxWidth: '85%', border: '1px solid var(--border)' }}>
              Manda aí
            </div>
            <div style={{ alignSelf: 'flex-end', background: 'var(--acc)', color: 'var(--acc-ink)', padding: '10px 12px', borderRadius: '12px 12px 4px 12px', maxWidth: '85%' }}>
              [vídeo] 🎬 Aqui ó. Posso te liberar 14 dias grátis pra testar?
            </div>
            <div style={{ marginTop: 4, color: 'var(--ai)', fontSize: 11 }}>
              <Icon name="sparkle" size={10} stroke="var(--ai)" /> Agente identificou: pré-objeção de preço · grau de intenção 78%
            </div>
          </div>
        </div>
      </div>

      {/* Agent grid */}
      <div style={{ padding: '20px 80px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 14 }}>
          <h3 style={{ fontSize: 16, fontWeight: 600, margin: 0 }}>Mais instalados</h3>
          <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>2.418 agentes</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {agents.map((a, i) => (
            <div key={a.name} className="sx-card" style={{ padding: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: a.col, color: a.col === 'var(--acc)' ? 'var(--acc-ink)' : '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-mono)', fontSize: 22, fontWeight: 600,
                }}>{a.emoji}</div>
                {a.badge && (
                  <span className="sx-pill" style={{ fontSize: 9.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="var(--acc)"><path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.5 7.1 17l.9-5.5-4-3.9L9.5 7z"/></svg>
                    {a.badge}
                  </span>
                )}
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>{a.name}</div>
                <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2 }}>{a.tag}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, color: 'var(--text-muted)' }}>
                <span style={{ fontFamily: 'var(--font-mono)' }}>{a.author}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto', paddingTop: 10, borderTop: '1px solid var(--border)' }}>
                <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>
                  <Stars value={a.stars} size={10} /> {a.stars} · <span className="sx-mono">{a.installs}</span>
                </div>
                <button className="sx-btn sx-btn--sm" style={{ padding: '5px 10px' }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
                  {a.price === 'Grátis' ? 'Instalar' : a.price}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ height: 40 }} />
    </div>
  );
}
