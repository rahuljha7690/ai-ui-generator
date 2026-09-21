function UIButton({ text, variant = "primary" }) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-500",
    secondary: "bg-slate-100 text-slate-700 hover:bg-slate-200",
  };

  return (
    <button
      className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
        variants[variant] || variants.primary
      }`}
    >
      {text}
    </button>
  );
}

export default UIButton;