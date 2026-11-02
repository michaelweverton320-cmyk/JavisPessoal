# Javis Pessoal

Aplicativo web MVP para um assistente pessoal com voz e IA.

## Funcionalidades
- Dashboard pessoal
- Assistente Javis
- Tarefas e lembretes
- Interface moderna em Next.js + Tailwind
- Preparado para integrar voz e OpenAI

## Tecnologias
- Next.js
- React
- Tailwind CSS
- TypeScript
- OpenAI API

## Como rodar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Crie um arquivo `.env.local` com:
   ```bash
   OPENAI_API_KEY=sua_chave_aqui
   ```

3. Inicie o app:
   ```bash
   npm run dev
   ```

4. Abra no navegador:
   ```bash
   http://localhost:3000
   ```

## Estrutura principal
- `app/page.tsx` — landing page
- `app/dashboard/page.tsx` — dashboard principal
- `components/voice-assistant.tsx` — assistente de voz
- `components/task-list.tsx` — listagem de tarefas
- `app/api/assistant/route.ts` — integração com IA

## Próximo passo
- conectar microfone do navegador
- adicionar gravação de voz e TTS
- salvar tarefas em banco de dados
- autenticação e histórico de conversas
