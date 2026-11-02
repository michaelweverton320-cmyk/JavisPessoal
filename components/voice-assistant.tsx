'use client';

import { useState } from 'react';

export function VoiceAssistant() {
  const [listening, setListening] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('Oi! Posso te ajudar a organizar seu dia e lembrar das suas tarefas.');

  const handleAsk = async () => {
    if (!input.trim()) {
      return;
    }

    const result = await fetch('/api/assistant', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: input })
    });

    const data = await result.json();
    setResponse(data.reply);
    setInput('');
  };

  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-slate-300">Javis</p>
          <h2 className="text-2xl font-bold">Assistente pessoal</h2>
        </div>

        <button
          onClick={() => setListening((prev) => !prev)}
          className={`flex h-16 w-16 items-center justify-center rounded-full text-2xl transition ${
            listening ? 'bg-red-500 hover:bg-red-400' : 'bg-cyan-500 hover:bg-cyan-400'
          }`}
        >
          {listening ? '●' : '🎙️'}
        </button>
      </div>

      <div className="mt-6 rounded-2xl border border-slate-700 bg-slate-950 p-4 text-sm text-slate-200">
        {response}
      </div>

      <div className="mt-5 flex gap-3">
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Peça algo ao Javis..."
          className="flex-1 rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none ring-0 placeholder:text-slate-500"
        />
        <button
          onClick={handleAsk}
          className="rounded-2xl bg-cyan-500 px-4 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
        >
          Enviar
        </button>
      </div>
    </div>
  );
}
