import DebuggerSheet from "./DebuggerSheet";

export function ServiceInspector() {
  if (process.env.NODE_ENV === "production") return null;

  return (
    <div className="relative">
      <div
        style={{ bottom: "4px" }}
        className="fixed z-50 flex h-6 w-6 items-center justify-center rounded-full bg-gray-800 p-3 font-mono text-xs text-white bottom-1 right-1  "
      >
        <DebuggerSheet />
      </div>
    </div>
  );
}
