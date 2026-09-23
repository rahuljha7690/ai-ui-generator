import { Bell, Search, TrendingUp } from "lucide-react";
import DynamicRenderer from "./preview/DynamicRenderer";
import sampleSchema from "../components/data/sampleSchema";

function PreviewPanel({ schema }) {
  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1220]">
      <div className="min-h-full rounded-xl bg-white p-8">
        <DynamicRenderer node={schema} />
      </div>
    </section>
  );
}

export default PreviewPanel;
