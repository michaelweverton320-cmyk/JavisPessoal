import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const message = body?.message?.toString() || '';

    if (!message.trim()) {
      return NextResponse.json({ reply: 'Posso ajudar. Diga o que você quer organizar hoje.' }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({
        reply: `Entendi: “${message}”. Posso te ajudar a criar lembretes, tarefas e organizar sua rotina. Se quiser, posso também agendar algo para hoje.`
      });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content:
              'Você é o Javis, um assistente pessoal inteligente. Responda de forma útil, breve e natural em português do Brasil.'
          },
          { role: 'user', content: message }
        ],
        temperature: 0.7
      })
    });

    if (!response.ok) {
      const error = await response.text();
      return NextResponse.json({ reply: `Não consegui concluir sua solicitação agora. Motivo: ${error}` }, { status: 500 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Entendi. Posso te ajudar com isso.';

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ reply: 'Ocorreu um erro ao processar sua mensagem.' }, { status: 500 });
  }
}
