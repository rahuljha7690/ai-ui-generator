import { ChevronDown, SlidersHorizontal } from "lucide-react";

function Inspector() {
  return (
    <section className="rounded-xl border border-white/10 bg-[#0c1220]">
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-4">
        <SlidersHorizontal size={16} className="text-indigo-400" />
        <h2 className="text-sm font-semibold">Component Inspector</h2>
      </div>

      <div className="p-4">
        <div className="mb-5 rounded-lg border border-white/5 bg-[#080d18] p-3">
          <p className="text-xs text-slate-500">Selected component</p>
          <p className="mt-1 text-sm font-medium">Card</p>
          <p className="mt-1 text-xs leading-5 text-slate-600">
            A container component for displaying content.
          </p>
        </div>

        <div className="space-y-4">
          <label className="block">
            <span className="text-xs text-slate-500">Title</span>
            <input
              value="Total Revenue"
              readOnly
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#080d18] px-3 py-2 text-xs text-slate-300 outline-none"
            />
          </label>

          <label className="block">
            <span className="text-xs text-slate-500">Value</span>
            <input
              value="$24,780"
              readOnly
              className="mt-2 w-full rounded-lg border border-white/10 bg-[#080d18] px-3 py-2 text-xs text-slate-300 outline-none"
            />
          </label>

          <button className="flex w-full items-center justify-between rounded-lg border border-white/10 px-3 py-3 text-xs text-slate-400">
            Advanced Properties
            <ChevronDown size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Inspector;