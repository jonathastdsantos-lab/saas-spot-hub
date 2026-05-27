import "https://esm.sh/@supabase/functions-js/src/edge-runtime.d.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

const MOCK_SAAS = [
  { id: 'fluxia', name: 'Fluxia', cat: 'CRM', tags: ['CRM', 'Vendas'], stars: 4.8, reviews: 1204, score: 98, price: 'R$ 99/mês' },
  { id: 'zapcrm', name: 'ZapCRM', cat: 'CRM', tags: ['CRM', 'WhatsApp'], stars: 4.5, reviews: 856, score: 92, price: 'R$ 49/mês' },
  { id: 'caixa', name: 'Caixa', cat: 'ERP', tags: ['ERP', 'Finanças'], stars: 4.2, reviews: 450, score: 85, price: 'R$ 199/mês' },
  { id: 'salonpro', name: 'SalonPro', cat: 'Agendamento', tags: ['Agendamento', 'Beleza'], stars: 4.9, reviews: 2100, score: 95, price: 'R$ 79/mês' },
  { id: 'agentik', name: 'Agentik', cat: 'IA', tags: ['IA', 'Agentes'], stars: 4.9, reviews: 520, score: 99, price: 'R$ 299/mês' }
];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { messages, context } = await req.json()
    if (!messages) {
      return new Response(JSON.stringify({ error: 'messages array is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL') || ''
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
    const supabase = createClient(supabaseUrl, supabaseKey)

    let availableSaas = MOCK_SAAS;
    if (supabaseUrl && supabaseKey) {
      const { data, error } = await supabase.from('saas').select('*').limit(50)
      if (!error && data && data.length > 0) {
        availableSaas = data;
      }
    }

    const systemPrompt = `
Você é uma Consultora Sênior de Tecnologia B2B chamada Stackly. Sua voz é direta, honesta e usa números no lugar de adjetivos. 
Você nunca usa jargões vazios ("revolucionário", "game-changer") e nunca usa exclamações para forçar emoção.
Você recomendará a melhor "Stack" de softwares baseado no contexto do usuário.

Abaixo está o catálogo de SaaS disponíveis no nosso banco de dados (use apenas estes se relevantes):
${JSON.stringify(availableSaas)}

Instruções críticas:
1. Responda APENAS com um objeto JSON válido. Não inclua Markdown envolta (como \`\`\`json).
2. Formato do JSON:
{
  "message": "Sua resposta conversacional (voz direta, consultora sênior)",
  "recommendations": [
    {
      "saasId": "o id exato do saas listado acima",
      "name": "Nome do SaaS",
      "matchPercentage": 96,
      "reason": "Por que é recomendado (curto)"
    }
  ],
  "totalMonthlyCost": "R$ X/mês (estimado, some os preços se possível)"
}
`

    const apiMessages = [
      { role: 'system', content: systemPrompt },
      ...messages
    ];

    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: apiMessages,
        response_format: { type: "json_object" }
      })
    })

    const aiData = await openAIResponse.json()

    if (!aiData.choices || aiData.choices.length === 0) {
      throw new Error(aiData.error?.message || 'Erro na API da OpenAI');
    }

    const content = aiData.choices[0].message.content
    const parsed = JSON.parse(content)

    return new Response(
      JSON.stringify(parsed),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error("Erro na Edge Function:", error)
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }
})
