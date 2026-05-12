export default function Badge({ count, variant }) {
  const finalVariant = variant || "primary";

  if (!count || count === 0) return null;

  const variants = {
    primary: "bg-purple-600 text-white",
    danger: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
  };

  const displayCount = count > 99 ? "99+" : count;

  return (
    <span
      className={
        "inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-xs font-bold " +
        variants[finalVariant]
      }
    >
      {displayCount}
    </span>
  );
}