// Tela 17: Programa de Afiliados — painel de comissões
const Screen_Affiliates = () => {
  const earnings = Array.from({ length: 12 }, (_, i) => 800 + Math.sin(i / 2) * 400 + i * 220 + Math.random() * 200);
  const months = ['Dez 25', 'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov 26'];

  return (
    <div className="sx-screen" style={{ overflow: 'auto' }}>
      <TopNav active="" />

      {/* Hero */}
      <div style={{ padding: '36px 80px 24px', display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'flex-end', borderBottom: '1px solid var(--border)' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
            <span className="sx-pill sx-pill--acc">Programa de Afiliados</span>
            <span className="sx-pill"><span className="dot" style={{ background: 'var(--pos)' }} /> Ativo desde Mar 2025</span>
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 500, letterSpacing: '-0.025em', margin: 0, lineHeight: 1.1 }}>
            Você ganhou <span className="sx-serif" style={{ fontStyle: 'italic', color: 'var(--acc)', fontWeight: 400 }}>R$ 18.420</span> indicando SaaS este ano.
          </h1>
          <p style={{ fontSize: 14, color: 'var(--text-dim)', margin: '12px 0 0' }}>
            Comissão recorrente de <strong style={{ color: 'var(--text)' }}>20% por toda a vida do cliente</strong>. Saque a qualquer momento, sem mínimo.
          </p>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button className="sx-btn">Materiais</button>
          <button className="sx-btn sx-btn--primary">Sacar R$ 4.218</button>
        </div>
      </div>

      <div style={{ padding: '28px 80px 60px', display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 24 }}>
        {/* LEFT */}
        <div>
          {/* KPIs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {[
              { k: 'Receita total', v: 'R$ 18.420', sub: '+ R$ 2.840 esse mês', t: 'pos' },
              { k: 'A receber', v: 'R$ 4.218', sub: 'disponível em 7 dias', t: 'dim' },
              { k: 'Clientes ativos', v: '47', sub: 'churn 4% (excelente)', t: 'pos' },
              { k: 'Conversão', v: '14.2%', sub: 'click → assinatura', t: 'pos' },
            ].map(m => (
              <div key={m.k} className="sx-card" style={{ padding: 14 }}>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>{m.k}</div>
                <div className="sx-mono" style={{ fontSize: 20, fontWeight: 600, marginTop: 4 }}>{m.v}</div>
                <div style={{ fontSize: 10.5, color: m.t === 'pos' ? 'var(--pos)' : 'var(--text-muted)', marginTop: 4 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Earnings chart */}
          <div className="sx-card" style={{ padding: 22, marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Receita por mês</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', marginTop: 2 }}>Comissão recorrente · últimos 12 meses</div>
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {['12m', 'YTD', 'Tudo'].map((d, i) => (
                  <button key={d} className="sx-btn sx-btn--sm" style={{
                    background: i === 0 ? 'var(--surface-2)' : 'transparent',
                    borderColor: i === 0 ? 'var(--border-strong)' : 'var(--border)',
                  }}>{d}</button>
                ))}
              </div>
            </div>
            <svg viewBox="0 0 700 220" width="100%" height={220} preserveAspectRatio="none">
              {[0, 55, 110, 165, 220].map(y => <line key={y} x1="0" x2="700" y1={y} y2={y} stroke="var(--border)" strokeWidth="1" />)}
              {(() => {
                const max = Math.max(...earnings);
                return earnings.map((v, i) => {
                  const x = (i / (earnings.length - 1)) * 680 + 10;
                  const h = (v / max) * 180;
                  return <rect key={i} x={x - 14} y={220 - h - 10} width={28} height={h} rx={4} fill="var(--acc)" opacity={i === earnings.length - 1 ? 1 : 0.45} />;
                });
              })()}
            </svg>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6, fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              {months.map(m => <span key={m}>{m}</span>)}
            </div>
          </div>

          {/* Top conversions */}
          <div style={{ marginTop: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 10 }}>
              <h4 style={{ fontSize: 14, fontWeight: 600, margin: 0 }}>SaaS que mais convertem para você</h4>
              <span className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>30 dias</span>
            </div>
            <div className="sx-card" style={{ padding: 0, overflow: 'hidden' }}>
              {[SAAS[0], SAAS[14], SAAS[5], SAAS[6], SAAS[2]].map((p, i) => {
                const clicks = [847, 612, 489, 312, 234][i];
                const conv = [127, 89, 68, 42, 28][i];
                const commission = [4218, 1840, 1240, 8420, 3216][i];
                return (
                  <div key={p.id} style={{
                    display: 'grid', gridTemplateColumns: '40px 48px 1fr 80px 80px 110px',
                    gap: 14, padding: '12px 18px', alignItems: 'center',
                    borderBottom: i < 4 ? '1px solid var(--border)' : 0,
                  }}>
                    <span className="sx-mono" style={{ fontSize: 14, fontWeight: 600, color: i < 3 ? 'var(--acc)' : 'var(--text-muted)', textAlign: 'center' }}>{i + 1}</span>
                    <LogoTile p={p} size={36} />
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500 }}>{p.name}</div>
                      <div style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{p.tag}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="sx-mono" style={{ fontSize: 13 }}>{clicks}</div>
                      <div style={{ fontSize: 9.5, color: 'var(--text-muted)' }}>clicks</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="sx-mono" style={{ fontSize: 13 }}>{conv}</div>
                      <div style={{ fontSize: 9.5, color: 'var(--text-muted)' }}>conversões</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div className="sx-mono" style={{ fontSize: 14, fontWeight: 600, color: 'var(--acc)' }}>R$ {commission.toLocaleString('pt-BR')}</div>
                      <div style={{ fontSize: 9.5, color: 'var(--text-muted)' }}>comissão acumulada</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tier */}
          <div className="sx-card" style={{ padding: 22, marginTop: 12, background: 'linear-gradient(135deg, var(--acc-soft), transparent 60%), var(--surface)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
              <span style={{ width: 32, height: 32, borderRadius: 8, background: 'var(--acc)', color: 'var(--acc-ink)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 18 }}>★</span>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600 }}>Nível atual: Gold</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>20% de comissão recorrente</div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)' }}>3 conversões para o próximo nível</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--acc)' }}>Platinum · 25% recorrente</div>
              </div>
            </div>
            <div style={{ position: 'relative', height: 6, background: 'var(--surface-3)', borderRadius: 3, marginBottom: 12 }}>
              <div style={{ position: 'absolute', left: 0, width: '88%', height: '100%', background: 'var(--acc)', borderRadius: 3 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              <span>Bronze · 10%</span>
              <span>Silver · 15%</span>
              <span style={{ color: 'var(--acc)', fontWeight: 600 }}>Gold · 20%</span>
              <span>Platinum · 25%</span>
              <span>Diamond · 30%</span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {/* Link */}
          <div className="sx-card" style={{ padding: 18 }}>
            <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Seu link de afiliado</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 12px', background: 'var(--bg-2)', borderRadius: 8, border: '1px solid var(--border)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--acc)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis' }}>stackly.com/?via=mariana</span>
              <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ padding: 4 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
              </button>
            </div>
            <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
              <button className="sx-btn sx-btn--sm" style={{ flex: 1, justifyContent: 'center' }}>UTMs</button>
              <button className="sx-btn sx-btn--sm" style={{ flex: 1, justifyContent: 'center' }}>QR Code</button>
              <button className="sx-btn sx-btn--sm" style={{ flex: 1, justifyContent: 'center' }}>Banner</button>
            </div>
          </div>

          {/* Per-product links */}
          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Links por produto</div>
            {SAAS.slice(0, 5).map((p, i) => (
              <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: i < 4 ? '1px solid var(--border)' : 0 }}>
                <LogoTile p={p} size={28} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                  <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)' }}>20% recorrente</div>
                </div>
                <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ padding: 4 }}>
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="11" height="11" rx="2" /><path d="M5 15V5a2 2 0 012-2h10" /></svg>
                </button>
              </div>
            ))}
          </div>

          {/* Recent payouts */}
          <div className="sx-card" style={{ padding: 16 }}>
            <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 10 }}>Saques recentes</div>
            {[
              { d: '15/11/2026', v: '2.840,00', s: 'pago' },
              { d: '15/10/2026', v: '2.218,00', s: 'pago' },
              { d: '15/09/2026', v: '1.967,00', s: 'pago' },
              { d: '15/08/2026', v: '1.420,00', s: 'pago' },
            ].map((p, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', fontSize: 12, borderBottom: i < 3 ? '1px solid var(--border)' : 0 }}>
                <span className="sx-mono" style={{ color: 'var(--text-muted)' }}>{p.d}</span>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span className="sx-mono">R$ {p.v}</span>
                  <span className="sx-pill sx-pill--pos" style={{ fontSize: 9.5, padding: '1px 6px' }}>{p.s}</span>
                </span>
              </div>
            ))}
            <button className="sx-btn sx-btn--sm sx-btn--ghost" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>Ver tudo</button>
          </div>

          {/* IA insight */}
          <div className="sx-card" style={{ padding: 14, background: 'var(--ai-soft)', borderColor: 'transparent' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="sparkle" size={12} stroke="var(--ai)" />
              <strong style={{ fontSize: 11.5, color: 'var(--ai)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)' }}>Insight</strong>
            </div>
            <p style={{ fontSize: 11.5, lineHeight: 1.55, color: 'var(--text-dim)', margin: 0 }}>
              Suas indicações de <strong style={{ color: 'var(--text)' }}>Agentik</strong> têm <strong style={{ color: 'var(--acc)' }}>3.4× mais valor</strong>. Considere criar conteúdo focado em agentes IA — projeto pode dobrar sua receita em 90 dias.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

window.Screen_Affiliates = Screen_Affiliates;
