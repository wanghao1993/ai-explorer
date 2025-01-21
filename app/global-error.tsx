"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center h-64">
      <h2 className="text-2xl font-bold mb-4">出错了</h2>
      <p className="mb-4">很抱歉，发生了一些错误。</p>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => reset()}
      >
        重试
      </button>
    </div>
  );
}
