"use client";

import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import { HomeIcon, PersonIcon, BackpackIcon, Pencil2Icon } from '@radix-ui/react-icons';

const navItems = [
  { id: 'hero', icon: <HomeIcon />, label: '首頁' },
  { id: 'about', icon: <PersonIcon />, label: '關於我' },
  { id: 'experience', icon: <BackpackIcon />, label: '工作經歷' },
  { id: 'portfolio', icon: <Pencil2Icon />, label: '作品集' },
];

export const RightNav = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Tooltip.Provider>
      <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-lg border border-gray-200">
        {navItems.map((item) => (
          <Tooltip.Root key={item.id}>
            <Tooltip.Trigger asChild>
              <button
                onClick={() => scrollTo(item.id)}
                className="p-3 rounded-full hover:bg-orange-100 text-gray-600 hover:text-orange-600 transition-colors"
                aria-label={item.label}
              >
                {item.icon}
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-gray-900 text-white px-3 py-1.5 rounded text-xs animate-in fade-in zoom-in duration-200"
                side="left"
                sideOffset={10}
              >
                {item.label}
                <Tooltip.Arrow className="fill-gray-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        ))}
      </nav>
    </Tooltip.Provider>
  );
};
