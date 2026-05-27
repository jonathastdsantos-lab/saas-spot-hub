import React, { useState } from "react";
import { SAAS, CATEGORIES } from "../../lib/mockData";
import { TopNav, Icon, LogoTile, Stars, Spark, Logo, IOSDevice, ScoreGauge } from "../SharedUI";
import { supabase } from "../../lib/supabase";

// Tela 2: Consultor IA — chat conversacional com recomendações
const Screen_Consultor = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: {
        message: "Olá! Sou a Stackly, sua consultora de tecnologia. Me conte um pouco sobre o seu negócio (segmento, tamanho da equipe e orçamento) e eu montarei a stack ideal para você.",
        recommendations: [],
        totalMonthlyCost: ""
      }
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [consultationsUsed, setConsultationsUsed] = useState(0);
  const FREE_LIMIT = 3;
  const [showPaywall, setShowPaywall] = useState(false);

  // Contexto mockado para o MVP
  const [context, setContext] = useState({
    segment: "Clínica de estética",
    location: "São Paulo, SP",
    teamSize: "4 pessoas",
    revenue: "R$ 80k/mês esperado",
    budget: "R$ 500/mês",
    stage: "Abertura"
  });

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    if (consultationsUsed >= FREE_LIMIT) {
      setShowPaywall(true);
      return;
    }

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);
    setConsultationsUsed(prev => prev + 1);

    try {
      // In a real scenario, map internal messages to API format:
      const apiMessages = [...messages, userMessage].map(m => ({
        role: m.role,
        content: typeof m.content === 'string' ? m.content : JSON.stringify(m.content)
      }));

      const { data, error } = await supabase.functions.invoke('ai-consultant', {
        body: { messages: apiMessages, context }
      });

      if (error) throw error;

      if (data) {
        setMessages((prev) => [...prev, { role: "assistant", content: data }]);
      }
    } catch (err) {
      console.error("Erro ao chamar consultor IA:", err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: { message: "Desculpe, encontrei um erro ao processar sua solicitação.", recommendations: [] } }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sx-screen">
      <TopNav active="consultor" />
      <div style={{ display: "grid", gridTemplateColumns: "260px 1fr 320px", height: "calc(100% - 53px)" }}>
        {/* SIDEBAR — conversas */}
        <div
          style={{
            borderRight: "1px solid var(--border)",
            padding: 16,
            background: "var(--bg-2)",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <button className="sx-btn sx-btn--primary" style={{ justifyContent: "center", marginBottom: 14 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12h14" />
            </svg>
            Nova conversa
          </button>
          <div
            className="sx-mono"
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 8,
              padding: "0 6px",
            }}
          >
            Hoje
          </div>
          {[
            { t: "Stack para clínica de estética", sub: "CRM + WhatsApp + Agenda", active: true },
            { t: "Alternativas ao HubSpot", sub: "6 opções comparadas" },
            { t: "ERP barato para SMB", sub: "Caixa.AI vs Conta Azul" },
          ].map((c, i) => (
            <button
              key={i}
              style={{
                textAlign: "left",
                padding: "10px 12px",
                borderRadius: 8,
                marginBottom: 2,
                background: c.active ? "var(--surface-2)" : "transparent",
                border: 0,
                color: "var(--text)",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: 12.5, fontWeight: 500 }}>{c.t}</div>
              <div style={{ fontSize: 10.5, color: "var(--text-muted)", marginTop: 1, fontFamily: "var(--font-mono)" }}>
                {c.sub}
              </div>
            </button>
          ))}
          <div
            className="sx-mono"
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "14px 0 8px",
              padding: "0 6px",
            }}
          >
            Esta semana
          </div>
          {[
            { t: "WhatsApp para imobiliária" },
            { t: "Reduzir custo da stack" },
            { t: "Migrar do Trello" },
            { t: "Analytics no-SQL" },
          ].map((c, i) => (
            <button
              key={i}
              style={{
                textAlign: "left",
                padding: "8px 12px",
                borderRadius: 8,
                background: "transparent",
                border: 0,
                color: "var(--text-dim)",
                cursor: "pointer",
                fontSize: 12,
              }}
            >
              {c.t}
            </button>
          ))}

          <div
            style={{
              marginTop: "auto",
              padding: 12,
              background: "var(--surface)",
              borderRadius: 10,
              border: "1px solid var(--border)",
            }}
          >
            <div style={{ fontSize: 11, color: "var(--text-dim)", marginBottom: 6 }}>Consultas restantes (Free)</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <strong className="sx-mono" style={{ fontSize: 16, color: consultationsUsed >= FREE_LIMIT ? "var(--neg)" : "inherit" }}>
                {FREE_LIMIT - consultationsUsed}<span style={{ color: "var(--text-muted)", fontSize: 12, fontWeight: 400 }}>/{FREE_LIMIT}</span>
              </strong>
              <a href="/pricing" className="sx-btn sx-btn--sm">Upgrade</a>
            </div>
          </div>
        </div>

        {/* CHAT thread */}
        <div style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
          <div
            style={{
              padding: "14px 28px",
              borderBottom: "1px solid var(--border)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>Nova Consulta</div>
              <div style={{ fontSize: 11, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                {context.segment} · {context.teamSize} · {context.revenue} · {context.location}
              </div>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button className="sx-btn sx-btn--sm sx-btn--ghost">Compartilhar</button>
              <button className="sx-btn sx-btn--sm">Salvar stack</button>
            </div>
          </div>

          <div
            style={{
              flex: 1,
              overflowY: "auto",
              padding: "24px 32px",
              display: "flex",
              flexDirection: "column",
              gap: 22,
            }}
          >
            {messages.map((msg, idx) => (
              <div key={idx} style={{ alignSelf: msg.role === "user" ? "flex-end" : "flex-start", maxWidth: msg.role === "user" ? "78%" : "100%" }}>
                {msg.role === "user" ? (
                  <div
                    style={{
                      background: "var(--surface-2)",
                      padding: "12px 16px",
                      borderRadius: "14px 14px 4px 14px",
                      fontSize: 13.5,
                      lineHeight: 1.55,
                      border: "1px solid var(--border)",
                    }}
                  >
                    {msg.content}
                  </div>
                ) : (
                  <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 8,
                        background: "var(--ai)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="sparkle" size={14} stroke="#fff" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13.5, lineHeight: 1.6, color: "var(--text)" }}>
                        {msg.content.message}
                      </div>

                      {msg.content.recommendations && msg.content.recommendations.length > 0 && (
                        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
                          {msg.content.recommendations.map((rec, i) => {
                            // Encontrar o mock correspondente (se existir) para pegar o ícone
                            const mockP = SAAS.find(s => s.id === rec.saasId) || { name: rec.name, cat: 'SaaS', color: 'var(--acc)' };
                            return (
                              <div
                                key={i}
                                className="sx-card"
                                style={{
                                  padding: 14,
                                  display: "grid",
                                  gridTemplateColumns: "40px 1fr auto",
                                  gap: 14,
                                  alignItems: "center",
                                }}
                              >
                                <LogoTile p={mockP} />
                                <div>
                                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                                    <span style={{ fontSize: 13.5, fontWeight: 600 }}>{rec.name}</span>
                                    <span className="sx-pill sx-pill--acc">
                                      <Icon name="sparkle" size={9} stroke="var(--acc)" /> {rec.matchPercentage}% match
                                    </span>
                                  </div>
                                  <div style={{ fontSize: 12, color: "var(--text-dim)", marginTop: 3, lineHeight: 1.45 }}>
                                    {rec.reason}
                                  </div>
                                </div>
                                <div style={{ textAlign: "right" }}>
                                  <button className="sx-btn sx-btn--sm" style={{ marginTop: 6 }}>
                                    Adicionar
                                  </button>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {msg.content.totalMonthlyCost && (
                        <div
                          style={{
                            marginTop: 12,
                            padding: 14,
                            borderRadius: 12,
                            background: "var(--surface)",
                            border: "1px dashed var(--border-strong)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <div>
                            <div
                              style={{
                                fontSize: 11,
                                color: "var(--text-muted)",
                                textTransform: "uppercase",
                                letterSpacing: "0.06em",
                                fontFamily: "var(--font-mono)",
                              }}
                            >
                              Custo mensal estimado
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginTop: 4 }}>
                              <span className="sx-mono" style={{ fontSize: 26, fontWeight: 600 }}>
                                {msg.content.totalMonthlyCost}
                              </span>
                            </div>
                          </div>
                          <button className="sx-btn sx-btn--primary">
                            Contratar stack completa
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            {isLoading && (
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div
                  style={{
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: "var(--ai)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <Icon name="sparkle" size={14} stroke="#fff" />
                </div>
                <div style={{ fontSize: 13.5, color: "var(--text-muted)", display: "flex", alignItems: "center", height: 28 }}>
                  Analisando contexto...
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <div style={{ padding: "16px 32px 22px", borderTop: "1px solid var(--border)" }}>
            <div className="sx-search" style={{ padding: "6px 6px 6px 18px", display: 'flex' }}>
              <Icon name="sparkle" size={14} stroke="var(--ai)" />
              <input 
                placeholder="Pergunte algo sobre a stack, peça comparações…" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                disabled={isLoading}
                style={{ flex: 1, background: 'transparent', border: 'none', color: '#fff', outline: 'none' }}
              />
              <button className="sx-btn sx-btn--sm sx-btn--ghost" title="Anexar">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5l-8.5 8.5a5 5 0 01-7-7L14 4.5a3.5 3.5 0 015 5L10 18.5a2 2 0 01-3-3L15 7" />
                </svg>
              </button>
              <button 
                className="sx-btn sx-btn--primary sx-btn--sm" 
                style={{ background: "var(--ai)", color: "#fff" }}
                onClick={sendMessage}
                disabled={isLoading}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </button>
            </div>
            <div style={{ display: "flex", gap: 6, marginTop: 10, flexWrap: "wrap" }}>
              {[
                "Compare Caixa.AI vs Conta Azul",
                "Adicione marketing para Instagram",
                "Reduzir custos em 20%",
                "Mostrar integrações entre eles",
              ].map((s) => (
                <button 
                  key={s} 
                  className="sx-chip" 
                  style={{ cursor: "pointer", fontFamily: "var(--font-display)" }}
                  onClick={() => { setInput(s); }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* CONTEXT panel (right) */}
        <div
          style={{ borderLeft: "1px solid var(--border)", padding: 18, background: "var(--bg-2)", overflow: "hidden" }}
        >
          <div
            className="sx-mono"
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            Contexto do seu negócio
          </div>
          <div className="sx-card" style={{ padding: 14 }}>
            {[
              ["Segmento", context.segment],
              ["Localização", context.location],
              ["Time", context.teamSize],
              ["Faturamento", context.revenue],
              ["Orçamento SaaS", context.budget],
              ["Estágio", context.stage],
            ].map(([k, v]) => (
              <div
                key={k}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  padding: "6px 0",
                  borderBottom: "1px solid var(--border)",
                  fontSize: 12,
                }}
              >
                <span style={{ color: "var(--text-muted)" }}>{k}</span>
                <span style={{ color: "var(--text)", fontWeight: 500, textAlign: "right" }}>{v}</span>
              </div>
            ))}
            <button
              className="sx-btn sx-btn--sm sx-btn--ghost"
              style={{ width: "100%", marginTop: 10, justifyContent: "center" }}
            >
              Editar contexto
            </button>
          </div>

          <div
            className="sx-mono"
            style={{
              fontSize: 10,
              color: "var(--text-muted)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              margin: "20px 0 10px",
            }}
          >
            Sua stack sugerida (Fixa temporária)
          </div>
          <div className="sx-card" style={{ padding: 12 }}>
            {[SAAS[10], SAAS[3], SAAS[14], SAAS[5]].map((p, i) => (
              <div
                key={p.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "8px 4px",
                  borderBottom: i < 3 ? "1px solid var(--border)" : "none",
                }}
              >
                <LogoTile p={p} size={26} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{p.name}</div>
                  <div style={{ fontSize: 10, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                    {p.cat}
                  </div>
                </div>
                <button style={{ background: "transparent", border: 0, color: "var(--text-muted)", cursor: "pointer" }}>
                  ×
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showPaywall && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.8)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, backdropFilter: "blur(4px)" }}>
          <div className="sx-card" style={{ padding: 40, maxWidth: 440, textAlign: "center", border: "1px solid var(--acc)" }}>
            <div style={{ width: 48, height: 48, borderRadius: 24, background: "var(--acc-soft)", color: "var(--acc)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px" }}>
              <Icon name="sparkle" size={24} />
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 600, marginBottom: 12 }}>Limite de consultas atingido</h2>
            <p style={{ color: "var(--text-dim)", lineHeight: 1.5, marginBottom: 24 }}>
              Você utilizou suas {FREE_LIMIT} interações gratuitas com a Consultora IA. Faça o upgrade para o Stackly Pro e tenha consultas ilimitadas para construir a stack perfeita.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <button className="sx-btn sx-btn--ghost" style={{ flex: 1, justifyContent: "center" }} onClick={() => setShowPaywall(false)}>
                Agora não
              </button>
              <a href="/pricing" className="sx-btn sx-btn--primary" style={{ flex: 1, justifyContent: "center" }}>
                Ver Planos
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Screen_Consultor;
