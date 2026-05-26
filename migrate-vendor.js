const { Client } = require('pg');

const client = new Client({
  connectionString: 'postgresql://postgres:Jtds%230308%2337630380%40Ge@db.mqzmmbkvllqvjeebznyk.supabase.co:5432/postgres'
});

async function run() {
  await client.connect();
  console.log('Connected to DB');

  try {
    await client.query(`
      ALTER TABLE products ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'pending';
      ALTER TABLE products ADD COLUMN IF NOT EXISTS owner_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;
      ALTER TABLE products ADD COLUMN IF NOT EXISTS website TEXT;
      ALTER TABLE products ADD COLUMN IF NOT EXISTS description TEXT;
    `);
    console.log('Columns added successfully');
  } catch(e) {
    console.error('Error executing SQL', e);
  } finally {
    await client.end();
  }
}

run();
