"use client";

import { Parallax } from 'react-parallax';
import * as Avatar from "@radix-ui/react-avatar";
import * as HoverCard from "@radix-ui/react-hover-card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Hero = () => {
  return (
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
  );
};
