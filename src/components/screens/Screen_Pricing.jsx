import React from "react";
import { TopNav, Icon } from "../SharedUI";

const Screen_Pricing = () => {
  return (
    <div className="sx-screen">
      <TopNav active="pricing" />
      <div
        style={{
          padding: "60px 40px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "calc(100% - 53px)",
          overflowY: "auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 60, maxWidth: 800 }}>
          <div className="sx-mono" style={{ color: "var(--acc)", fontSize: 16, marginBottom: 16, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Planos Stackly
          </div>
          <h1 style={{ fontSize: 56, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: 24 }}>
            Invista na infraestrutura do seu negócio.
          </h1>
          <p style={{ fontSize: 20, color: "var(--text-dim)", lineHeight: 1.5 }}>
            Do uso gratuito para descoberta até o plano profissional com Consultoria IA Ilimitada e acesso ao Stack Studio.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, maxWidth: 1000, width: "100%" }}>
          {/* Free Plan */}
          <div className="sx-card" style={{ padding: 40, display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 24, fontWeight: 600, marginBottom: 8 }}>Stackly Free</div>
            <div style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 24 }}>
              Para explorar o ecossistema de SaaS brasileiro.
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 32 }}>
              <span style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.02em" }}>R$ 0</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>/mês</span>
            </div>
            
            <button className="sx-btn sx-btn--ghost" style={{ width: "100%", justifyContent: "center", padding: "14px 0", fontSize: 15, marginBottom: 32 }}>
              Seu plano atual
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Acesso a todo diretório de SaaS",
                "Comparador de ferramentas básico",
                "Comunidade e Reviews",
                "3 consultas/mês no Consultor IA",
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                  <Icon name="check" size={16} stroke="var(--text-muted)" />
                  <span style={{ color: "var(--text-dim)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pro Plan */}
          <div className="sx-card" style={{ padding: 40, display: "flex", flexDirection: "column", borderColor: "var(--acc)", background: "linear-gradient(180deg, var(--acc-soft), transparent 30%), var(--surface)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <div style={{ fontSize: 24, fontWeight: 600, color: "var(--acc)" }}>Stackly Pro</div>
              <span className="sx-pill sx-pill--acc" style={{ fontSize: 12 }}>Recomendado</span>
            </div>
            <div style={{ fontSize: 14, color: "var(--text-dim)", marginBottom: 24 }}>
              Para decisões técnicas avançadas e criação de stack.
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 32 }}>
              <span style={{ fontSize: 48, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--text)" }}>R$ 39</span>
              <span style={{ fontSize: 14, color: "var(--text-muted)" }}>/mês</span>
            </div>
            
            <button className="sx-btn sx-btn--primary" style={{ width: "100%", justifyContent: "center", padding: "14px 0", fontSize: 15, marginBottom: 32, fontWeight: 600 }}>
              Fazer upgrade agora
            </button>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Consultas ilimitadas no Consultor IA",
                "Acesso exclusivo ao Stack Studio",
                "Insights avançados de mercado e pricing",
                "Integração nativa de Agentes (Em breve)",
                "Suporte prioritário"
              ].map((feat, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                  <Icon name="check" size={16} stroke="var(--acc)" />
                  <span style={{ color: "var(--text)" }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 60, textAlign: "center", maxWidth: 600, paddingBottom: 60 }}>
          <div style={{ fontSize: 20, fontWeight: 500, marginBottom: 12 }}>É dono de SaaS e quer anunciar?</div>
          <div style={{ fontSize: 15, color: "var(--text-dim)", marginBottom: 24 }}>
            Oferecemos planos de patrocínio, destaque nas buscas e modelo de CPA (afiliados) com comissionamento customizado.
          </div>
          <button className="sx-btn sx-btn--ghost" style={{ margin: "0 auto" }}>Falar com nosso time de Parcerias</button>
        </div>
      </div>
    </div>
  );
};

export default Screen_Pricing;
