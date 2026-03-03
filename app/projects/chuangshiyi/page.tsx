'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function ChuangshiyiProjects() {
  const projects = [
    {
      name: '客服小工具',
      description: [
        '使用 React-Native 框架',
        '依客服人員需求設計訂單的 UI',
        '透過 API 串接進行訂單資料的新增、修改、查詢',
        '輸入多個地址後可以在 google 地圖上觀看路徑規劃，顯示多個地點的座標、需要花費的的行車時間及里程',
      ],
    },
    {
      name: '帳號註冊機器人',
      description: [
        '透過模擬器去註冊 facebook 及 google 帳號',
        '使用 Python 開發',
        'Selenium WebDriver 爬蟲',
        'Appium 控制模擬器',
        'OpenCV 截圖比對',
      ],
    },
    {
      name: '自動下注程式手機板',
      description: [
        '參考自動下注網頁版研發自動下注手機板',
        '使用 Python Flask 框架',
        'API 串接',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-orange-600 font-medium hover:text-orange-700 transition-colors mb-8"
        >
          <ArrowLeftIcon /> 回到首頁
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">專案經歷</h1>

        <div className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-6 py-3 text-sm font-bold text-gray-600 uppercase tracking-wider border-b border-gray-100 w-1/4">專案名稱</th>
                  <th className="px-6 py-3 text-sm font-bold text-gray-600 uppercase tracking-wider border-b border-gray-100">專案描述</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {projects.map((project, pIdx) => (
                  <tr key={pIdx} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-gray-900 align-top">{project.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      <ul className="list-disc list-inside space-y-1">
                        {project.description.map((desc, dIdx) => (
                          <li key={dIdx}>{desc}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
