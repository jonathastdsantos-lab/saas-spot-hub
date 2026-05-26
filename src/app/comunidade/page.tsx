import { TopNav } from '@/components/ui/TopNav';
import { LogoTile } from '@/components/ui/LogoTile';
import { Icon } from '@/components/ui/Icon';
import { SAAS } from '@/lib/data/mock';

export default function CommunityPage() {
  const threads = [
    { t: 'Migrei do HubSpot pro Fluxia — minha review honesta', cat: 'Reviews', author: 'Camila R.', role: 'Salão · SP', votes: 247, replies: 84, time: 'há 2h', hot: true, p: SAAS[0] },
    { t: 'Stack completa para abrir uma clínica de estética', cat: 'Stacks', author: 'Renata C.', role: 'Empreendedora', votes: 189, replies: 52, time: 'há 5h', p: SAAS[10] },
    { t: 'Por que ninguém fala do ZapCRM? Comparativo real', cat: 'Comparativos', author: 'Felipe M.', role: 'Head de Vendas', votes: 156, replies: 73, time: 'há 8h', p: SAAS[1] },
    { t: 'Agentik vs construir agentes do zero no LangChain', cat: 'Discussão', author: 'Bruno S.', role: 'Dev', votes: 134, replies: 41, time: 'há 12h', p: SAAS[6] },
    { t: 'Resumo: como reduzi custo de SaaS em 40% em 90 dias', cat: 'Cases', author: 'Mariana L.', role: 'COO · Agência', votes: 412, replies: 128, time: 'há 1d', pinned: true },
    { t: 'PagaNow ou Stripe? Para SaaS B2B brasileiro', cat: 'Comparativos', author: 'João V.', role: 'Founder', votes: 98, replies: 36, time: 'há 1d', p: SAAS[5] },
    { t: '[ANÚNCIO] Stackly Score™ ganha pontuação de IA', cat: 'Atualizações', author: 'Stackly', role: 'Equipe', votes: 287, replies: 19, time: 'há 2d', official: true },
    { t: 'Alguém usa Voxa para imobiliária? Resultados?', cat: 'Pergunta', author: 'Patrícia A.', role: 'Corretora', votes: 67, replies: 24, time: 'há 2d', p: SAAS[14] },
  ];

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="comunidade" />

      {/* Hero */}
      <div style={{ padding: '36px 80px 28px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end' }}>
          <div>
            <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Comunidade</div>
            <h1 style={{ fontSize: 34, fontWeight: 500, letterSpacing: '-0.025em', margin: '6px 0 8px', lineHeight: 1.05 }}>
              Onde quem usa <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--acc)', fontWeight: 400 }}>compartilha</span> o que aprendeu.
            </h1>
            <div style={{ display: 'flex', gap: 14, fontSize: 12, color: 'var(--text-dim)' }}>
              <span><strong style={{ color: 'var(--text)' }}>42.187</strong> membros</span>
              <span><strong style={{ color: 'var(--text)' }}>12.4k</strong> discussões</span>
              <span><strong style={{ color: 'var(--text)' }}>156k</strong> reviews verificadas</span>
              <span><strong style={{ color: 'var(--pos)' }}>● 847</strong> online agora</span>
            </div>
          </div>
          <button className="sx-btn sx-btn--primary sx-btn--lg">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 5v14M5 12h14" /></svg>
            Nova discussão
          </button>
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 6, marginTop: 22 }}>
          {['Tudo', 'Reviews', 'Stacks', 'Comparativos', 'Cases', 'Discussão', 'Pergunta', 'Atualizações'].map((t, i) => (
            <button key={t} className="sx-chip" style={{
              cursor: 'pointer', fontFamily: 'var(--font-display)',
              background: i === 0 ? 'var(--text)' : 'var(--surface-2)',
              color: i === 0 ? 'var(--bg)' : 'var(--text-dim)',
              borderColor: i === 0 ? 'transparent' : 'var(--border)',
              fontWeight: i === 0 ? 600 : 400, padding: '7px 13px',
            }}>{t}</button>
          ))}
        </div>
      </div>

      {/* Main grid */}
      <div style={{ padding: '20px 80px 60px', display: 'grid', gridTemplateColumns: '1fr 300px', gap: 24 }}>
        {/* Thread list */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
            <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Ordenar: <strong style={{ color: 'var(--text)' }}>Em alta</strong>
            </div>
            <div style={{ display: 'flex', gap: 4 }}>
              {['Em alta', 'Recentes', 'Mais votados', 'Sem resposta'].map((s, i) => (
                <button key={s} className="sx-btn sx-btn--sm" style={{
                  background: i === 0 ? 'var(--surface-2)' : 'transparent',
                  borderColor: i === 0 ? 'var(--border-strong)' : 'var(--border)',
                  fontWeight: i === 0 ? 600 : 400,
                }}>{s}</button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', borderRadius: 12, overflow: 'hidden' }}>
            {threads.map((th, i) => (
              <div key={i} style={{
                display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: 16,
                padding: '14px 18px', background: 'var(--surface)',
                alignItems: 'center',
              }}>
                {/* Votes */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={th.hot ? 'var(--acc)' : 'none'} stroke={th.hot ? 'var(--acc)' : 'var(--text-muted)'} strokeWidth="2"><path d="M12 4l8 10H4z" /></svg>
                  <div className="sx-mono" style={{ fontSize: 13, fontWeight: 600, color: th.hot ? 'var(--acc)' : 'var(--text)' }}>{th.votes}</div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M12 20l8-10H4z" /></svg>
                </div>

                {/* Content */}
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 4 }}>
                    {th.pinned && <span className="sx-pill sx-pill--acc">📌 Fixado</span>}
                    {th.official && <span className="sx-pill" style={{ background: 'var(--ai-soft)', color: 'var(--ai)', borderColor: 'transparent' }}>Stackly</span>}
                    <span className="sx-pill" style={{ fontSize: 10 }}>{th.cat}</span>
                    {th.p && <span className="sx-pill"><LogoTile p={th.p as any} size={14} /> {th.p.name}</span>}
                  </div>
                  <div style={{ fontSize: 14.5, fontWeight: 600, letterSpacing: '-0.005em', lineHeight: 1.3 }}>{th.t}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 6, fontSize: 11, color: 'var(--text-muted)' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      <div className="sx-avatar" style={{ width: 18, height: 18, fontSize: 9 }}>{th.author.split(' ').map((x: string) => x[0]).join('')}</div>
                      <strong style={{ color: 'var(--text-dim)' }}>{th.author}</strong>
                      · {th.role}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{th.time}</span>
                  </div>
                </div>

                {/* Replies */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 2 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-dim)' }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16v12H8l-4 4z" /></svg>
                    <strong style={{ color: 'var(--text)' }}>{th.replies}</strong>
                  </div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {Math.floor(th.replies * 0.7) + 12} ativos
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right rail */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Top contribuidores · semana</div>
            {[
              { n: 'Mariana L.', role: 'COO · Agência', rep: 2840, badge: '🥇' },
              { n: 'Felipe M.', role: 'Head Vendas', rep: 2103, badge: '🥈' },
              { n: 'Camila R.', role: 'Dona de salão', rep: 1567, badge: '🥉' },
              { n: 'Bruno S.', role: 'Dev', rep: 943 },
              { n: 'João V.', role: 'Founder', rep: 782 },
            ].map((u, i) => (
              <div key={u.n} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '7px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 0 }}>
                <span style={{ width: 22, fontSize: 14, textAlign: 'center', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>{u.badge || (i + 1)}</span>
                <div className="sx-avatar" style={{ width: 24, height: 24, fontSize: 10 }}>{u.n.split(' ').map((x: string) => x[0]).join('')}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{u.n}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{u.role}</div>
                </div>
                <span className="sx-mono" style={{ fontSize: 11, color: 'var(--text-dim)' }}>{u.rep}</span>
              </div>
            ))}
          </div>

          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 10 }}>Stacks mais compartilhadas</div>
            {[
              { t: 'Stack para clínica', n: 'Renata C.', uses: '1.2k', tools: 4 },
              { t: 'Stack Agência B2B', n: 'Mariana L.', uses: '987', tools: 6 },
              { t: 'Stack SaaS B2B', n: 'João V.', uses: '843', tools: 5 },
              { t: 'Stack salão básica', n: 'Camila R.', uses: '612', tools: 3 },
            ].map((s, i) => (
              <div key={i} style={{ padding: '8px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 0 }}>
                <div style={{ fontSize: 12, fontWeight: 500 }}>{s.t}</div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 2 }}>
                  <span style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>por {s.n} · {s.tools} ferramentas</span>
                  <span className="sx-mono" style={{ fontSize: 10.5, color: 'var(--acc)' }}>{s.uses} cópias</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sx-card" style={{ padding: 16, background: 'linear-gradient(180deg, var(--ai-soft), transparent 70%), var(--surface)' }}>
            <Icon name="sparkle" size={14} stroke="var(--ai)" />
            <div style={{ fontSize: 13, fontWeight: 600, marginTop: 8 }}>IA resumiu sua semana</div>
            <p style={{ fontSize: 11.5, color: 'var(--text-dim)', lineHeight: 1.5, margin: '6px 0 10px' }}>
              <strong style={{ color: 'var(--acc)' }}>WhatsApp + IA</strong> dominou as discussões. Comparativos entre <strong style={{ color: 'var(--text)' }}>Fluxia, ZapCRM e Agentik</strong> tiveram +340% de engajamento.
            </p>
            <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center' }}>Ver resumo completo</button>
          </div>
        </aside>
      </div>
    </div>
  );
}
