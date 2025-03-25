"use client";

import { useEffect } from "react";
import Navbar from "./component/Navbar";
import Homepage from "./component/Homepage";
import Footer from "./component/Footer";
import Marquee from "./component/Marquee";
import About from "./component/About";
import Appimage from "./component/Appimage";
import Featured from "./component/Featured";
import Price from "./component/Price";
// import Features from "./component/Features";
import LocomotiveScroll from "locomotive-scroll";

function Home() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen p-0 pb-0 gap-0 sm:p-0 font-[family-name:var(--font-geist-sans)]">
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </header>

    <main className="flex flex-col items-center w-full" data-scroll-container>
        <Homepage />
        {/* <Features/> */}
        <Marquee />
        <About />
        <Appimage />
        <Featured />
        <Price />
      </main>

      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
