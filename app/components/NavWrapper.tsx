"use client";

import { usePathname } from 'next/navigation';
import { RightNav } from './RightNav';

export const NavWrapper = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  if (!isHomePage) return null;

  return <RightNav />;
};
