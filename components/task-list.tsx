type Task = {
  id: number;
  title: string;
  done: boolean;
  date: string;
};

export function TaskList({ tasks }: { tasks: Task[] }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-2xl font-bold">Tarefas</h3>
        <button className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-cyan-400">
          + Nova tarefa
        </button>
      </div>

      <div className="space-y-3">
        {tasks.map((task) => (
          <div key={task.id} className="flex items-center justify-between rounded-2xl border border-slate-700 bg-slate-950 p-4">
            <div className="flex items-center gap-3">
              <input type="checkbox" checked={task.done} readOnly className="h-4 w-4 accent-cyan-500" />
              <div>
                <p className={`font-medium ${task.done ? 'line-through text-slate-500' : 'text-slate-200'}`}>
                  {task.title}
                </p>
                <p className="text-xs text-slate-400">{task.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
