"use client";

import { usePathname } from 'next/navigation';
import { RightNav } from './RightNav';

export const NavWrapper = () => {
  const pathname = usePathname();
  // 在 GitHub Pages 上，pathname 可能包含 basePath (例如 /portfolio)
  const isHomePage = pathname === '/' || pathname === '/portfolio' || pathname === '/portfolio/';

  if (!isHomePage) return null;

  return <RightNav />;
};
