-- Seed Categories
INSERT INTO categories (slug, name, icon, count) VALUES
('crm', 'CRM & Vendas', 'users', 342),
('whatsapp', 'Atendimento WhatsApp', 'message-circle', 184),
('erp', 'ERP & Financeiro', 'pie-chart', 215),
('marketing', 'Marketing', 'target', 412),
('agentes-ia', 'Agentes IA', 'bot', 89),
('pagamentos', 'Pagamentos', 'credit-card', 56),
('analytics', 'Analytics', 'bar-chart', 120),
('agenda', 'Agenda & Reservas', 'calendar', 75)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  icon = EXCLUDED.icon,
  count = EXCLUDED.count;

-- Seed SaaS Products
INSERT INTO saas_products (slug, name, tag, "desc", cat, price, score, stars, reviews, tags, is_published) VALUES
('fluxia', 'Fluxia', 'CRM com IA para vendas', 'Pipeline visual, WhatsApp nativo e relatórios em tempo real.', 'crm', 'R$ 49/mês', 94, 4.9, 1240, ARRAY['CRM', 'WhatsApp', 'IA'], true),
('zapcrm', 'ZapCRM', 'CRM direto no WhatsApp', 'Gerencie suas vendas sem sair do WhatsApp.', 'crm', 'R$ 89/mês', 85, 4.6, 850, ARRAY['CRM', 'WhatsApp'], true),
('caixa', 'Caixa ERP', 'Gestão financeira completa', 'Emissão de notas, fluxo de caixa e integração bancária.', 'erp', 'R$ 199/mês', 91, 4.8, 430, ARRAY['ERP', 'Financeiro'], true),
('salonpro', 'SalonPro', 'Gestão para salões de beleza', 'Agenda online com confirmação automática.', 'agenda', 'R$ 79/mês', 92, 4.7, 320, ARRAY['Agenda', 'Salão'], true),
('leadgrid', 'LeadGrid', 'Criação de landing pages', 'Converta mais com páginas ultra-rápidas.', 'marketing', 'R$ 129/mês', 88, 4.5, 610, ARRAY['Landing Pages', 'Marketing'], true),
('paganow', 'PagaNow', 'Gateway de pagamentos PIX', 'Cobrança recorrente PIX + cartão com splits automáticos.', 'pagamentos', '1.99%', 95, 4.9, 2100, ARRAY['Pagamentos', 'PIX'], true),
('agentik', 'Agentik', 'Criação de agentes IA', 'Plataforma no-code para criar agentes de atendimento.', 'agentes-ia', 'R$ 299/mês', 90, 4.8, 140, ARRAY['IA', 'Agentes'], true),
('notion-alt', 'DocBase', 'Base de conhecimento', 'Alternativa ao Notion com IA integrada.', 'agentes-ia', 'R$ 39/mês', 87, 4.6, 520, ARRAY['Docs', 'Produtividade'], true),
('oficina-erp', 'MechManager', 'ERP para oficinas', 'Orçamentos, OS e controle de estoque.', 'erp', 'R$ 149/mês', 89, 4.7, 180, ARRAY['ERP', 'Oficina'], true),
('pulse', 'Pulse', 'Analytics em tempo real', 'Dashboards dinâmicos conectados a todas as suas fontes de dados.', 'analytics', 'R$ 399/mês', 93, 4.8, 275, ARRAY['BI', 'Analytics'], true),
('clinic-flow', 'ClinicFlow', 'Gestão de clínicas', 'Prontuário eletrônico + agendamento + teleconsulta.', 'agenda', 'R$ 149/mês', 96, 4.9, 410, ARRAY['Clínica', 'Saúde'], true),
('hr-sync', 'HRSync', 'Gestão de RH', 'Folha de pagamento e controle de ponto.', 'erp', 'R$ 249/mês', 86, 4.5, 330, ARRAY['RH'], true),
('stock-pro', 'StockPro', 'Controle de estoque', 'Gestão de inventário multi-loja.', 'erp', 'R$ 199/mês', 88, 4.6, 220, ARRAY['Estoque'], true),
('mail-boost', 'MailBoost', 'Email marketing automatizado', 'Criação de campanhas e réguas de relacionamento.', 'marketing', 'R$ 119/mês', 89, 4.7, 760, ARRAY['Email', 'Marketing'], true),
('voxa', 'Voxa', 'Bot WhatsApp Inteligente', 'Atendimento omnichannel automatizado com IA.', 'whatsapp', 'R$ 69/mês', 92, 4.8, 920, ARRAY['WhatsApp', 'IA', 'Bot'], true)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  tag = EXCLUDED.tag,
  "desc" = EXCLUDED."desc",
  cat = EXCLUDED.cat,
  price = EXCLUDED.price,
  score = EXCLUDED.score,
  stars = EXCLUDED.stars,
  reviews = EXCLUDED.reviews,
  tags = EXCLUDED.tags,
  is_published = EXCLUDED.is_published;
