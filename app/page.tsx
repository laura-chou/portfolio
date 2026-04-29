"use client";

import { useState } from "react";
import { Parallax } from 'react-parallax';
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Tabs from "@radix-ui/react-tabs";
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { GitHubLogoIcon, CaretUpIcon, CaretDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faVuejs, faReact, faAngular } from '@fortawesome/free-brands-svg-icons'
import { faPalette, faCode } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link';
import '@/styles/hero.css';

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

const ProjectList = ({ projects }: { projects: { name: string, description: string | React.ReactNode, link: string }[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    {projects.map((project, index) => {
      const isGitHub = project.link.includes('github.com');
      return (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline">
              {project.name}
            </a>
          </h3>
          <div className="text-gray-600 text-sm leading-relaxed flex-grow">
            {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
          </div>
          <div className="mt-4 pt-4 border-t border-gray-50">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium text-gray-400 hover:text-orange-500 transition-colors">
              {isGitHub ? (
                <>
                  <GitHubLogoIcon className="mr-1 w-4 h-4" /> View Source
                </>
              ) : (
                <>
                  <ExternalLinkIcon className="mr-1 w-4 h-4" /> View Project
                </>
              )}
            </a>
          </div>
        </div>
      );
    })}
  </div>
);

export default function Home() {
  const portfolioData = {
    vue: [
      { name: '交給命運', description: '這是一個抽籤（抽卡）功能的網站，模擬隨機抽取結果的互動體驗', link: 'https://github.com/laura-chou/destiny-draw' },
      { name: '旅食住行網', description: '一個旅遊資訊網站，提供景點介紹與相關資料，方便使用者查詢與瀏覽旅遊內容', link: 'https://github.com/laura-chou/tourism-info' },
      { name: '番茄鐘', description: '一個實作番茄工作法的時間管理工具', link: 'https://github.com/laura-chou/pomodoro' },
      { name: '線上相簿', description: '提供照片上傳、瀏覽與管理功能，讓使用者可以整理並展示個人圖片內容。', link: 'https://github.com/laura-chou/photo-album' },
    ],
    react: [
      { name: '待辦事項清單', description: '一個有增刪改功能的 Todo List', link: 'https://github.com/laura-chou/react-todo-list' },
      { name: '77Play 會員系統', description: '77Play 桌遊店的會員管理系統，方便商家管理會員金流', link: 'https://github.com/laura-chou/77PlaySystem' },
      { name: '錢跡', description: '一個債務管理系統，用來協助使用者清楚管理彼此之間的金錢往來與還款狀況', link: 'https://github.com/laura-chou/money-trace' },
    ],
    node: [
      { name: '77Play 會員系統 API', description: '主要提供 77PLAY 會員管理系統的 API', link: 'https://github.com/laura-chou/77PlaySystem/tree/77-play-api' },
      { name: '線上相簿 API', description: '主要提供線上相簿網站的 API', link: 'https://github.com/laura-chou/photo-album/tree/photo-album-api' },
      { name: '旅遊資訊網站 API', description: '主要提供旅遊資訊網站的 API', link: 'https://github.com/laura-chou/tourism-info/tree/tourism-info-api' },
      { name: '遊戲 API', description: (
        <div>
          <p>集中管理三個遊戲的後端功能，提供統一的資料存取與服務接口</p>
          <ul className="list-disc list-inside mt-1 ml-2">
            <li>搶救錢包大作戰</li>
            <li>象棋記憶大賽</li>
            <li>怪獸終結者</li>
          </ul>
        </div>
      ), link: 'https://github.com/laura-chou/game-api' },
      { name: '人生好難 Bot', description: 'LINE 機器人，每天定時廣播一則語錄、小知識等訊息', link: 'https://github.com/laura-chou/life-is-hard-line-bot' },
      { name: '電影查詢機器人', description: 'LINE 機器人，可透過 LINE 搜尋電影資訊並回傳結果', link: 'https://github.com/laura-chou/movie-search-line-bot' },
      { name: '旅食住行查詢機器人', description: 'LINE 機器人，提供旅遊景點與相關資訊查詢', link: 'https://github.com/laura-chou/tourism-info-line-bot' },
    ],
    angular: [
      { name: '待辦事項清單', description: '一個有增刪改功能的 Todo List', link: 'https://github.com/laura-chou/angular-todo-list' },
    ],
    js: [
      { name: '海洋主題時鐘', description: '一個以海洋風格為主題的時鐘網站，結合視覺設計與時間顯示功能', link: 'https://github.com/laura-chou/ocean-theme-clock' },
      { name: 'Zen Garden', description: '透過 CSS 改變版面樣式，展示不同視覺風格的呈現效果', link: 'https://github.com/laura-chou/zen-garden' },
      { name: '個人名片', description: '把個人資訊做成一個簡單的網頁名片', link: 'https://github.com/laura-chou/business-card' },
      { name: '怪獸終結者', description: '玩家透過點擊來攻擊怪物，怪物會有血量或狀態變化，成功擊敗怪物後進入下一關', link: 'https://github.com/laura-chou/hit-monsters' },
      { name: '搶救荷包大作戰', description: '玩家在畫面中收集掉落的鈔票來累積金額，遊戲過程中會出現不同事件增加變化(增加時間的道具、彩券掉落)，目標是在時間內累積越多金額越高分', link: 'https://github.com/laura-chou/rescue-money' },
      { name: '象棋記憶大賽', description: '玩家透過翻牌找出相同的象棋棋子配對，以記憶力與反應力為核心玩法，配對成功後牌面會固定或消除，直到完成所有配對為止', link: 'https://github.com/laura-chou/turn-chess' },
    ],
    tdd: [
      { name: '購物車系統 TDD', description: '核心功能：加入商品、計算總價、折扣', link: 'https://github.com/laura-chou/shopping-cart-kata' },
      { name: '火星探測車 TDD', description: '核心功能：接收移動指令（前進、後退、左轉、右轉）、座標移動、邊界控制', link: 'https://github.com/laura-chou/mars-rover-kata' },
      { name: '賓果遊戲 TDD', description: '核心功能：產生賓果卡、標記數字、判斷連線（橫向、縱向、對角線）', link: 'https://github.com/laura-chou/bingo-kata' },
      { name: '保齡球計分 TDD', description: '核心功能：計算 10 局分數、處理 spare / strike、加權 bonus 分數', link: 'https://github.com/laura-chou/bowling-kata' },
      { name: '骰子梭哈 TDD', description: '核心功能：骰子組合比大小、特殊牌型判定（豹子、順子、對子）', link: 'https://github.com/laura-chou/sibala-kata' },
      { name: '網球計分 TDD', description: '核心功能：計分系統（0、15、30、40）、deuce、勝負判定', link: 'https://github.com/laura-chou/tennis-kata' },
    ],
    design: [
      { name: 'Illustrator', description: '設計作品集 - Illustrator', link: 'https://drive.google.com/file/d/16lcpb8QxNGaLfyTbxf5VofsSNvaGf07g/view?usp=sharing' },
      { name: 'Photoshop', description: '設計作品集 - Photoshop', link: 'https://drive.google.com/file/d/1L8PmyJV-0mdfepliPNt857DTJJ20gRLF/view?usp=sharing' },
      { name: 'Line 貼圖', description: '設計作品集 - Line 貼圖', link: 'https://drive.google.com/file/d/1gsR1xPgEeTkX8zWl3i1c9NqeDkaBysG2/view?usp=sharing' },
      { name: 'LOGO 設計', description: '設計作品集 - LOGO 設計', link: 'https://drive.google.com/file/d/1d30veP87RVIcDqyS35SRiztjHkqZPYSH/view?usp=sharing' },
    ]
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Parallax
          className="h-full w-full"
          bgImage="/bg.jpg"
          bgImageStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
          strength={300}
        >
          <div className="bg-gradient-to-b from-gray-900/70 to-gray-900/50" />
        </Parallax>

        <div className="information">
          <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-32 h-32 rounded-full border-4 border-white/30 shadow-2xl mb-6">
            <Avatar.Image
              className="w-full h-full object-cover"
              src="/me.jpg"
              alt="Yu Lun Chou"
            />
          </Avatar.Root>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4 drop-shadow-md">
            Yu Lun Chou
          </h1>

          <HoverCard.Root>
            <HoverCard.Trigger asChild>
              <a
                href="https://github.com/laura-chou"
                target="_blank"
                rel="noopener noreferrer"
                className="github bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 active:scale-95"
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
        <section id="about" className="mt-10 scroll-mt-20">
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
                    <li>串接第三方金流API</li>
                    <li>Git版本控管</li>
                  </ul>
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

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-20 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">作品集</h2>
          <Tabs.Root className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" defaultValue="js">
            <Tabs.List className="flex border-b border-gray-100 bg-gray-50/50 overflow-x-auto no-scrollbar" aria-label="專案分類">
              {[
                { value: 'js', icon: faJs },
                { value: 'node', icon: faNode },
                { value: 'vue', icon: faVuejs },
                { value: 'react', icon: faReact },
                { value: 'angular', icon: faAngular },
                { value: 'tdd', icon: faCode },
                { value: 'design', icon: faPalette },
              ].map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  className="flex-1 min-w-[60px] flex items-center justify-center py-4 px-2 text-gray-400 hover:text-orange-500 data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:border-b-2 data-[state=active]:border-orange-500 transition-all outline-none"
                  value={tab.value}
                >
                  <FontAwesomeIcon icon={tab.icon} size="2x" />
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="p-8 min-h-[300px]">
              <Tabs.Content value="js" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.js} />
              </Tabs.Content>
              <Tabs.Content value="node" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.node} />
              </Tabs.Content>
              <Tabs.Content value="vue" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.vue} />
              </Tabs.Content>
              <Tabs.Content value="react" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.react} />
              </Tabs.Content>
              <Tabs.Content value="angular" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.angular} />
              </Tabs.Content>
              <Tabs.Content value="tdd" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.tdd} />
              </Tabs.Content>
              <Tabs.Content value="design" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.design} />
              </Tabs.Content>
            </div>
          </Tabs.Root>
        </section>
      </div>
    </div>
  );
}
