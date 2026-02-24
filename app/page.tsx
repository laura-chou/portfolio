"use client";

import { useState } from "react";
import { Parallax } from 'react-parallax';
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Tabs from "@radix-ui/react-tabs";
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { GitHubLogoIcon, CaretUpIcon, CaretDownIcon } from "@radix-ui/react-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faVuejs, faReact } from '@fortawesome/free-brands-svg-icons'
import { faPalette } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';

type ExperienceItemProps = {
  company: string;
  department: string;
  role: string;
  period: string;
  details: React.ReactNode;
};

const ExperienceItem = ({ company, department, role, period, details }: ExperienceItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center w-full mb-6">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
        <Collapsible.Root open={open} onOpenChange={setOpen}>
          <div className="p-6">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {company}
                  {department && <span className="block text-sm font-normal text-gray-500">{department}</span>}
                </h3>
                <p className="mt-1 text-orange-600 font-medium text-sm">
                  {role} <span className="text-gray-400 mx-2">|</span> {period}
                </p>
              </div>
              <Collapsible.Trigger asChild>
                <button
                  className="p-2 rounded-full hover:bg-orange-50 text-orange-600 transition-colors"
                  aria-label={open ? "收起" : "展開"}
                >
                  {open ? <CaretUpIcon className="w-6 h-6" /> : <CaretDownIcon className="w-6 h-6" />}
                </button>
              </Collapsible.Trigger>
            </div>

            <Collapsible.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
              <div className="mt-4 pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-800 mb-2 text-sm uppercase tracking-wider">工作內容：</h4>
                <div className="text-gray-600 space-y-2 max-w-none text-sm leading-relaxed">
                  {details}
                </div>
              </div>
            </Collapsible.Content>
          </div>
        </Collapsible.Root>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="relative h-[500px] overflow-hidden">
        <Parallax
          className="absolute inset-0 h-full w-full"
          bgImage="/bg.jpg"
          bgImageStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
          strength={300}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/50" />
        </Parallax>

        <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
          <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-32 h-32 rounded-full border-4 border-white/30 shadow-2xl mb-6">
            <Avatar.Image
              className="w-full h-full object-cover"
              src="/me.jpg"
              alt="Yu Lun Chou"
            />
            <Avatar.Fallback className="w-full h-full flex items-center justify-center bg-orange-500 text-3xl font-bold" delayMs={600}>
              C
            </Avatar.Fallback>
          </Avatar.Root>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 drop-shadow-md">
            Yu Lun Chou
          </h1>

          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
              >
                <GitHubLogoIcon className="w-8 h-8" />
              </a>
            </HoverCard.Trigger>
            <HoverCard.Portal>
              <HoverCard.Content
                className="bg-white p-3 rounded-lg shadow-xl border border-gray-100 text-sm font-medium text-gray-700 animate-in fade-in zoom-in duration-200"
                side="top"
                sideOffset={15}
              >
                Follow me on Github
                <HoverCard.Arrow className="fill-white" />
              </HoverCard.Content>
            </HoverCard.Portal>
          </HoverCard.Root>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-24 w-full">
        {/* About Me */}
        <section id="about" className="scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
              關於我
              <span className="w-8 h-1 bg-orange-500 rounded-full"></span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              因為想學一技之長而跑去學電腦程式語言，學著學著發現原來程式語言能應用在許多方面，覺得相當有趣，目前正在程式語言方面持續學習。
            </p>
          </div>
        </section>

        {/* Job Experience */}
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
                  <Link href="/projects" className="inline-flex items-center text-orange-600 font-bold hover:underline">
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
                  <Link href="/projects" className="inline-flex items-center text-orange-600 font-bold hover:underline">
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
                  <Link href="/projects" className="inline-flex items-center text-orange-600 font-bold hover:underline">
                    查看專案經歷 →
                  </Link>
                </div>
              }
            />
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-20 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">作品集</h2>
          <Tabs.Root className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" defaultValue="js">
            <Tabs.List className="flex border-b border-gray-100 bg-gray-50/50" aria-label="專案分類">
              {[
                { value: 'js', icon: faJs },
                { value: 'node', icon: faNode },
                { value: 'vue', icon: faVuejs },
                { value: 'react', icon: faReact },
                { value: 'design', icon: faPalette },
              ].map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  className="flex-1 flex items-center justify-center py-4 px-2 text-gray-400 hover:text-orange-500 data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-orange-500 transition-all outline-none"
                  value={tab.value}
                >
                  <FontAwesomeIcon icon={tab.icon} size="2x" />
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="p-8 min-h-[200px] flex items-center justify-center">
              <Tabs.Content value="js" className="outline-none animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">JavaScript Projects</h3>
                  <p className="text-gray-500">相關專案內容正在整理中...</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="node" className="outline-none animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Node.js Projects</h3>
                  <p className="text-gray-500">相關專案內容正在整理中...</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="vue" className="outline-none animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Vue.js Projects</h3>
                  <p className="text-gray-500">相關專案內容正在整理中...</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="react" className="outline-none animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">React Projects</h3>
                  <p className="text-gray-500">相關專案內容正在整理中...</p>
                </div>
              </Tabs.Content>
              <Tabs.Content value="design" className="outline-none animate-in fade-in duration-300">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">UI/UX Design</h3>
                  <p className="text-gray-500">相關設計作品正在整理中...</p>
                </div>
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </section>
      </div>
    </div>
  );
}
