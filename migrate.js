const { Client } = require('pg');

const connectionString = 'postgresql://postgres:Jtds%230308%2337630380%40Ge@db.mqzmmbkvllqvjeebznyk.supabase.co:5432/postgres';

const CATEGORIES = [
  { id: 'crm', name: 'CRM', icon: 'users', count: 124 },
  { id: 'erp', name: 'ERP', icon: 'database', count: 89 },
  { id: 'marketing', name: 'Marketing', icon: 'megaphone', count: 210 },
  { id: 'ai', name: 'Inteligência Artificial', icon: 'sparkle', count: 340 },
  { id: 'payments', name: 'Pagamentos', icon: 'credit-card', count: 45 },
  { id: 'hr', name: 'RH', icon: 'briefcase', count: 67 },
  { id: 'analytics', name: 'Analytics', icon: 'bar-chart', count: 112 },
  { id: 'sales', name: 'Vendas', icon: 'trending-up', count: 156 },
  { id: 'support', name: 'Suporte', icon: 'life-buoy', count: 98 },
  { id: 'design', name: 'Design', icon: 'pen-tool', count: 76 },
  { id: 'dev', name: 'Desenvolvimento', icon: 'code', count: 234 },
  { id: 'productivity', name: 'Produtividade', icon: 'check-square', count: 189 }
];

const SAAS = [
  { id: 'fluxia', name: 'Fluxia', cat: 'crm', tags: ['CRM', 'Vendas'], stars: 4.8, reviews: 1204, score: 98, price: 'R$ 99/mês', color: '#FF5733' },
  { id: 'zapcrm', name: 'ZapCRM', cat: 'crm', tags: ['CRM', 'WhatsApp'], stars: 4.5, reviews: 856, score: 92, price: 'R$ 49/mês', color: '#25D366' },
  { id: 'caixa', name: 'Caixa', cat: 'erp', tags: ['ERP', 'Finanças'], stars: 4.2, reviews: 450, score: 85, price: 'R$ 199/mês', color: '#0052CC' },
  { id: 'salonpro', name: 'SalonPro', cat: 'crm', tags: ['Agendamento', 'Beleza'], stars: 4.9, reviews: 2100, score: 95, price: 'R$ 79/mês', color: '#E0115F' },
  { id: 'leadgrid', name: 'LeadGrid', cat: 'marketing', tags: ['Marketing', 'Landing Pages'], stars: 4.6, reviews: 670, score: 88, price: 'R$ 129/mês', color: '#FFC300' },
  { id: 'paganow', name: 'PagaNow', cat: 'payments', tags: ['Pagamentos', 'Financeiro'], stars: 4.7, reviews: 3400, score: 96, price: '1.99%', color: '#6C5CE7' },
  { id: 'agentik', name: 'Agentik', cat: 'ai', tags: ['IA', 'Agentes'], stars: 4.9, reviews: 520, score: 99, price: 'R$ 299/mês', color: '#00CEC9' },
  { id: 'mailflow', name: 'MailFlow', cat: 'marketing', tags: ['Email', 'Marketing'], stars: 4.3, reviews: 890, score: 82, price: 'R$ 59/mês', color: '#D63031' },
  { id: 'hrsync', name: 'HRSync', cat: 'hr', tags: ['RH', 'Gestão'], stars: 4.4, reviews: 310, score: 86, price: 'R$ 149/mês', color: '#0984E3' },
  { id: 'pulse', name: 'Pulse', cat: 'analytics', tags: ['Analytics', 'Dados'], stars: 4.8, reviews: 1100, score: 94, price: 'R$ 199/mês', color: '#FD79A8' },
  { id: 'medsys', name: 'MedSys', cat: 'crm', tags: ['Clínica', 'Agendamento'], stars: 4.7, reviews: 920, score: 93, price: 'R$ 149/mês', color: '#00B894' },
  { id: 'supportx', name: 'SupportX', cat: 'support', tags: ['Atendimento', 'Tickets'], stars: 4.5, reviews: 780, score: 89, price: 'R$ 89/mês', color: '#E84393' },
  { id: 'designhub', name: 'DesignHub', cat: 'design', tags: ['Design', 'Colaboração'], stars: 4.6, reviews: 1450, score: 91, price: 'R$ 49/mês', color: '#A29BFE' },
  { id: 'devops', name: 'DevOpsPro', cat: 'dev', tags: ['CI/CD', 'Deploy'], stars: 4.8, reviews: 630, score: 95, price: 'R$ 249/mês', color: '#2D3436' },
  { id: 'voxa', name: 'Voxa', cat: 'ai', tags: ['IA', 'Voz', 'WhatsApp'], stars: 4.9, reviews: 410, score: 97, price: 'R$ 199/mês', color: '#6AB04C' }
];

async function main() {
  const client = new Client({ connectionString });
  await client.connect();

  console.log("Connected to Supabase DB!");

  try {
    // Drop existing tables if needed
    await client.query(`DROP TABLE IF EXISTS user_stacks CASCADE;`);
    await client.query(`DROP TABLE IF EXISTS products CASCADE;`);
    await client.query(`DROP TABLE IF EXISTS categories CASCADE;`);

    // Create categories table
    await client.query(`
      CREATE TABLE categories (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        icon TEXT,
        count INT DEFAULT 0
      );
    `);
    console.log("Created categories table.");

    // Create products table
    await client.query(`
      CREATE TABLE products (
        id TEXT PRIMARY KEY,
        name TEXT NOT NULL,
        category_id TEXT REFERENCES categories(id) ON DELETE SET NULL,
        tags TEXT[],
        stars NUMERIC,
        reviews INT,
        score INT,
        price TEXT,
        color TEXT
      );
    `);
    console.log("Created products table.");

    // Create user_stacks table
    await client.query(`
      CREATE TABLE user_stacks (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
        product_id TEXT REFERENCES products(id) ON DELETE CASCADE,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      );
    `);
    console.log("Created user_stacks table.");

    // Insert categories
    for (const c of CATEGORIES) {
      await client.query(
        `INSERT INTO categories (id, name, icon, count) VALUES ($1, $2, $3, $4)`,
        [c.id, c.name, c.icon, c.count]
      );
    }
    console.log("Inserted categories.");

    // Insert products
    for (const p of SAAS) {
      await client.query(
        `INSERT INTO products (id, name, category_id, tags, stars, reviews, score, price, color)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
        [p.id, p.name, p.cat, p.tags, p.stars, p.reviews, p.score, p.price, p.color]
      );
    }
    console.log("Inserted products.");

    // Allow anonymous reading so our app can fetch this data without RLS policies getting in the way for now
    await client.query(`ALTER TABLE categories ENABLE ROW LEVEL SECURITY;`);
    await client.query(`ALTER TABLE products ENABLE ROW LEVEL SECURITY;`);
    
    await client.query(`CREATE POLICY "Enable read access for all users" ON categories FOR SELECT USING (true);`);
    await client.query(`CREATE POLICY "Enable read access for all users" ON products FOR SELECT USING (true);`);
    console.log("Configured RLS for public reading.");

  } catch (error) {
    console.error("Error migrating DB:", error);
  } finally {
    await client.end();
  }
}

main();
