export default function Button({
  children,
  onClick,
  type,
  variant,
  size,
  disabled,
  className,
}) {
  const finalType = type || "button";
  const finalVariant = variant || "primary";
  const finalSize = size || "md";

  const variants = {
    primary:
      "bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white hover:opacity-90 hover:shadow-lg",
    secondary:
      "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50",
    danger:
      "border-2 border-red-500 text-red-500 hover:bg-red-50",
    ghost: "text-gray-600 hover:text-purple-600",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const baseClasses =
    "font-medium rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

  return (
    <button
      type={finalType}
      onClick={onClick}
      disabled={disabled}
      className={
        baseClasses +
        " " +
        variants[finalVariant] +
        " " +
        sizes[finalSize] +
        " " +
        (className || "")
      }
    >
      {children}
    </button>
  );
}