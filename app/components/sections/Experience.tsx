"use client";

import Link from 'next/link';
import { ExperienceItem } from '../ExperienceItem';

export const Experience = () => {
  return (
    <section id="experience" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">工作經歷</h2>
      <div className="space-y-4">
        <ExperienceItem
          company="賽普勒斯商飛力通股份有限公司"
          department="台灣分公司"
          role="軟體工程師"
          period="2 年半以上"
          details={
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-1">
                <li>.NET開發與維護系統排程及相關服務</li>
                <li>軟體測試及維護</li>
                <li>串接外部系統API</li>
                <li>Git版本控管</li>
              </ul>
              <Link href="/projects/aircast" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                查看專案經歷 →
              </Link>
            </div>
          }
        />
        <ExperienceItem
          company="凡達科技有限公司"
          department=""
          role="軟體工程師"
          period="1 年半以上"
          details={
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-1">
                <li>.NET WebForm 及 MVC 專案開發</li>
                <li>與客戶討論需求及 UI 設計</li>
                <li>現有專案優化、維護、debug</li>
                <li>資料庫規劃</li>
                <li>技術文件撰寫</li>
              </ul>
              <Link href="/projects/ifantech" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                查看專案經歷 →
              </Link>
            </div>
          }
        />
        <ExperienceItem
          company="創時億網路科技有限公司"
          department="台北研發部"
          role="助理前端工程師"
          period="半年以上"
          details={
            <div className="space-y-4">
              <ul className="list-disc list-inside space-y-1">
                <li>React-Native 小工具開發</li>
                <li>python 爬蟲</li>
                <li>python 機器人開發</li>
              </ul>
              <Link href="/projects/chuangshiyi" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                查看專案經歷 →
              </Link>
            </div>
          }
        />
      </div>
    </section>
  );
};
