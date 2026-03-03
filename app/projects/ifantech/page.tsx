'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@radix-ui/react-icons';

export default function IfantechProjects() {
  const sections = [
    {
      title: '使用 .NET Core 3.1',
      projects: [
        {
          name: '工作移交',
          description: [
            '離職員工交接項目審核流程系統',
            '負責整個專案開發',
            'UI 設計、調整',
          ],
        },
        {
          name: '誠信經營',
          description: [
            '資策會內部使用的誠信經營網站，包含後台管理',
            '負責專案合作開發及維護',
            'UI 設計、調整',
          ],
        },
      ],
    },
    {
      title: '使用 .NET MVC 5 及 Web API',
      projects: [
        {
          name: 'ProductAPI',
          description: [
            '透過傳入參數可以將資料新增至蝦皮及 Momo 的商品列表的 API',
            '負責整個專案開發及維護',
          ],
        },
      ],
    },
    {
      title: '使用 .NET Framework 4 以上 (Web Forms)',
      projects: [
        {
          name: '全會 OA 服務',
          description: [
            '資策會內部使用的事件單開立系統，例如：服務單申請流程、滿意度問卷、服務單查詢、人員權限',
            '負責整個專案開發及維護',
            'UI 設計、調整',
          ],
        },
        {
          name: '資安管理平台',
          description: [
            '資策會資訊處使用的系統，例如：資產盤點、資安事件通報應變管理、資訊機房對外調查',
            '負責專案維護及優化',
            'UI 設計、調整',
          ],
        },
        {
          name: 'ICBS Memo',
          description: [
            '資策會所有部門公告發布系統',
            '負責專案維護及改版合作',
          ],
        },
        {
          name: '台綜院',
          description: [
            '台灣綜合研究院內部使用的系統，例如：新續聘人員申請、計畫採購/借支單申請及簽核流程',
            '負責專案合作開發及維護',
          ],
        },
        {
          name: '客訴',
          description: [
            '資策會內部使用的客戶投訴系統，例如：客訴單申請流程、案件統計',
            '負責整個專案開發及維護',
            'UI 設計、調整',
          ],
        },
        {
          name: '綠能科技產業推動中心',
          description: [
            '綠能科技產業推動中心官網及後台管理',
            '負責專案改版及維護',
            'UI 調整',
          ],
        },
        {
          name: 'CDXO CLUB - 資策會',
          description: [
            'CDXO CLUB 資策會官網及後台管理',
            '負責專案合作開發及維護',
            'UI 調整',
          ],
        },
        {
          name: 'iSpace 辦公空間資訊平台',
          description: [
            '記錄各棟大樓相關資訊及空氣品質的系統，例如：溫度/濕度/CO2日週月趨勢圖、空品超標通知信、空品資訊 api 串接',
            '負責專案開發及維護',
          ],
        },
        {
          name: '二代公文',
          description: [
            '資策會文書組使用的系統，主要可以查詢收文、發文、簽呈、契約等公文及附件',
            '負責專案維護',
          ],
        },
        {
          name: '計畫函文查詢',
          description: [
            '資策會產技中心使用的系統，主要可以查詢收文、發文等公文及附件',
            '負責專案開發及維護',
          ],
        },
        {
          name: '檔案管理系統',
          description: [
            '資策會文書組使用的系統，主要可以對公文資料進行修改',
            '負責專案維護及優化',
          ],
        },
        {
          name: '會計溝通平台',
          description: [
            '資策會會計處使用的系統，例如：業務管理人員詢問/確認、報表編制/覆核、歷史紀錄查詢、階層權限設定',
            '負責整個專案開發',
            'UI 設計、調整',
          ],
        },
        {
          name: '資產負債催結',
          description: [
            '資策會會計處使用的系統',
            '負責專案維護',
          ],
        },
        {
          name: 'iMOOC',
          description: [
            '資策會人資處的課程學習系統，例如：課程設定、線上測驗、同仁學習歷程查詢',
            '負責專案維護及優化',
            'UI 設計、調整',
          ],
        },
        {
          name: '智網系統',
          description: [
            '經濟部技術處產業技術基磐研究與知識服務計畫網站',
            '負責專案合作開發',
          ],
        },
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

        <div className="space-y-12">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white shadow-sm border border-gray-100 rounded-xl overflow-hidden">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-bold text-gray-800">{section.title}</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50">
                      <th className="px-6 py-3 text-sm font-bold text-gray-600 uppercase tracking-wider border-b border-gray-100 w-1/4">專案名稱</th>
                      <th className="px-6 py-3 text-sm font-bold text-gray-600 uppercase tracking-wider border-b border-gray-100">專案描述</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {section.projects.map((project, pIdx) => (
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
          ))}
        </div>
      </div>
    </div>
  );
}
