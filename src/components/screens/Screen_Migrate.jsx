// Tela 16: Migrador de plataforma — "Trocar HubSpot por Fluxia"
const Screen_Migrate = () => {
  const fromP = { name: 'HubSpot', color: ['#F77A52', '#FFFFFF'], letter: 'H' };
  const toP = SAAS[0]; // Fluxia

  return (
    <div className="sx-screen">
      <TopNav active="stacks" />

      <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 340px', height: 'calc(100% - 53px)' }}>
        {/* LEFT — steps */}
        <aside style={{ borderRight: '1px solid var(--border)', padding: '24px 22px', background: 'var(--bg-2)', overflow: 'auto' }}>
          <div className="sx-mono" style={{ fontSize: 11, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Migração</div>
          <h1 style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.015em', margin: '6px 0 4px' }}>HubSpot → Fluxia</h1>
          <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '0 0 22px', lineHeight: 1.5 }}>
            Levamos seus dados, automações e usuários sem perder histórico. Tempo estimado: 4–6 horas.
          </p>

          {[
            { n: 1, t: 'Conectar HubSpot', s: '2 cliques · OAuth', done: true },
            { n: 2, t: 'Mapeamento de campos', s: '47/47 mapeados', active: true },
            { n: 3, t: 'Importar dados', s: 'Contatos, deals, atividades' },
            { n: 4, t: 'Recriar automações', s: '12 fluxos detectados' },
            { n: 5, t: 'Convidar equipe', s: '8 usuários' },
            { n: 6, t: 'Go live', s: 'Cutover + sync paralelo 7d' },
          ].map(s => (
            <div key={s.n} style={{ display: 'flex', gap: 12, padding: '12px 0', borderBottom: '1px solid var(--border)' }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                background: s.done ? 'var(--acc)' : s.active ? 'transparent' : 'var(--surface-2)',
                border: s.active ? '1.5px solid var(--acc)' : 'none',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-mono)', fontSize: 11.5, fontWeight: 600,
                color: s.done ? 'var(--acc-ink)' : s.active ? 'var(--acc)' : 'var(--text-muted)',
              }}>
                {s.done ? <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--acc-ink)" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg> : s.n}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12.5, fontWeight: s.active ? 600 : 500, color: s.active ? 'var(--text)' : s.done ? 'var(--text-dim)' : 'var(--text-muted)' }}>{s.t}</div>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 2, fontFamily: 'var(--font-mono)' }}>{s.s}</div>
              </div>
            </div>
          ))}

          <div className="sx-card" style={{ padding: 12, marginTop: 22 }}>
            <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>Economia anual estimada</div>
            <div className="sx-mono" style={{ fontSize: 24, fontWeight: 600, color: 'var(--acc)' }}>R$ 38.4k</div>
            <div style={{ fontSize: 10.5, color: 'var(--text-dim)', marginTop: 4, lineHeight: 1.4 }}>
              HubSpot Pro 8 seats × 12 meses vs. Fluxia Pro
            </div>
          </div>

          <div className="sx-card" style={{ padding: 12, marginTop: 10, background: 'var(--ai-soft)', borderColor: 'transparent' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Icon name="sparkle" size={12} stroke="var(--ai)" />
              <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--ai)' }}>Especialista Stackly</div>
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-dim)', lineHeight: 1.5 }}>
              Migração assistida por humano + IA disponível. R$ 1.890 fixo, garantia de cutover sem perda.
            </div>
            <button className="sx-btn sx-btn--sm" style={{ width: '100%', justifyContent: 'center', marginTop: 8 }}>Falar com especialista</button>
          </div>
        </aside>

        {/* CENTER — field mapping */}
        <div style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {/* Topbar */}
          <div style={{ padding: '18px 28px', borderBottom: '1px solid var(--border)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div>
                <h2 style={{ fontSize: 18, fontWeight: 600, margin: 0, letterSpacing: '-0.015em' }}>Mapeamento de campos</h2>
                <p style={{ fontSize: 12, color: 'var(--text-dim)', margin: '2px 0 0' }}>
                  IA mapeou automaticamente 47 campos · 0 conflitos · revise antes de importar
                </p>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button className="sx-btn sx-btn--sm sx-btn--ghost">Resetar</button>
                <button className="sx-btn sx-btn--sm">
                  <Icon name="sparkle" size={11} stroke="var(--ai)" />
                  Re-sugerir com IA
                </button>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 16, marginTop: 16, alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div className="sx-logo-tile" style={{ width: 32, height: 32, background: fromP.color[0], color: fromP.color[1], fontSize: 14 }}>{fromP.letter}</div>
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>De</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>HubSpot</div>
                </div>
              </div>
              <svg width="32" height="14" viewBox="0 0 32 14" fill="none"><path d="M2 7h26M22 2l6 5-6 5" stroke="var(--acc)" strokeWidth="1.8" /></svg>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <LogoTile p={toP} size={32} />
                <div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Para</div>
                  <div style={{ fontSize: 13, fontWeight: 600 }}>Fluxia</div>
                </div>
              </div>
              <div style={{ marginLeft: 'auto', display: 'flex', gap: 14, fontSize: 11.5 }}>
                <span><strong className="sx-mono" style={{ color: 'var(--text)' }}>14.287</strong> <span style={{ color: 'var(--text-muted)' }}>contatos</span></span>
                <span><strong className="sx-mono" style={{ color: 'var(--text)' }}>3.842</strong> <span style={{ color: 'var(--text-muted)' }}>deals</span></span>
                <span><strong className="sx-mono" style={{ color: 'var(--text)' }}>27.4k</strong> <span style={{ color: 'var(--text-muted)' }}>atividades</span></span>
              </div>
            </div>
          </div>

          <div style={{ flex: 1, overflow: 'auto' }}>
            {/* Field mapping table */}
            <div style={{ padding: '6px 28px' }}>
              {/* Section: contatos */}
              <div style={{
                padding: '14px 0 8px', display: 'flex', alignItems: 'center', gap: 10,
                position: 'sticky', top: 0, background: 'var(--bg)', zIndex: 1,
              }}>
                <span className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Contatos · 18 campos</span>
                <span className="sx-pill sx-pill--pos">100% mapeado</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  ['Email', 'email', 'auto', 'Email principal', 'email'],
                  ['First Name', 'first_name', 'auto', 'Nome', 'nome'],
                  ['Last Name', 'last_name', 'auto', 'Sobrenome', 'sobrenome'],
                  ['Phone Number', 'phone', 'auto', 'WhatsApp', 'whatsapp'],
                  ['Company', 'company', 'auto', 'Empresa', 'empresa'],
                  ['Lifecycle Stage', 'lifecyclestage', 'ai', 'Estágio do funil', 'estagio'],
                  ['HubSpot Score', 'hubspotscore', 'ai', 'Lead Score IA', 'score'],
                  ['Original Source', 'hs_analytics_source', 'manual', 'Canal de origem', 'origem'],
                ].map(([fromLabel, fromKey, mapping, toLabel, toKey], i) => (
                  <div key={i} className="sx-card" style={{
                    padding: '10px 14px',
                    display: 'grid', gridTemplateColumns: '1fr 100px 1fr 28px',
                    gap: 12, alignItems: 'center',
                  }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 500 }}>{fromLabel}</div>
                      <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{fromKey}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                      {mapping === 'auto' && (
                        <span className="sx-pill sx-pill--pos" style={{ fontSize: 9.5, padding: '2px 7px' }}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg>
                          auto
                        </span>
                      )}
                      {mapping === 'ai' && (
                        <span className="sx-pill" style={{ background: 'var(--ai-soft)', color: 'var(--ai)', borderColor: 'transparent', fontSize: 9.5, padding: '2px 7px' }}>
                          <Icon name="sparkle" size={9} stroke="var(--ai)" />
                          IA
                        </span>
                      )}
                      {mapping === 'manual' && (
                        <span className="sx-pill" style={{ background: 'rgba(255,209,102,0.16)', color: '#FFD166', borderColor: 'transparent', fontSize: 9.5, padding: '2px 7px' }}>
                          revisar
                        </span>
                      )}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'var(--surface-2)', borderRadius: 7, border: '1px solid var(--border)' }}>
                      <div>
                        <div style={{ fontSize: 12.5, fontWeight: 500 }}>{toLabel}</div>
                        <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{toKey}</div>
                      </div>
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9l6 6 6-6" /></svg>
                    </div>
                    <button style={{ background: 'transparent', border: 0, color: 'var(--text-muted)', cursor: 'pointer', padding: 4 }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="5" cy="12" r="1.5" /><circle cx="12" cy="12" r="1.5" /><circle cx="19" cy="12" r="1.5" /></svg>
                    </button>
                  </div>
                ))}
              </div>

              {/* Section: deals */}
              <div style={{ padding: '20px 0 8px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Deals · 14 campos</span>
                <span className="sx-pill sx-pill--pos">100% mapeado</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  ['Deal Name', 'dealname', 'auto', 'Nome da oportunidade', 'titulo'],
                  ['Amount', 'amount', 'auto', 'Valor (R$)', 'valor'],
                  ['Deal Stage', 'dealstage', 'ai', 'Etapa do funil', 'etapa'],
                ].map(([fromLabel, fromKey, mapping, toLabel, toKey], i) => (
                  <div key={i} className="sx-card" style={{
                    padding: '10px 14px',
                    display: 'grid', gridTemplateColumns: '1fr 100px 1fr 28px',
                    gap: 12, alignItems: 'center', opacity: 0.7,
                  }}>
                    <div>
                      <div style={{ fontSize: 12.5, fontWeight: 500 }}>{fromLabel}</div>
                      <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{fromKey}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span className="sx-pill sx-pill--pos" style={{ fontSize: 9.5, padding: '2px 7px' }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg>
                        {mapping}
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 10px', background: 'var(--surface-2)', borderRadius: 7, border: '1px solid var(--border)' }}>
                      <div>
                        <div style={{ fontSize: 12.5, fontWeight: 500 }}>{toLabel}</div>
                        <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>{toKey}</div>
                      </div>
                    </div>
                    <div />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div style={{ padding: '14px 28px', borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'var(--bg)' }}>
            <button className="sx-btn sx-btn--ghost">← Voltar</button>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                <strong style={{ color: 'var(--pos)' }}>47/47</strong> campos prontos
              </span>
              <button className="sx-btn sx-btn--primary">
                Iniciar importação →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT — diff preview */}
        <aside style={{ borderLeft: '1px solid var(--border)', padding: 18, background: 'var(--bg-2)', overflow: 'auto' }}>
          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10 }}>Pré-visualização · 1º registro</div>

          <div className="sx-card" style={{ padding: 14, marginBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div className="sx-avatar">CM</div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>Camila Martins</div>
                <div className="sx-mono" style={{ fontSize: 10.5, color: 'var(--text-muted)' }}>camila@studiobela.com.br</div>
              </div>
            </div>
            {[
              ['Empresa', 'Studio Bela', 'Studio Bela'],
              ['WhatsApp', '+55 11 9 8...', '+55 11 9 8...'],
              ['Estágio', 'Lead', 'Qualificado'],
              ['Lead Score', '67', '74'],
              ['Origem', 'organic_search', 'orgânico'],
              ['Tags', 'salao, sp', 'salão · SP · IA'],
            ].map(([k, from, to], i) => {
              const changed = from !== to;
              return (
                <div key={k} style={{ padding: '6px 0', borderBottom: i < 5 ? '1px solid var(--border)' : 0 }}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: 3 }}>{k}</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11.5 }}>
                    <span style={{ color: changed ? 'var(--neg)' : 'var(--text-dim)', textDecoration: changed ? 'line-through' : 'none' }}>{from}</span>
                    {changed && <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>}
                    {changed && <span style={{ color: 'var(--pos)', fontWeight: 600 }}>{to}</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="sx-mono" style={{ fontSize: 10, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '6px 0 10px' }}>O que vai acontecer</div>
          {[
            { t: 'Sync em paralelo por 7 dias', d: 'HubSpot e Fluxia recebem dados ao mesmo tempo' },
            { t: 'Histórico preservado', d: 'Todas as 27.4k atividades migradas com timestamps originais' },
            { t: 'Automações recriadas', d: '12 workflows traduzidos para Fluxia. 3 ganham IA' },
            { t: 'Sem downtime', d: 'Equipe continua usando HubSpot durante a migração' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: i < 3 ? '1px solid var(--border)' : 0 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, background: 'var(--acc-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--acc)" strokeWidth="3"><path d="M5 12l5 5 9-11" /></svg>
              </div>
              <div>
                <div style={{ fontSize: 11.5, fontWeight: 500 }}>{s.t}</div>
                <div style={{ fontSize: 10.5, color: 'var(--text-muted)', marginTop: 1, lineHeight: 1.45 }}>{s.d}</div>
              </div>
            </div>
          ))}
        </aside>
      </div>
    </div>
  );
};

window.Screen_Migrate = Screen_Migrate;
