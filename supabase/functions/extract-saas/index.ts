import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { url } = await req.json()
    if (!url) {
      return new Response(JSON.stringify({ error: 'URL is required' }), { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
    }

    // Fetch the webpage
    const response = await fetch(url)
    const html = await response.text()

    // Parse HTML and extract text
    const doc = new DOMParser().parseFromString(html, 'text/html')
    const textContent = doc?.body?.textContent?.replace(/\s+/g, ' ').slice(0, 15000) || ''

    // Call OpenAI
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${Deno.env.get('OPENAI_API_KEY')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are an AI that extracts information from SaaS websites. Extract: name (string), description (string, max 100 chars), category (string: crm, erp, financeiro, marketing, vendas, dev, design, rh, atendimento), features (array of 3-5 strings), price (string, e.g., "R$ 49/mês" or "Gratuito"). Return valid JSON only.' },
          { role: 'user', content: `Website content:\n${textContent}` }
        ],
        response_format: { type: "json_object" }
      })
    })

    const aiData = await openAIResponse.json()
    const content = aiData.choices[0].message.content
    const parsed = JSON.parse(content)

    return new Response(
      JSON.stringify(parsed),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } })
  }
})
