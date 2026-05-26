import { SaasProduct, Category } from '../types';

export const CATEGORIES: Category[] = [
  { id: 'c1', slug: 'crm', name: 'CRM & Vendas', icon: 'users', count: 342 },
  { id: 'c2', slug: 'whatsapp', name: 'Atendimento WhatsApp', icon: 'message-circle', count: 184 },
  { id: 'c3', slug: 'erp', name: 'ERP & Financeiro', icon: 'pie-chart', count: 215 },
  { id: 'c4', slug: 'marketing', name: 'Marketing', icon: 'target', count: 412 },
  { id: 'c5', slug: 'agentes-ia', name: 'Agentes IA', icon: 'bot', count: 89 },
  { id: 'c6', slug: 'pagamentos', name: 'Pagamentos', icon: 'credit-card', count: 56 },
  { id: 'c7', slug: 'analytics', name: 'Analytics', icon: 'bar-chart', count: 120 },
  { id: 'c8', slug: 'agenda', name: 'Agenda & Reservas', icon: 'calendar', count: 75 },
];

export const SAAS: SaasProduct[] = [
  {
    id: 's1', slug: 'fluxia', name: 'Fluxia', tag: 'CRM com IA para vendas',
    desc: 'Pipeline visual, WhatsApp nativo e relatórios em tempo real.',
    cat: 'CRM', price: 'R$ 49/mês', score: 94, stars: 4.9, reviews: 1240, tags: ['CRM', 'WhatsApp', 'IA'],
  },
  {
    id: 's2', slug: 'zapcrm', name: 'ZapCRM', tag: 'CRM direto no WhatsApp',
    desc: 'Gerencie suas vendas sem sair do WhatsApp.',
    cat: 'CRM', price: 'R$ 89/mês', score: 85, stars: 4.6, reviews: 850, tags: ['CRM', 'WhatsApp'],
  },
  {
    id: 's3', slug: 'caixa', name: 'Caixa ERP', tag: 'Gestão financeira completa',
    desc: 'Emissão de notas, fluxo de caixa e integração bancária.',
    cat: 'ERP', price: 'R$ 199/mês', score: 91, stars: 4.8, reviews: 430, tags: ['ERP', 'Financeiro'],
  },
  {
    id: 's4', slug: 'salonpro', name: 'SalonPro', tag: 'Gestão para salões de beleza',
    desc: 'Agenda online com confirmação automática.',
    cat: 'Agenda', price: 'R$ 79/mês', score: 92, stars: 4.7, reviews: 320, tags: ['Agenda', 'Salão'],
  },
  {
    id: 's5', slug: 'leadgrid', name: 'LeadGrid', tag: 'Criação de landing pages',
    desc: 'Converta mais com páginas ultra-rápidas.',
    cat: 'Marketing', price: 'R$ 129/mês', score: 88, stars: 4.5, reviews: 610, tags: ['Landing Pages', 'Marketing'],
  },
  {
    id: 's6', slug: 'paganow', name: 'PagaNow', tag: 'Gateway de pagamentos PIX',
    desc: 'Cobrança recorrente PIX + cartão com splits automáticos.',
    cat: 'Pagamentos', price: '1.99%', score: 95, stars: 4.9, reviews: 2100, tags: ['Pagamentos', 'PIX'],
  },
  {
    id: 's7', slug: 'agentik', name: 'Agentik', tag: 'Criação de agentes IA',
    desc: 'Plataforma no-code para criar agentes de atendimento.',
    cat: 'IA', price: 'R$ 299/mês', score: 90, stars: 4.8, reviews: 140, tags: ['IA', 'Agentes'],
  },
  {
    id: 's8', slug: 'notion-alt', name: 'DocBase', tag: 'Base de conhecimento',
    desc: 'Alternativa ao Notion com IA integrada.',
    cat: 'Produtividade', price: 'R$ 39/mês', score: 87, stars: 4.6, reviews: 520, tags: ['Docs', 'Produtividade'],
  },
  {
    id: 's9', slug: 'oficina-erp', name: 'MechManager', tag: 'ERP para oficinas',
    desc: 'Orçamentos, OS e controle de estoque.',
    cat: 'ERP', price: 'R$ 149/mês', score: 89, stars: 4.7, reviews: 180, tags: ['ERP', 'Oficina'],
  },
  {
    id: 's10', slug: 'pulse', name: 'Pulse', tag: 'Analytics em tempo real',
    desc: 'Dashboards dinâmicos conectados a todas as suas fontes de dados.',
    cat: 'Analytics', price: 'R$ 399/mês', score: 93, stars: 4.8, reviews: 275, tags: ['BI', 'Analytics'],
  },
  {
    id: 's11', slug: 'clinic-flow', name: 'ClinicFlow', tag: 'Gestão de clínicas',
    desc: 'Prontuário eletrônico + agendamento + teleconsulta.',
    cat: 'Saúde', price: 'R$ 149/mês', score: 96, stars: 4.9, reviews: 410, tags: ['Clínica', 'Saúde'],
  },
  {
    id: 's12', slug: 'hr-sync', name: 'HRSync', tag: 'Gestão de RH',
    desc: 'Folha de pagamento e controle de ponto.',
    cat: 'RH', price: 'R$ 249/mês', score: 86, stars: 4.5, reviews: 330, tags: ['RH'],
  },
  {
    id: 's13', slug: 'stock-pro', name: 'StockPro', tag: 'Controle de estoque',
    desc: 'Gestão de inventário multi-loja.',
    cat: 'ERP', price: 'R$ 199/mês', score: 88, stars: 4.6, reviews: 220, tags: ['Estoque'],
  },
  {
    id: 's14', slug: 'mail-boost', name: 'MailBoost', tag: 'Email marketing automatizado',
    desc: 'Criação de campanhas e réguas de relacionamento.',
    cat: 'Marketing', price: 'R$ 119/mês', score: 89, stars: 4.7, reviews: 760, tags: ['Email', 'Marketing'],
  },
  {
    id: 's15', slug: 'voxa', name: 'Voxa', tag: 'Bot WhatsApp Inteligente',
    desc: 'Atendimento omnichannel automatizado com IA.',
    cat: 'WhatsApp', price: 'R$ 69/mês', score: 92, stars: 4.8, reviews: 920, tags: ['WhatsApp', 'IA', 'Bot'],
  }
];
