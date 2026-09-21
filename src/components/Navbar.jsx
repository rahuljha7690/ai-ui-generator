import { Sparkles, Monitor, Moon, Save } from "lucide-react";

function Navbar() {
  return (
    <header className="flex h-18 items-center justify-between border-b border-white/10 bg-[#080d18] px-5">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/20">
          <Sparkles size={19} className="text-indigo-400" />
        </div>

        <div>
          <h1 className="text-sm font-semibold">AI UI Generator</h1>
          <p className="text-xs text-slate-500">
            Describe. Generate. Build.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-white/10 p-2 text-slate-400 hover:bg-white/5">
          <Moon size={16} />
        </button>

        <div className="flex items-center rounded-lg border border-white/10 p-1">
          <button className="rounded-md bg-white/10 p-2">
            <Monitor size={15} />
          </button>

          <button className="p-2 text-slate-500">
            <span className="text-xs">Tablet</span>
          </button>

          <button className="p-2 text-slate-500">
            <span className="text-xs">Mobile</span>
          </button>
        </div>

        <button className="flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-xs font-medium hover:bg-white/5">
          <Save size={15} />
          Save Project
        </button>

        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-500 text-sm font-semibold">
          R
        </div>
      </div>
    </header>
  );
}

export default Navbar;
