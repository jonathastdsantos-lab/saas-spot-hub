const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Faltam variáveis de ambiente no .env.local');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const CATEGORIES = [
  { slug: 'crm', name: 'CRM & Vendas', icon: 'users', count: 342 },
  { slug: 'whatsapp', name: 'Atendimento WhatsApp', icon: 'message-circle', count: 184 },
  { slug: 'erp', name: 'ERP & Financeiro', icon: 'pie-chart', count: 215 },
  { slug: 'marketing', name: 'Marketing', icon: 'target', count: 412 },
  { slug: 'agentes-ia', name: 'Agentes IA', icon: 'bot', count: 89 },
  { slug: 'pagamentos', name: 'Pagamentos', icon: 'credit-card', count: 56 },
  { slug: 'analytics', name: 'Analytics', icon: 'bar-chart', count: 120 },
  { slug: 'agenda', name: 'Agenda & Reservas', icon: 'calendar', count: 75 },
];

const SAAS = [
  {
    slug: 'fluxia', name: 'Fluxia', tag: 'CRM com IA para vendas',
    desc: 'Pipeline visual, WhatsApp nativo e relatórios em tempo real.',
    cat: 'crm', price: 'R$ 49/mês', score: 94, stars: 4.9, reviews: 1240, tags: ['CRM', 'WhatsApp', 'IA'],
  },
  {
    slug: 'zapcrm', name: 'ZapCRM', tag: 'CRM direto no WhatsApp',
    desc: 'Gerencie suas vendas sem sair do WhatsApp.',
    cat: 'crm', price: 'R$ 89/mês', score: 85, stars: 4.6, reviews: 850, tags: ['CRM', 'WhatsApp'],
  },
  {
    slug: 'caixa', name: 'Caixa ERP', tag: 'Gestão financeira completa',
    desc: 'Emissão de notas, fluxo de caixa e integração bancária.',
    cat: 'erp', price: 'R$ 199/mês', score: 91, stars: 4.8, reviews: 430, tags: ['ERP', 'Financeiro'],
  },
  {
    slug: 'salonpro', name: 'SalonPro', tag: 'Gestão para salões de beleza',
    desc: 'Agenda online com confirmação automática.',
    cat: 'agenda', price: 'R$ 79/mês', score: 92, stars: 4.7, reviews: 320, tags: ['Agenda', 'Salão'],
  },
  {
    slug: 'leadgrid', name: 'LeadGrid', tag: 'Criação de landing pages',
    desc: 'Converta mais com páginas ultra-rápidas.',
    cat: 'marketing', price: 'R$ 129/mês', score: 88, stars: 4.5, reviews: 610, tags: ['Landing Pages', 'Marketing'],
  },
  {
    slug: 'paganow', name: 'PagaNow', tag: 'Gateway de pagamentos PIX',
    desc: 'Cobrança recorrente PIX + cartão com splits automáticos.',
    cat: 'pagamentos', price: '1.99%', score: 95, stars: 4.9, reviews: 2100, tags: ['Pagamentos', 'PIX'],
  },
  {
    slug: 'agentik', name: 'Agentik', tag: 'Criação de agentes IA',
    desc: 'Plataforma no-code para criar agentes de atendimento.',
    cat: 'agentes-ia', price: 'R$ 299/mês', score: 90, stars: 4.8, reviews: 140, tags: ['IA', 'Agentes'],
  },
  {
    slug: 'notion-alt', name: 'DocBase', tag: 'Base de conhecimento',
    desc: 'Alternativa ao Notion com IA integrada.',
    cat: 'agentes-ia', price: 'R$ 39/mês', score: 87, stars: 4.6, reviews: 520, tags: ['Docs', 'Produtividade'],
  },
  {
    slug: 'oficina-erp', name: 'MechManager', tag: 'ERP para oficinas',
    desc: 'Orçamentos, OS e controle de estoque.',
    cat: 'erp', price: 'R$ 149/mês', score: 89, stars: 4.7, reviews: 180, tags: ['ERP', 'Oficina'],
  },
  {
    slug: 'pulse', name: 'Pulse', tag: 'Analytics em tempo real',
    desc: 'Dashboards dinâmicos conectados a todas as suas fontes de dados.',
    cat: 'analytics', price: 'R$ 399/mês', score: 93, stars: 4.8, reviews: 275, tags: ['BI', 'Analytics'],
  },
  {
    slug: 'clinic-flow', name: 'ClinicFlow', tag: 'Gestão de clínicas',
    desc: 'Prontuário eletrônico + agendamento + teleconsulta.',
    cat: 'agenda', price: 'R$ 149/mês', score: 96, stars: 4.9, reviews: 410, tags: ['Clínica', 'Saúde'],
  },
  {
    slug: 'hr-sync', name: 'HRSync', tag: 'Gestão de RH',
    desc: 'Folha de pagamento e controle de ponto.',
    cat: 'erp', price: 'R$ 249/mês', score: 86, stars: 4.5, reviews: 330, tags: ['RH'],
  },
  {
    slug: 'stock-pro', name: 'StockPro', tag: 'Controle de estoque',
    desc: 'Gestão de inventário multi-loja.',
    cat: 'erp', price: 'R$ 199/mês', score: 88, stars: 4.6, reviews: 220, tags: ['Estoque'],
  },
  {
    slug: 'mail-boost', name: 'MailBoost', tag: 'Email marketing automatizado',
    desc: 'Criação de campanhas e réguas de relacionamento.',
    cat: 'marketing', price: 'R$ 119/mês', score: 89, stars: 4.7, reviews: 760, tags: ['Email', 'Marketing'],
  },
  {
    slug: 'voxa', name: 'Voxa', tag: 'Bot WhatsApp Inteligente',
    desc: 'Atendimento omnichannel automatizado com IA.',
    cat: 'whatsapp', price: 'R$ 69/mês', score: 92, stars: 4.8, reviews: 920, tags: ['WhatsApp', 'IA', 'Bot'],
  }
];

async function seed() {
  console.log('Populando Categorias...');
  for (const cat of CATEGORIES) {
    const { error } = await supabase
      .from('categories')
      .upsert(cat, { onConflict: 'slug' });
    if (error) console.error(`Erro ao inserir categoria ${cat.name}:`, error.message);
  }
  console.log('Categorias populadas com sucesso!');

  console.log('Populando SaaS Products...');
  for (const saas of SAAS) {
    const { error } = await supabase
      .from('saas_products')
      .upsert({ ...saas, is_published: true }, { onConflict: 'slug' });
    if (error) console.error(`Erro ao inserir SaaS ${saas.name}:`, error.message);
  }
  console.log('SaaS Products populados com sucesso!');
}

seed().catch(err => console.error('Erro geral no seed:', err));
