import {
  Home,
  Folder,
  LayoutTemplate,
  History,
  Clock3,
} from "lucide-react";

const history = [
  "Create an admin dashboard",
  "Make the sidebar dark",
  "Add a revenue chart",
  "Change to 4 column layout",
];

function Sidebar() {
  return (
    <aside className="hidden w-55 shrink-0 border-r border-white/10 bg-[#080d18] p-4 lg:block">
      <nav className="space-y-1">
        <button className="flex w-full items-center gap-3 rounded-lg bg-indigo-500/20 px-3 py-2.5 text-sm text-indigo-300">
          <Home size={17} />
          Home
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5">
          <Folder size={17} />
          My Projects
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-white/5">
          <LayoutTemplate size={17} />
          Templates
        </button>
      </nav>

      <div className="my-6 border-t border-white/10" />

      <div className="mb-3 flex items-center justify-between px-2">
        <span className="text-xs font-medium text-slate-500">
          RECENT PROMPTS
        </span>

        <History size={14} className="text-slate-600" />
      </div>

      <div className="space-y-1">
        {history.map((item, index) => (
          <button
            key={index}
            className="group w-full rounded-lg px-2 py-2 text-left hover:bg-white/5"
          >
            <div className="flex items-start gap-2">
              <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600 group-hover:bg-indigo-400" />

              <div>
                <p className="truncate text-xs text-slate-400">{item}</p>
                <div className="mt-1 flex items-center gap-1 text-[10px] text-slate-600">
                  <Clock3 size={10} />
                  2 hours ago
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
