export function Sidebar() {
  return (
    <aside className="w-full max-w-[260px] border-r border-slate-800 bg-slate-900 p-5">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">Javis</p>
        <h2 className="mt-2 text-2xl font-bold">Pessoal</h2>
      </div>

      <nav className="space-y-2">
        {['Dashboard', 'Tarefas', 'Agenda', 'Metas', 'Configurações'].map((item, index) => (
          <button
            key={item}
            className={`flex w-full items-center rounded-2xl px-4 py-3 text-left text-sm transition ${
              index === 0 ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </aside>
  );
}
