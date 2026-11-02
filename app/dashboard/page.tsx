import { Sidebar } from '@/components/sidebar';
import { TaskList } from '@/components/task-list';
import { VoiceAssistant } from '@/components/voice-assistant';

const tasks = [
  { id: 1, title: 'Revisar proposta do cliente', done: false, date: 'Hoje, 09:00' },
  { id: 2, title: 'Enviar relatório financeiro', done: true, date: 'Hoje, 12:30' },
  { id: 3, title: 'Planejar semana de marketing', done: false, date: 'Amanhã' }
];

const reminders = [
  'Pagar conta de energia às 18h',
  'Reunião com a equipe às 15h',
  'Treino às 20h'
];

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <div className="flex-1 p-6 md:p-8">
        <header className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">Dashboard</p>
            <h1 className="mt-2 text-3xl font-bold md:text-4xl">Bom dia, Michael</h1>
          </div>
          <div className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300">
            Hoje • 02 de nov de 2026
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="space-y-6">
            <VoiceAssistant />
            <TaskList tasks={tasks} />
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-300">Resumo do dia</p>
              <div className="mt-5 space-y-4">
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Tarefas</p>
                  <p className="mt-2 text-2xl font-bold text-cyan-300">3</p>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Lembretes</p>
                  <p className="mt-2 text-2xl font-bold text-violet-300">3</p>
                </div>
                <div className="rounded-2xl bg-slate-800 p-4">
                  <p className="text-sm text-slate-400">Metas</p>
                  <p className="mt-2 text-2xl font-bold text-emerald-300">2</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
              <p className="text-sm text-slate-300">Lembretes</p>
              <ul className="mt-5 space-y-3">
                {reminders.map((item) => (
                  <li key={item} className="rounded-2xl bg-slate-800 p-3 text-sm text-slate-200">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </div>
    </main>
  );
}
