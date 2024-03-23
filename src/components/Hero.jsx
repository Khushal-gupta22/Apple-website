import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { heroVideo, smallHeroVideo } from "../utils/imageExports";

const Hero = () => {
  const getInitialVideoSrc = () =>
    window.innerWidth < 760 ? smallHeroVideo : heroVideo;
  const [videoSrc, setVideoSrc] = useState(getInitialVideoSrc);

  const handleVideoSrc = () => {
    const newVideoSrc = window.innerWidth < 760 ? smallHeroVideo : heroVideo;
    setVideoSrc(newVideoSrc);
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoSrc);

    return () => {
      window.removeEventListener("resize", handleVideoSrc);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });

    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  }, []);

  //   console.log(videoSrc);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video
            key={videoSrc}
            className="pointer-events-none"
            autoPlay={true}
            muted={true}
            loop={true}
            playsInline={true}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn font-semibold">
          Buy
        </a>
        <p className="font-normal text-xl">From $199/month or $1199</p>
      </div>
    </section>
  );
};

export default Hero;
