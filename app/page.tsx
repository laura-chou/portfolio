"use client";

import { useState } from "react";
import { Parallax } from 'react-parallax';
import * as Collapsible from "@radix-ui/react-collapsible";
import * as Tabs from "@radix-ui/react-tabs";
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { GitHubLogoIcon, CaretUpIcon, CaretDownIcon, ExternalLinkIcon } from "@radix-ui/react-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faLaptopCode, faVial, faPalette } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import '@/styles/hero.css';

type ExperienceItemProps = {
  company: string;
  department: string;
  role: string;
  period: string;
  details: React.ReactNode;
  tags?: string[];
};

const ExperienceItem = ({ company, department, role, period, details, tags }: ExperienceItemProps) => {
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
                  className="p-2 rounded-full hover:bg-orange-50 text-orange-600 transition-colors cursor-pointer"
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
                {tags && tags.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <span key={index} className="px-2.5 py-1 bg-orange-50 text-orange-600 text-xs font-medium rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Collapsible.Content>
          </div>
        </Collapsible.Root>
      </div>
    </div>
  );
};

export type ProjectLink = {
  label: string;
  url: string;
  isPrimary?: boolean;
};

export type ProjectItem = {
  name: string;
  description: string | React.ReactNode;
  tags?: string[];
  links: ProjectLink[];
};

const ProjectList = ({ projects }: { projects: ProjectItem[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
    {projects.map((project, index) => {
      const primaryLink = project.links.find(l => l.isPrimary) || project.links[0];

      return (
        <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col h-full">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {primaryLink ? (
              <a
                href={primaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:underline"
              >
                {project.name}
              </a>
            ) : (
              project.name
            )}
          </h3>

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, tagIdx) => (
                <span
                  key={tagIdx}
                  className="px-2 py-0.5 bg-orange-50 text-orange-700 text-xs font-medium rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="text-gray-600 text-sm leading-relaxed flex-grow">
            {typeof project.description === 'string' ? <p>{project.description}</p> : project.description}
          </div>

          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap items-center gap-2">
            {project.links.map((linkItem, linkIdx) => {
              const isGitHub = linkItem.url.includes('github.com');
              return (
                <a
                  key={linkIdx}
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    linkItem.isPrimary
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-sm'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                  }`}
                >
                  {isGitHub ? (
                    <GitHubLogoIcon className="mr-1.5 w-3.5 h-3.5" />
                  ) : (
                    <ExternalLinkIcon className="mr-1.5 w-3.5 h-3.5" />
                  )}
                  {linkItem.label}
                </a>
              );
            })}
          </div>
        </div>
      );
    })}
  </div>
);

export default function Home() {
  const portfolioData: {
    aiot: ProjectItem[];
    fullstack: ProjectItem[];
    tdd: ProjectItem[];
    design: ProjectItem[];
  } = {
    aiot: [
      {
        name: 'PulseGuard IoT',
        description: '智慧心率與血氧監測系統：結合 ESP32 與 Python / Streamlit 的遠端健康監控方案。具備即時降噪濾波、雙核多工調度與異常報告主動推播功能。',
        tags: ['Python', 'ESP32', 'Streamlit', 'IoT', 'FreeRTOS'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/pulse-guard-iot', isPrimary: true }
        ]
      },
      {
        name: 'Pacific Parrotlet Behavior Detector',
        description: '基於 YOLOv8 與 Gradio 的雙階段電腦視覺推論系統，先過濾非鸚鵡畫面，再辨識太平洋鸚鵡的 13 種日常行為，支援 Web UI 與命令列操作。',
        tags: ['Python', 'YOLOv8', 'Computer Vision', 'Gradio', 'PyTorch'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/parrot-detection', isPrimary: true }
        ]
      },
      {
        name: 'Mineral RAG',
        description: '基於 LLM 與 LangChain 的雙階段離線 RAG 系統，精準提取礦物專有名詞並檢索生成硬度、化學式等物理特性，支援 Streamlit 網頁與 CLI 介面。',
        tags: ['Python', 'LangChain', 'RAG', 'LLM', 'Streamlit'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/mineral-rag', isPrimary: true }
        ]
      }
    ],

    fullstack: [
      // 1. 完整全端系統/商業應用
      {
        name: 'Vibe Sync 頻率同步中',
        description: '這是一個基於 WebSocket 的即時多人默契問答網頁遊戲',
        tags: ['React', 'Next.js', 'Python', 'WebSocket'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/vibe-sync', isPrimary: true }
        ]
      },
      {
        name: '77Play 會員系統',
        description: '77Play 桌遊店的會員管理與金流維運系統，包含前台會員操作介面與後端 API 服務，方便商家管理會員資產與消費記錄。',
        tags: ['React', 'Node.js', 'Express', 'MySQL', 'RESTful API'],
        links: [
          { label: 'Frontend Source', url: 'https://github.com/laura-chou/77PlaySystem', isPrimary: true },
          { label: 'API Source', url: 'https://github.com/laura-chou/77PlaySystem/tree/77-play-api' }
        ]
      },
      {
        name: '錢跡 (Money Trace)',
        description: '債務與帳務管理系統，協助使用者清楚記錄並追蹤彼此之間的金錢往來、拆帳與還款狀況。',
        tags: ['React', 'JavaScript', 'CSS3'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/money-trace', isPrimary: true }
        ]
      },
      {
        name: '旅食住行網',
        description: '旅遊資訊分享與查詢平台，提供景點特色介紹、交通與相關資訊瀏覽，並建置專屬 API 支援資料存取。',
        tags: ['Vue.js', 'Node.js', 'Express', 'RESTful API'],
        links: [
          { label: 'Frontend Source', url: 'https://github.com/laura-chou/tourism-info', isPrimary: true },
          { label: 'API Source', url: 'https://github.com/laura-chou/tourism-info/tree/tourism-info-api' }
        ]
      },
      {
        name: '線上相簿',
        description: '相簿展示與管理平台，提供照片上傳、分類瀏覽與圖庫管理功能，並搭配專屬後端 API 進行媒體資料處理。',
        tags: ['Vue.js', 'Node.js', 'Express', 'RESTful API'],
        links: [
          { label: 'Frontend Source', url: 'https://github.com/laura-chou/photo-album', isPrimary: true },
          { label: 'API Source', url: 'https://github.com/laura-chou/photo-album/tree/photo-album-api' }
        ]
      },
      {
        name: '番茄鐘 (Pomodoro)',
        description: '實作番茄工作法的時間管理工具，提供專注倒數、休息提醒與週期設定功能，提升日常工作專注度。',
        tags: ['Vue.js', 'JavaScript', 'CSS3'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/pomodoro', isPrimary: true }
        ]
      },
      {
        name: '待辦事項清單',
        description: '具備完整增刪查改（CRUD）功能與狀態篩選的任務清單應用。',
        tags: ['React', 'JavaScript', 'CSS3'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/react-todo-list', isPrimary: true }
        ]
      },
      {
        name: '交給命運',
        description: '抽籤與抽卡互動網站，模擬隨機抽取結果與卡片視覺動效，提供趣味性抉擇體驗。',
        tags: ['Vue.js', 'JavaScript', 'Animation'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/destiny-draw', isPrimary: true }
        ]
      },

      // 2. LINE 機器人
      {
        name: '人生好難 Bot',
        description: 'LINE 智慧推播機器人，每天定時自動廣播精選人生語錄、生活小知識與正向幽默訊息。',
        tags: ['Node.js', 'LINE Messaging API', 'Cron Job'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/life-is-hard-line-bot', isPrimary: true }
        ]
      },
      {
        name: '電影查詢機器人',
        description: 'LINE 聊天機器人，使用者可直接在聊天室內搜尋即時電影資訊、劇情大綱與上映詳情。',
        tags: ['Node.js', 'LINE Messaging API', 'RESTful API'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/movie-search-line-bot', isPrimary: true }
        ]
      },
      {
        name: '旅食住行查詢機器人',
        description: 'LINE 旅遊助理機器人，提供景點資訊、在地推薦與旅遊路線即時查詢回傳服務。',
        tags: ['Node.js', 'LINE Messaging API', 'Chatbot'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/tourism-info-line-bot', isPrimary: true }
        ]
      },

      // 3. 互動小遊戲與樣式
      {
        name: '遊戲後端 API',
        description: (
          <div>
            <p>集中管理多款網頁小遊戲的後端服務，提供統一的資料存取、分數記錄與接口服務：</p>
            <ul className="list-disc list-inside mt-1 ml-2 text-xs">
              <li>怪獸終結者</li>
              <li>搶救荷包大作戰</li>
              <li>象棋記憶大賽</li>
            </ul>
          </div>
        ),
        tags: ['Node.js', 'Express', 'RESTful API'],
        links: [
          { label: 'API Source', url: 'https://github.com/laura-chou/game-api', isPrimary: true }
        ]
      },
      {
        name: '怪獸終結者',
        description: '點擊攻擊怪物的互動網頁遊戲，怪物具備血量條與狀態轉變，擊敗後自動晉級至更高等級關卡。',
        tags: ['JavaScript', 'HTML5', 'CSS3'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/hit-monsters', isPrimary: true }
        ]
      },
      {
        name: '搶救荷包大作戰',
        description: '時間限制收集掉落鈔票的累積計分遊戲，設計隨機掉落的增時道具與彩券事件，增加遊玩趣味。',
        tags: ['JavaScript', 'HTML5 Canvas', 'Game Loop'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/rescue-money', isPrimary: true }
        ]
      },
      {
        name: '象棋記憶大賽',
        description: '翻牌配對相同象棋棋子的益智遊戲，結合記憶力考驗與消除回饋機制。',
        tags: ['JavaScript', 'CSS3 Flip', 'DOM Manipulation'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/turn-chess', isPrimary: true }
        ]
      },
      {
        name: '海洋主題時鐘',
        description: '以海洋風格為視覺主題的動態時鐘網站，結合流暢視覺設計與即時指針/數字時間顯示。',
        tags: ['JavaScript', 'CSS Animation', 'SVG'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/ocean-theme-clock', isPrimary: true }
        ]
      },
      {
        name: 'Zen Garden',
        description: '純粹透過 CSS 樣式置換展現現代版面排版美學，展示多樣化視覺風格與排版控制力。',
        tags: ['CSS3', 'Responsive Design', 'Layout'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/zen-garden', isPrimary: true }
        ]
      },
      {
        name: '個人名片網頁',
        description: '極簡且典雅的個人數位名片網頁，展示個人資訊與聯絡渠道。',
        tags: ['HTML5', 'CSS3', 'Responsive'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/business-card', isPrimary: true }
        ]
      }
    ],

    tdd: [
      {
        name: '購物車系統 TDD',
        description: '以測試驅動開發實踐電商購物車核心邏輯：商品項目添加、數量異動、總價動態計算與階梯式折扣優惠規則。',
        tags: ['TDD', 'Unit Testing', 'Software Design', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/shopping-cart-kata', isPrimary: true }
        ]
      },
      {
        name: '火星探測車 TDD',
        description: '實作經典 Mars Rover Kata：指令接收解析（前進、後退、左轉、右轉）、二維座標位移計算與網格邊界迴圈控制。',
        tags: ['TDD', 'Refactoring', 'Clean Code', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/mars-rover-kata', isPrimary: true }
        ]
      },
      {
        name: '賓果遊戲 TDD',
        description: '賓果核心演算法 TDD 實作：隨機賓果卡生成、號碼標記與高效連線判定（橫向、縱向、兩條對角線）。',
        tags: ['TDD', 'Algorithms', 'Unit Testing', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/bingo-kata', isPrimary: true }
        ]
      },
      {
        name: '保齡球計分 TDD',
        description: '保齡球賽制計分演算法：完整計算 10 局成績、精準處理 Spare / Strike 連鎖加權 Bonus 分數與第十局補球規則。',
        tags: ['TDD', 'Edge Cases', 'Unit Testing', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/bowling-kata', isPrimary: true }
        ]
      },
      {
        name: '骰子梭哈 TDD',
        description: '台灣傳統十八仔（骰子梭哈）比大小演算法：骰子組合點數計算、特殊牌型規則（豹子、順子、單對計算）嚴密測試覆蓋。',
        tags: ['TDD', 'Combinatorics', 'Unit Testing', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/sibala-kata', isPrimary: true }
        ]
      },
      {
        name: '網球計分 TDD',
        description: '網球比分機制實作：標準計分階段（Love、15、30、40）、Deuce 平局判定、Advantage 領先與 Game 局勝負判定。',
        tags: ['TDD', 'State Pattern', 'Unit Testing', 'Kata'],
        links: [
          { label: 'View Source', url: 'https://github.com/laura-chou/tennis-kata', isPrimary: true }
        ]
      }
    ],

    design: [
      {
        name: 'Illustrator 向量插畫與品牌設計',
        description: '設計作品集 - 精選向量幾何構圖、品牌識別元素與商用插畫素材製作。',
        tags: ['Adobe Illustrator', 'Graphic Design', 'Vector Art'],
        links: [
          { label: 'View Portfolio', url: 'https://drive.google.com/file/d/16lcpb8QxNGaLfyTbxf5VofsSNvaGf07g/view?usp=sharing', isPrimary: true }
        ]
      },
      {
        name: 'Photoshop 影像合成與後製處理',
        description: '設計作品集 - 商業主視覺合成、色彩調教、光影精修與多層次素材融合。',
        tags: ['Adobe Photoshop', 'Photo Retouching', 'Visual Composite'],
        links: [
          { label: 'View Portfolio', url: 'https://drive.google.com/file/d/1L8PmyJV-0mdfepliPNt857DTJJ20gRLF/view?usp=sharing', isPrimary: true }
        ]
      },
      {
        name: 'Line 原創貼圖設計',
        description: '設計作品集 - 原創角色 IP 發想、表情情緒繪製與貼圖審核規格完整輸出。',
        tags: ['Character Design', 'Line Sticker', 'Illustration'],
        links: [
          { label: 'View Portfolio', url: 'https://drive.google.com/file/d/1gsR1xPgEeTkX8zWl3i1c9NqeDkaBysG2/view?usp=sharing', isPrimary: true }
        ]
      },
      {
        name: 'LOGO 與品牌標誌設計',
        description: '設計作品集 - 專屬品牌符號意象提煉、字體排印微調與應用規範制定。',
        tags: ['Logo Design', 'Branding', 'Typography'],
        links: [
          { label: 'View Portfolio', url: 'https://drive.google.com/file/d/1d30veP87RVIcDqyS35SRiztjHkqZPYSH/view?usp=sharing', isPrimary: true }
        ]
      }
    ]
  };

  const tabsConfig = [
    {
      value: 'aiot',
      label: 'AIoT 智慧應用',
      enLabel: 'AI & IoT / Python',
      icon: faMicrochip,
    },
    {
      value: 'fullstack',
      label: '全端與網頁',
      enLabel: 'Full-Stack & Web',
      icon: faLaptopCode,
    },
    {
      value: 'tdd',
      label: '軟體工程實踐',
      enLabel: 'Software Practice / TDD',
      icon: faVial,
    },
    {
      value: 'design',
      label: '視覺與平面設計',
      enLabel: 'Visual & Graphic Design',
      icon: faPalette,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section id="hero">
        <Parallax
          className="h-full w-full"
          bgImage="/portfolio/bg.jpg"
          bgImageStyle={{ objectFit: 'cover', height: '100%', width: '100%' }}
          strength={300}
        >
          <div className="bg-gradient-to-b from-gray-900/70 to-gray-900/50" />
        </Parallax>

        <div className="information">
          <Avatar.Root className="inline-flex items-center justify-center align-middle overflow-hidden select-none w-32 h-32 rounded-full border-4 border-white/30 shadow-2xl mb-6">
            <Avatar.Image
              className="w-full h-full object-cover"
              src="/portfolio/me.jpg"
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
              為了學一技之長起手，卻在程式世界裡發現了無窮樂趣！喜愛探索新技術，具備獨立解決問題與跨領域實作能力，無論是前端、後端還是自動化應用，都樂在其中並持續精進。
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
                <ul className="list-disc list-inside space-y-1">
                  <li>負責核心交易系統維護與多管道第三方金流 API 串接，設計安全驗證與 Callback 處理機制。</li>
                  <li>落實單元測試與 Git / CI/CD 自動化流程，進行系統程式碼重構與效能優化。</li>
                </ul>
              }
              tags={["C#", ".NET", "PostgreSQL", "MySQL", "JavaScript", "Git", "CI/CD", "單元測試"]}
            />
            <ExperienceItem
              company="凡達科技有限公司"
              department=""
              role="軟體工程師"
              period="1 年半以上"
              details={
                <ul className="list-disc list-inside space-y-1">
                  <li>獨立負責資策會等大型政府/法人委外專案開發，從需求對接、資料庫規劃到系統上線。</li>
                  <li>設計高擴充性多層級權限控管邏輯，並導入模組化架構落實高內聚低耦合原則。</li>
                </ul>
              }
              tags={["C#", "ASP.NET MVC/API", "WebForms", "MySQL", "JavaScript", "系統架構設計"]}
            />
            <ExperienceItem
              company="創時億網路科技有限公司"
              department="台北研發部"
              role="助理前端工程師"
              period="半年以上"
              details={
                <ul className="list-disc list-inside space-y-1">
                  <li>開發 React Native 內部維運 App，整合 Google Map API 實作多點定位與路線規劃。</li>
                  <li>使用 Python (Selenium/Appium/OpenCV) 研發跨平台自動化流程，並以 Flask 建置全棧原型。</li>
                </ul>
              }
              tags={["React Native", "Python", "RPA", "OpenCV", "Flask", "JavaScript"]}
            />
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-20 pb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">作品集</h2>
          <Tabs.Root className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" defaultValue="aiot">
            <Tabs.List className="flex border-b border-gray-100 bg-gray-50/50 overflow-x-auto no-scrollbar" aria-label="專案分類">
              {tabsConfig.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  className="flex-1 min-w-[140px] flex items-center justify-center gap-2.5 py-4 px-3 text-gray-500 hover:text-orange-500 data-[state=active]:text-orange-600 data-[state=active]:bg-white data-[state=active]:font-semibold data-[state=active]:border-b-2 data-[state=active]:border-orange-500 transition-all outline-none cursor-pointer group"
                  value={tab.value}
                >
                  <FontAwesomeIcon icon={tab.icon as IconProp} className="w-4 h-4 transition-transform group-hover:scale-110" />
                  <span className="text-sm whitespace-nowrap">{tab.label}</span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="p-6 sm:p-8 min-h-[300px]">
              <Tabs.Content value="aiot" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.aiot} />
              </Tabs.Content>
              <Tabs.Content value="fullstack" className="outline-none animate-in fade-in duration-300">
                <ProjectList projects={portfolioData.fullstack} />
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
