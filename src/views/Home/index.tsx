import TitlePage from "atoms/TitlePage";
import React from "react";
import Banner from "views/Home/Banner";
// import { useParallax } from 'react-scroll-parallax';
export default function Home() {
  // const parallax = useParallax<HTMLDivElement>({
  //   translateX: ['-400px', '0px'],
  //   scale: [0.75, 2],
  //   rotate: [-180, 0],
  //   easing: "easeInQuad",
  //   speed: -5
  // });

  return (
    <>
      <TitlePage type="h3" styles={{ fontSize: "22px" }}>Dashboard - Site Multi Harapan Utama</TitlePage>
      {/* <div ref={parallax.ref} style={{ height: 100, width: 100, backgroundColor: 'rgba(255,125,125,1)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div> */}
      <Banner />
    </>
  );
}
