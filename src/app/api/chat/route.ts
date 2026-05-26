import { openai } from '@ai-sdk/openai';
import { streamText, tool } from 'ai';
import { createClient } from '../../../utils/supabase/server';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const supabase = createClient();
  const { data: products } = await supabase.from('products').select('*');

  const productListStr = products?.map(p => `- ${p.name} (${p.tags.join(', ')}). Preço: ${p.price}. Score: ${p.score}. Estrelas: ${p.stars}`).join('\n') || 'Nenhum produto disponível.';

  const result = await streamText({
    model: openai('gpt-4o'),
    system: `Você é o Consultor Stackly, um especialista em software B2B e SaaS.
O usuário vai descrever o negócio dele e o que ele precisa.
Você deve recomendar AS MELHORES ferramentas SaaS da nossa base de dados.
Seja conciso, profissional e entusiasmado.

Abaixo está o catálogo de produtos disponíveis na Stackly:
${productListStr}

Se o usuário pedir algo que não temos, diga que ainda estamos adicionando novas ferramentas, mas sugira a mais próxima. Não invente produtos que não estão na lista.
Sempre formate a resposta de forma bonita usando Markdown, destacando o nome do produto.`,
    messages,
  });

  return result.toTextStreamResponse();
}
