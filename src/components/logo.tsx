"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface LogoProps {
  variant?: "full" | "mark";
  className?: string;
}

export function Logo({ variant = "full", className = "" }: LogoProps) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for dark mode class on document element
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    
    checkDarkMode();
    
    // Listen for changes to dark mode
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // If not mounted yet, use default (light) theme to prevent hydration mismatch
  if (!mounted) {
    if (variant === "mark") {
      return (
        <Image
          src="/assets/gtreasury-logo-mark.svg"
          alt="GTreasury"
          width={32}
          height={32}
          className={`h-8 w-8 ${className}`}
          priority
        />
      );
    }

    return (
      <Image
        src="/assets/gtreasury-logo-rgb.svg"
        alt="GTreasury"
        width={120}
        height={29}
        className={`h-7 w-auto ${className}`}
        priority
      />
    );
  }

  if (variant === "mark") {
    return (
      <Image
        src="/assets/gtreasury-logo-mark.svg"
        alt="GTreasury"
        width={32}
        height={32}
        className={`h-8 w-8 ${className}`}
        priority
      />
    );
  }

  // For full logo, use appropriate color variant based on theme
  const logoSrc = isDark
    ? "/assets/GTreasury-Logo-RGB-White.svg"
    : "/assets/gtreasury-logo-rgb.svg";

  return (
    <Image
      src={logoSrc}
      alt="GTreasury"
      width={120}
      height={29}
      className={`h-7 w-auto ${className}`}
      priority
    />
  );
}
