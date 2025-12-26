"use client";
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <div>
      <Parallax blur={1} bgImage="/bg.jpg" strength={200}></Parallax>
    </div>
  );
}
