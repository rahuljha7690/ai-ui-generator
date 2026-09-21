import { Sparkles, WandSparkles } from "lucide-react";

const suggestions = [
  "Create a SaaS analytics dashboard",
  "Build a modern pricing page",
  "Design a portfolio landing page",
  "Create an e-commerce dashboard",
];

function PromptPanel() {
  return (
    <section className="rounded-xl border border-white/10 bg-[#0c1220] p-4">
      <div className="mb-5 flex items-start gap-3">
        <div className="rounded-lg bg-indigo-500/15 p-2">
          <Sparkles size={18} className="text-indigo-400" />
        </div>

        <div>
          <h2 className="font-semibold">Create Your UI</h2>
          <p className="mt-1 text-xs leading-5 text-slate-500">
            Tell us about what you want to build. Be as specific as you like!
          </p>
        </div>
      </div>

      <textarea
        placeholder="Create a modern admin dashboard with sidebar, stats cards, sales chart and recent orders table..."
        className="h-40 w-full resize-none rounded-xl border border-white/10 bg-[#080d18] p-4 text-sm leading-6 text-slate-200 outline-none placeholder:text-slate-600 focus:border-indigo-500/50"
      />

      <div className="mt-5">
        <p className="mb-3 text-xs text-slate-500">Try these prompts:</p>

        <div className="space-y-2">
          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              className="flex w-full items-center justify-between rounded-lg border border-white/5 bg-white/2 px-3 py-2.5 text-left text-xs text-slate-400 transition hover:border-indigo-500/20 hover:bg-indigo-500/5 hover:text-slate-200"
            >
              {suggestion}
              <span>→</span>
            </button>
          ))}
        </div>
      </div>

      <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3 text-sm font-semibold shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-500">
        <WandSparkles size={17} />
        Generate UI
      </button>
    </section>
  );
}

export default PromptPanel;