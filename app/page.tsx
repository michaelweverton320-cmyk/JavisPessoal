import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">Javis Pessoal</p>
            <h1 className="mt-2 text-4xl font-bold md:text-5xl">Seu assistente pessoal com voz e IA</h1>
          </div>

          <Link
            href="/dashboard"
            className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
          >
            Entrar
          </Link>
        </header>

        <section className="grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl shadow-cyan-950/30">
            <p className="mb-4 text-sm text-slate-300">Assistente em tempo real</p>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Conversem comigo por voz e organizo sua rotina.
            </h2>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 text-3xl shadow-lg shadow-cyan-700/40">
                🎙️
              </div>
              <div>
                <p className="text-sm text-slate-400">Status</p>
                <p className="text-lg font-medium text-cyan-300">Pronto para atender</p>
              </div>
            </div>

            <div className="mt-8 flex gap-3">
              <Link
                href="/dashboard"
                className="rounded-full bg-cyan-500 px-5 py-3 font-medium text-slate-950 transition hover:bg-cyan-400"
              >
                Abrir dashboard
              </Link>
              <button className="rounded-full border border-slate-700 px-5 py-3 font-medium text-slate-200 transition hover:border-slate-500">
                Ver demo
              </button>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <p className="mb-4 text-sm text-slate-300">Resumo do dia</p>
            <div className="space-y-4">
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Tarefas</p>
                <p className="mt-2 text-2xl font-bold">5 pendentes</p>
              </div>
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Lembretes</p>
                <p className="mt-2 text-2xl font-bold">3 hoje</p>
              </div>
              <div className="rounded-2xl bg-slate-800 p-4">
                <p className="text-sm text-slate-400">Metas</p>
                <p className="mt-2 text-2xl font-bold">2 em progresso</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
