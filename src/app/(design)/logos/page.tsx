"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, Copy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface LogoCardProps {
  name: string;
  src: string;
  description: string;
  className?: string;
  downloadName?: string;
}

function LogoCard({ name, src, description, className, downloadName }: LogoCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(src);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = src;
    link.download = downloadName || name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="group rounded-lg border bg-card p-6 transition-all hover:shadow-md">
      <div className={cn("mb-4 flex h-32 items-center justify-center rounded-lg border bg-background p-4", className)}>
        <img src={src} alt={name} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="space-y-3">
        <div>
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="flex-1"
          >
            <Copy className="mr-2 h-3 w-3" />
            {copied ? "Copied!" : "Copy Path"}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="flex-1"
          >
            <Download className="mr-2 h-3 w-3" />
            Download
          </Button>
        </div>
        <code className="block text-xs text-muted-foreground break-all">{src}</code>
      </div>
    </div>
  );
}

// GTreasury Logos Data
const gtreasury = {
  primary: [
    {
      name: "GTreasury Full Logo (Color)",
      src: "/assets/gtreasury/gtreasury-logo-rgb.svg",
      description: "Primary logo with full branding and color gradient. Use for main branding.",
      downloadName: "gtreasury-logo-color.svg"
    },
    {
      name: "GTreasury Full Logo (White)",
      src: "/assets/gtreasury/gtreasury-logo-rgb-white.svg",
      description: "White version for dark backgrounds and overlays.",
      downloadName: "gtreasury-logo-white.svg"
    },
    {
      name: "GTreasury Symbol Only",
      src: "/assets/gtreasury/gtreasury-logo-rgb-symbol-only.svg",
      description: "Standalone symbol without text for compact spaces and icons.",
      downloadName: "gtreasury-symbol.svg"
    },
    {
      name: "GTreasury Logo Mark",
      src: "/assets/gtreasury/gtreasury-logo-mark.svg",
      description: "Simplified logo mark for favicons and small applications.",
      downloadName: "gtreasury-mark.svg"
    }
  ],
  extended: [
    {
      name: "GTreasury Logo (RGB)",
      src: "/assets/gtreasury/GTreasury-Logo-RGB.svg",
      description: "Standard horizontal logo in full color.",
      downloadName: "GTreasury-Logo-RGB.svg"
    },
    {
      name: "GTreasury Logo (White)",
      src: "/assets/gtreasury/GTreasury-Logo-White-RGB.svg",
      description: "White version for dark backgrounds.",
      downloadName: "GTreasury-Logo-White.svg"
    },
    {
      name: "GTreasury Stacked Logo",
      src: "/assets/gtreasury/GTreasury-Logo-Stacked-RGB.svg",
      description: "Vertical stacked version for narrow spaces.",
      downloadName: "GTreasury-Logo-Stacked.svg"
    },
    {
      name: "GTreasury Stacked (White)",
      src: "/assets/gtreasury/GTreasury-Logo-Stacked-White-RGB.svg",
      description: "White stacked version for dark backgrounds.",
      downloadName: "GTreasury-Logo-Stacked-White.svg"
    }
  ]
};

// GSmart Logos Data
const gsmart = {
  primary: [
    {
      name: "GSmart Logo (Gradient on White)",
      src: "/assets/gsmart/GSmart logo (Gradient on White).svg",
      description: "Primary GSmart logo with signature gradient on white background.",
      downloadName: "gsmart-logo-gradient.svg"
    },
    {
      name: "GSmart Logo (Hot Pink on White)",
      src: "/assets/gsmart/GSmart logo (Hot Pink on White).svg",
      description: "GSmart logo in hot pink for single-color applications.",
      downloadName: "gsmart-logo-pink.svg"
    },
    {
      name: "GSmart Logo (White on Gradient)",
      src: "/assets/gsmart/GSmart logo (White on Gradient).svg",
      description: "White logo on gradient background for dark themes.",
      downloadName: "gsmart-logo-white-gradient.svg"
    },
    {
      name: "GSmart Symbol (Hot Pink)",
      src: "/assets/gsmart/GSmart Symbol Hot Pink.svg",
      description: "GSmart symbol only in hot pink for icons and compact uses.",
      downloadName: "gsmart-symbol.svg"
    }
  ],
  products: [
    {
      name: "GSmart Risk (Gradient)",
      src: "/assets/gsmart/GSmart logo - Risk (White on Gradient).svg",
      description: "GSmart Risk product logo with gradient background.",
      downloadName: "gsmart-risk-gradient.svg"
    },
    {
      name: "GSmart Liquidity (Gradient)",
      src: "/assets/gsmart/GSmart logo - Liquidity (White on Gradient).svg",
      description: "GSmart Liquidity product logo with gradient background.",
      downloadName: "gsmart-liquidity-gradient.svg"
    },
    {
      name: "GSmart Ledger (Gradient)",
      src: "/assets/gsmart/GSmart logo - Ledger (White on Gradient).svg",
      description: "GSmart Ledger product logo with gradient background.",
      downloadName: "gsmart-ledger-gradient.svg"
    },
    {
      name: "GSmart Forecast (Gradient)",
      src: "/assets/gsmart/GSmart logo - Forecast (White on Gradient).svg",
      description: "GSmart Forecast product logo with gradient background.",
      downloadName: "gsmart-forecast-gradient.svg"
    },
    {
      name: "GSmart Connectivity (Gradient)",
      src: "/assets/gsmart/GSmart logo - Connectivity (White on Gradient).svg",
      description: "GSmart Connectivity product logo with gradient background.",
      downloadName: "gsmart-connectivity-gradient.svg"
    }
  ]
};

export default function LogosPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-8">
        <Button variant="ghost" size="sm" asChild className="mb-4">
          <Link href="/">
            <ArrowLeft className="mr-2 size-4" />
            Back to Home
          </Link>
        </Button>

        <h1 className="font-bold text-3xl tracking-tight">Brand Assets & Logos</h1>
        <p className="mt-1 text-muted-foreground">
          Complete collection of GTreasury and GSmart brand assets for various use cases and applications
        </p>
      </div>

      {/* Usage Guidelines */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">Usage Guidelines</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-3">GTreasury Brand</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Use the full color logo for primary branding</li>
              <li>• White version for dark backgrounds only</li>
              <li>• Symbol-only for social media and compact spaces</li>
              <li>• Maintain minimum clear space around logos</li>
              <li>• Do not modify colors or proportions</li>
            </ul>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <h3 className="font-semibold text-lg mb-3">GSmart Brand</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Gradient version is preferred for primary use</li>
              <li>• Hot pink version for single-color applications</li>
              <li>• Product logos for specific GSmart modules</li>
              <li>• White versions only on appropriate backgrounds</li>
              <li>• Preserve gradient integrity in all applications</li>
            </ul>
          </div>
        </div>
      </section>

      {/* GTreasury Primary Logos */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">GTreasury Primary Logos</h2>
        <p className="mb-6 text-muted-foreground">
          Core GTreasury brand assets for primary use cases and general branding applications.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gtreasury.primary.map((logo) => (
            <LogoCard
              key={logo.name}
              name={logo.name}
              src={logo.src}
              description={logo.description}
              downloadName={logo.downloadName}
              className={logo.name.includes("White") ? "bg-slate-800" : ""}
            />
          ))}
        </div>
      </section>

      {/* GTreasury Extended Collection */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">GTreasury Extended Collection</h2>
        <p className="mb-6 text-muted-foreground">
          Additional GTreasury logo variations including stacked versions and alternative formats.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gtreasury.extended.map((logo) => (
            <LogoCard
              key={logo.name}
              name={logo.name}
              src={logo.src}
              description={logo.description}
              downloadName={logo.downloadName}
              className={logo.name.includes("White") ? "bg-slate-800" : ""}
            />
          ))}
        </div>
      </section>

      {/* GSmart Primary Logos */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">GSmart Primary Logos</h2>
        <p className="mb-6 text-muted-foreground">
          Core GSmart brand assets featuring the signature gradient and primary brand variations.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {gsmart.primary.map((logo) => (
            <LogoCard
              key={logo.name}
              name={logo.name}
              src={logo.src}
              description={logo.description}
              downloadName={logo.downloadName}
              className={logo.name.includes("Gradient") ? "bg-slate-800" : ""}
            />
          ))}
        </div>
      </section>

      {/* GSmart Product Logos */}
      <section className="mb-12">
        <h2 className="mb-4 font-semibold text-xl">GSmart Product Logos</h2>
        <p className="mb-6 text-muted-foreground">
          Product-specific GSmart logos for individual modules and specialized applications.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {gsmart.products.map((logo) => (
            <LogoCard
              key={logo.name}
              name={logo.name}
              src={logo.src}
              description={logo.description}
              downloadName={logo.downloadName}
              className="bg-slate-800"
            />
          ))}
        </div>
      </section>

      {/* Download Information */}
      <section className="mb-12">
        <div className="rounded-lg border bg-blue-50/50 border-blue-200 p-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <Download className="h-5 w-5" />
            Download & Usage Information
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">File Formats Available:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>SVG:</strong> Vector format for web and print</li>
                <li>• <strong>PNG:</strong> High-resolution raster images</li>
                <li>• <strong>Multiple sizes:</strong> Optimized for different uses</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Quick Actions:</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>• <strong>Copy Path:</strong> Get file path for development</li>
                <li>• <strong>Download:</strong> Save logo to your device</li>
                <li>• <strong>View Code:</strong> See the file path reference</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 