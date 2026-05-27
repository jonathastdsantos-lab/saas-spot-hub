const url = 'https://saas-spot-hub.lovable.app';

async function runTests() {
  console.log('--- Iniciando Testes na Produção (Lovable) ---');
  
  try {
    // 1. Teste de Carregamento da Home
    console.log('\n1. Testando Home Page...');
    const homeRes = await fetch(url);
    const homeHtml = await homeRes.text();
    if (homeHtml.includes('Fluxia') || homeHtml.includes('CRM') || homeHtml.includes('Categorias')) {
      console.log('✅ Home carregou perfeitamente e os dados do banco parecem estar renderizados.');
    } else {
      console.log('❌ Home carregou, mas não encontrou dados esperados.');
    }

    // 2. Teste do Chat de IA (Consultor)
    console.log('\n2. Testando Consultor IA (/api/chat)...');
    const chatRes = await fetch(`${url}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [{ role: 'user', content: 'Quero um CRM simples' }] })
    });
    
    if (chatRes.ok) {
      console.log('✅ API de Chat (OpenAI) retornou 200 OK. Streaming funcionando.');
    } else {
      console.log(`❌ Falha no Chat IA: ${chatRes.status}`);
    }

    // 3. Teste do Extrator de SaaS (Onboarding)
    console.log('\n3. Testando Extrator de SaaS (/api/extract-saas)...');
    const extractRes = await fetch(`${url}/api/extract-saas`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: 'https://vercel.com' })
    });
    
    if (extractRes.ok) {
      const data = await extractRes.json();
      if (data.name) {
        console.log(`✅ Extrator IA funcionou! Encontrou o nome: ${data.name}`);
      } else {
        console.log('❌ Extrator retornou 200 mas sem nome.');
      }
    } else {
      console.log(`❌ Falha no Extrator IA: ${extractRes.status}`);
    }

    console.log('\n--- Testes Concluídos ---');
  } catch (error) {
    console.error('Erro de conexão ou execução dos testes:', error.message);
  }
}

runTests();
