"use client";
import { Parallax } from 'react-parallax';

export default function Home() {
  return (
    <>
      <Parallax 
        bgImage="/bg.jpg"
        bgImageStyle={{ objectFit: 'cover', height: '100%' }}
        strength={300}></Parallax>
    </>
  );
}
