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
  const [imageError, setImageError] = useState(false);

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

  // Fallback component if image fails to load
  const LogoFallback = ({ text }: { text: string }) => (
    <div className={`flex items-center justify-center bg-primary text-primary-foreground font-bold rounded ${className}`}>
      <span className={variant === "mark" ? "text-xs" : "text-sm"}>{text}</span>
    </div>
  );

  // If not mounted yet, use default (light) theme to prevent hydration mismatch
  if (!mounted) {
    if (variant === "mark") {
      return imageError ? (
        <LogoFallback text="GT" />
      ) : (
        <Image
          src="/assets/gtreasury-logo-mark.svg"
          alt="GTreasury"
          width={32}
          height={32}
          className={`h-8 w-8 ${className}`}
          priority
          onError={() => setImageError(true)}
        />
      );
    }

    return imageError ? (
      <LogoFallback text="GTreasury" />
    ) : (
      <Image
        src="/assets/gtreasury-logo-rgb.svg"
        alt="GTreasury"
        width={120}
        height={29}
        className={`h-7 w-auto ${className}`}
        priority
        onError={() => setImageError(true)}
      />
    );
  }

  if (variant === "mark") {
    return imageError ? (
      <LogoFallback text="GT" />
    ) : (
      <Image
        src="/assets/gtreasury-logo-mark.svg"
        alt="GTreasury"
        width={32}
        height={32}
        className={`h-8 w-8 ${className}`}
        priority
        onError={() => setImageError(true)}
      />
    );
  }

  // For full logo, use appropriate color variant based on theme
  const logoSrc = isDark
    ? "/assets/gtreasury-logo-rgb-white.svg"
    : "/assets/gtreasury-logo-rgb.svg";

  return imageError ? (
    <LogoFallback text="GTreasury" />
  ) : (
    <Image
      src={logoSrc}
      alt="GTreasury"
      width={120}
      height={29}
      className={`h-7 w-auto ${className}`}
      priority
      onError={() => setImageError(true)}
    />
  );
}
