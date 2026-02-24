'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">專案經歷</h1>
        <p className="text-gray-500 mb-8">
          專案詳細內容正在建置中，敬請期待。
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
        >
          <ArrowLeftIcon /> 回到首頁
        </Link>
      </div>
    </div>
  );
}
