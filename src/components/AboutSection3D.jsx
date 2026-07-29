"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";


export default function AboutSection3D() {
  const sectionRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const img = imgRef.current;

    if (!section || !img) return;

    const xTo = gsap.quickTo(img, "rotationY", {
      duration: 0.6,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(img, "rotationX", {
      duration: 0.6,
      ease: "power3.out",
    });

    const zTo = gsap.quickTo(img, "z", {
      duration: 0.6,
      ease: "power3.out",
    });

    const handleMouseMove = (e) => {
      const rect = section.getBoundingClientRect();

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      xTo(x * 35);
      yTo(-y * 35);
      zTo(60);
    };

    const handleLeave = () => {
      xTo(0);
      yTo(0);
      zTo(0);
    };

    section.addEventListener("mousemove", handleMouseMove);
    section.addEventListener("mouseleave", handleLeave);

    return () => {
      section.removeEventListener("mousemove", handleMouseMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-32 bg-base-100 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE */}
          <div className="relative z-20">
            <p className="uppercase tracking-[0.3em] text-error font-bold mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl md:text-7xl font-black uppercase leading-none">
              Train Like
              <br />
              An Athlete
            </h2>

            <p className="mt-8 max-w-md text-base-content/70">
              Professional coaching, elite equipment, and personalized programs designed for real results.
            </p>

            <button className="btn glitch-btn btn-lg mt-8">
              Explore Programs
            </button>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative h-[700px] w-full">

            {/* Background word */}
            <h1 className="absolute top-1/2 -translate-y-1/2 left-0 text-[12rem] md:text-[16rem] font-black opacity-5 select-none">
              FORGE
            </h1>

            {/* Glow */}
            <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-error/20 blur-3xl rounded-full"></div>

            {/* 3D Athlete */}
            <img
              ref={imgRef}
              src="/image/Athlete.png"
              alt="Athlete"
              className="
                absolute
                bottom-0
                right-0
                z-10
                h-[600px] md:h-[700px]
                object-contain
                drop-shadow-2xl
                will-change-transform
              "
              style={{
                transformStyle: "preserve-3d",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}