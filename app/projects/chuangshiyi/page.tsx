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

        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            <b>Project experience</b>
          </h3>

          <div className="space-y-8">
            {projects.map((project, pIdx) => (
              <div key={pIdx} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-gray-200">
                <h5 className="text-lg font-bold text-gray-800 mb-2">
                  <b>專案名稱：</b>{project.name}
                </h5>
                <h5 className="text-lg font-bold text-gray-800 mb-2">
                  <b>專案描述：</b>
                </h5>
                <div className="space-y-1 text-gray-600">
                  {project.description.map((desc, dIdx) => (
                    <p key={dIdx}>{desc}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
