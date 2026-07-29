"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ThemeToggle() {
  const [checked, setChecked] = useState(false);
  const indicatorRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("theme") || "light";
    const isDark = saved === "dark";

    setChecked(isDark);
    document.documentElement.setAttribute("data-theme", saved);

    // set initial position
    gsap.set(indicatorRef.current, {
      x: isDark ? 18 : -18,
    });
  }, []);

  const toggleTheme = (e) => {
    const isDark = e.target.checked;
    setChecked(isDark);

    const theme = isDark ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);

    // 🎯 GSAP BOUNCE ANIMATION
    gsap.to(indicatorRef.current, {
      x: isDark ? 18 : -18,
      duration: 0.6,
      ease: "bounce.out",
    });
  };

  return (
    <label className="label">
      <input
        type="checkbox"
        className="toggle-state"
        checked={checked}
        onChange={toggleTheme}
      />

      <div className="toggle">
        <div ref={indicatorRef} className="indicator"></div>
      </div>
    </label>
  );
}