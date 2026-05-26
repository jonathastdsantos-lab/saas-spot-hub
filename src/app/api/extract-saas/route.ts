import { openai } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import * as cheerio from 'cheerio';
import { z } from 'zod';
import { NextResponse } from 'next/server';

export const maxDuration = 30;

export async function POST(req: Request) {
  try {
    const { url } = await req.json();
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }

    // Adiciona https:// se faltar
    const validUrl = url.startsWith('http') ? url : `https://${url}`;
    const response = await fetch(validUrl);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch URL: ${response.statusText}`);
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    
    // Remove scripts e estilos
    $('script, style, noscript, iframe').remove();
    const textContent = $('body').text().replace(/\s+/g, ' ').trim().slice(0, 15000); // Limit context size

    const { object } = await generateObject({
      model: openai('gpt-4o-mini'), // Usar o mais barato e rápido
      system: `Você é um bot extrator de informações de empresas SaaS.
Dado o conteúdo textual raspado do site da empresa, extraia os campos requisitados.
Caso não encontre a informação, deduza a mais provável ou deixe em branco.
A descrição deve ser persuasiva e resumida (máximo 120 caracteres).
Funcionalidades são features curtas (máximo 12), ex: "Pipeline Visual", "Integração WhatsApp".
Categoria principal deve ser algo como: CRM, ERP, Automação de Marketing, Atendimento.`,
      prompt: `Aqui está o texto extraído do site:\n\n${textContent}`,
      schema: z.object({
        name: z.string().describe('O nome do produto/software SaaS'),
        description: z.string().describe('Uma descrição curta e persuasiva (pitch) do que o software faz'),
        features: z.array(z.string()).describe('Lista com até 12 funcionalidades chave encontradas no texto'),
        category: z.string().describe('A categoria principal do software (ex: CRM, ERP, Helpdesk)'),
        price: z.string().optional().describe('Se encontrar menção a preço inicial (ex: R$ 49/mês), coloque aqui. Senão deixe nulo.'),
      }),
    });

    return NextResponse.json(object);
  } catch (error: any) {
    console.error('Extraction error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
