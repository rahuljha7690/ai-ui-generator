function UICard({ title, value, description }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
      {title && (
        <p className="text-sm font-medium text-slate-500">
          {title}
        </p>
      )}

      {value && (
        <p className="mt-2 text-2xl font-bold text-slate-900">
          {value}
        </p>
      )}

      {description && (
        <p className="mt-2 text-xs text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default UICard;