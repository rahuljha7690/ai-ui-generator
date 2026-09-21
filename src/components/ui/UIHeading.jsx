function UIHeading({ text, size = "medium" }) {
  const sizes = {
    small: "text-lg",
    medium: "text-2xl",
    large: "text-4xl",
  };

  return (
    <h1 className={`font-bold text-slate-900 ${sizes[size] || sizes.medium}`}>
      {text}
    </h1>
  );
}

export default UIHeading;