function UIInput({ placeholder = "Enter text..." }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-indigo-500"
    />
  );
}

export default UIInput;