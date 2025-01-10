import Link from "next/link";
import { Undo2 } from "lucide-react";
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center px-4">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-6">页面未找到</h2>
      <p className="text-gray-500 mb-8">抱歉，您要查看的页面不存在。</p>
      <Link
        href="/"
        className="px-6 py-3 flex bg-primary text-white rounded-md hover:bg-gray-600 transition duration-300 ease-in-out"
      >
        <Undo2 />
        返回主页
      </Link>
    </div>
  );
}
