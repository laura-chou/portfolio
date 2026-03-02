"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs, faNode, faVuejs, faReact } from '@fortawesome/free-brands-svg-icons';
import { faPalette } from '@fortawesome/free-solid-svg-icons';

const TABS_CONFIG = [
  { value: 'js', icon: faJs, title: 'JavaScript Projects' },
  { value: 'node', icon: faNode, title: 'Node.js Projects' },
  { value: 'vue', icon: faVuejs, title: 'Vue.js Projects' },
  { value: 'react', icon: faReact, title: 'React Projects' },
  { value: 'design', icon: faPalette, title: 'UI/UX Design' },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="scroll-mt-20 pb-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">作品集</h2>
      <Tabs.Root className="flex flex-col w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden" defaultValue="js">
        <Tabs.List className="flex border-b border-gray-100 bg-gray-50/50" aria-label="專案分類">
          {TABS_CONFIG.map((tab) => (
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
          {TABS_CONFIG.map((tab) => (
            <Tabs.Content key={tab.value} value={tab.value} className="outline-none animate-in fade-in duration-300">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{tab.title}</h3>
                <p className="text-gray-500">相關專案內容正在整理中...</p>
              </div>
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </section>
  );
};
