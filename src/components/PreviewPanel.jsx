import { Bell, Search, TrendingUp } from "lucide-react";

function PreviewPanel() {
  return (
    <section className="overflow-hidden rounded-xl border border-white/10 bg-[#0c1220]">
      <div className="flex h-14 items-center gap-6 border-b border-white/10 px-4">
        <button className="rounded-lg bg-indigo-500/15 px-3 py-1.5 text-xs font-medium text-indigo-300">
          Preview
        </button>

        <button className="text-xs text-slate-500 hover:text-slate-300">
          Schema
        </button>

        <button className="text-xs text-slate-500 hover:text-slate-300">
          Code
        </button>
      </div>

      <div className="h-[calc(100%-56px)] bg-slate-100 p-5">
        <div className="min-h-full rounded-xl bg-white p-6 text-slate-900 shadow-2xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold">Dashboard</p>
              <p className="text-xs text-slate-400">
                Welcome back! Here's what's happening today.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 rounded-lg bg-slate-50 px-3 py-2 text-xs text-slate-400">
                <Search size={13} />
                Search
              </div>

              <Bell size={16} className="text-slate-500" />
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 xl:grid-cols-4">
            {[
              ["Total Revenue", "$24,780"],
              ["Total Orders", "1,248"],
              ["New Customers", "458"],
              ["Conversion Rate", "3.24%"],
            ].map(([title, value]) => (
              <div
                key={title}
                className="rounded-xl border border-slate-100 p-4"
              >
                <p className="text-xs text-slate-400">{title}</p>
                <p className="mt-2 text-xl font-bold">{value}</p>

                <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-500">
                  <TrendingUp size={12} />
                  12.5%
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 rounded-xl border border-slate-100 p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold">Sales Overview</p>
              <span className="text-xs text-slate-400">Last 7 days</span>
            </div>

            <div className="mt-6 flex h-40 items-end gap-3">
              {[35, 48, 42, 65, 54, 72, 90, 68, 82, 95, 78, 100].map(
                (height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t bg-indigo-400/70"
                    style={{ height: `${height}%` }}
                  />
                ),
              )}
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-slate-100 p-5">
              <p className="text-sm font-semibold">Recent Orders</p>

              <div className="mt-4 space-y-3">
                {["John Doe", "Sarah Wilson", "Mike Johnson", "Emily Davis"].map(
                  (name) => (
                    <div
                      key={name}
                      className="flex items-center justify-between border-b border-slate-50 pb-3 text-xs"
                    >
                      <span>{name}</span>
                      <span className="text-emerald-500">Completed</span>
                    </div>
                  ),
                )}
              </div>
            </div>

            <div className="rounded-xl border border-slate-100 p-5">
              <p className="text-sm font-semibold">Top Products</p>

              <div className="mt-4 space-y-4">
                {["Wireless Headphones", "Smart Watch", "Laptop Stand"].map(
                  (product) => (
                    <div key={product}>
                      <div className="flex justify-between text-xs">
                        <span>{product}</span>
                        <span className="text-slate-400">342 sold</span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                        <div className="h-full w-3/4 rounded-full bg-indigo-500" />
                      </div>
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PreviewPanel;