import useToastStore from "../../store/toastStore";

export default function Toast() {
  const toast = useToastStore((state) => state.toast);
  const hideToast = useToastStore((state) => state.hideToast);

  if (!toast) return null;

  const isSuccess = toast.type === "success";
  const isError = toast.type === "error";

  let bgColor = "bg-green-600";
  let icon = "✓";
  if (isError) {
    bgColor = "bg-red-600";
    icon = "✕";
  } else if (!isSuccess) {
    bgColor = "bg-purple-600";
    icon = "ℹ️";
  }

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div
        className={
          "flex items-center gap-3 " +
          bgColor +
          " text-white px-4 py-3 rounded-lg shadow-lg max-w-sm"
        }
      >
        <span className="text-xl font-bold">{icon}</span>
        <span className="text-sm font-medium flex-1">{toast.message}</span>
        <button
          type="button"
          onClick={hideToast}
          className="text-white hover:opacity-75 text-lg leading-none"
          aria-label="Cerrar notificacion"
        >
          ×
        </button>
      </div>
    </div>
  );
}