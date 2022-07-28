import React from "react";
import Layout from "src/components/layouts/Dashboard/layout";
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
    <Layout title="Dashboard - Site Multi Harapan Utama">
      {/* <div ref={parallax.ref} style={{ height: 100, width: 100, backgroundColor: 'rgba(255,125,125,1)', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}></div> */}
      <Banner />
    </Layout>
  );
}
