import { cn } from "@/lib/utils";

interface SimpleColorBlockProps {
  name: string;
  className: string;
}

export function ColorBlock({ name, className }: SimpleColorBlockProps) {
  return (
    <div className="flex items-center gap-4">
      <div className={cn("size-12 rounded border", className)} />
      <div>
        <div className="font-medium">{name}</div>
        <code className="font-mono text-muted-foreground text-sm">
          --{className.slice(3)}
        </code>
      </div>
    </div>
  );
}

// Utility function to calculate contrast ratio
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map(c => {
    c = c / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

function getContrastRatio(color1: string, color2: string): number {
  const rgb1 = hexToRgb(color1);
  const rgb2 = hexToRgb(color2);
  
  if (!rgb1 || !rgb2) return 1;
  
  const lum1 = getLuminance(rgb1.r, rgb1.g, rgb1.b);
  const lum2 = getLuminance(rgb2.r, rgb2.g, rgb2.b);
  
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  
  return (brightest + 0.05) / (darkest + 0.05);
}

function getAccessibilityBadge(contrastRatio: number): { level: string; className: string } {
  if (contrastRatio >= 7.0) {
    return { level: "AAA", className: "bg-green-100 text-green-800 border-green-200" };
  } else if (contrastRatio >= 4.5) {
    return { level: "AA", className: "bg-blue-100 text-blue-800 border-blue-200" };
  } else if (contrastRatio >= 3.0) {
    return { level: "AA Large", className: "bg-yellow-100 text-yellow-800 border-yellow-200" };
  } else {
    return { level: "Fail", className: "bg-red-100 text-red-800 border-red-200" };
  }
}

interface GTColorBlockProps {
  name: string;
  token: string;
  hex: string;
  description?: string;
  usage?: string;
  style?: React.CSSProperties;
  isPrimary?: boolean;
}

export function GTColorBlock({ name, token, hex, description, usage, style, isPrimary = false }: GTColorBlockProps) {
  const whiteContrast = getContrastRatio(hex, "#FFFFFF");
  const blackContrast = getContrastRatio(hex, "#000000");
  const bestContrast = whiteContrast > blackContrast ? whiteContrast : blackContrast;
  const bestTextColor = whiteContrast > blackContrast ? "#FFFFFF" : "#000000";
  
  const accessibilityBadge = getAccessibilityBadge(bestContrast);

  return (
    <div className={cn("rounded-lg border bg-card p-4", isPrimary && "ring-2 ring-blue-200 bg-blue-50/10")}>
      {isPrimary && (
        <div className="mb-2">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200">
            Primary Color
          </span>
        </div>
      )}
      <div className="flex items-center gap-4 mb-3">
        <div 
          className="size-16 rounded-lg border shadow-sm relative overflow-hidden"
          style={{ backgroundColor: hex, ...style }}
        >
          {/* Sample text overlay to show contrast */}
          <div 
            className="absolute inset-0 flex items-center justify-center text-xs font-medium"
            style={{ color: bestTextColor }}
          >
            Aa
          </div>
        </div>
        <div className="flex-1">
          <div className="font-semibold text-lg">{name}</div>
          <code className="font-mono text-muted-foreground text-sm block mt-1">
            {token}
          </code>
          <code className="font-mono text-muted-foreground text-xs block mt-1">
            {hex}
          </code>
          {/* Accessibility information */}
          <div className="flex items-center gap-2 mt-2">
            <span className={cn("inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border", accessibilityBadge.className)}>
              {accessibilityBadge.level}
            </span>
            <span className="text-xs text-muted-foreground">
              {bestContrast.toFixed(1)}:1
            </span>
          </div>
        </div>
      </div>
      {description && (
        <p className="text-sm text-muted-foreground mb-2">{description}</p>
      )}
      {usage && (
        <div className="text-xs text-muted-foreground">
          <span className="font-medium">Usage:</span> {usage}
        </div>
      )}
      {/* Contrast details */}
      <div className="mt-3 pt-3 border-t border-border">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex justify-between">
            <span className="text-muted-foreground">vs White:</span>
            <span className="font-mono">{whiteContrast.toFixed(1)}:1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">vs Black:</span>
            <span className="font-mono">{blackContrast.toFixed(1)}:1</span>
          </div>
        </div>
      </div>
    </div>
  );
}

interface GTTintBlockProps {
  name: string;
  token: string;
  hex: string;
  intensity: string;
}

export function GTTintBlock({ name, token, hex, intensity }: GTTintBlockProps) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg border bg-card">
      <div 
        className="size-10 rounded border shadow-sm"
        style={{ backgroundColor: hex }}
      />
      <div className="flex-1">
        <div className="font-medium text-sm">{name} {intensity}</div>
        <code className="font-mono text-muted-foreground text-xs block">
          {token}
        </code>
        <code className="font-mono text-muted-foreground text-xs block">
          {hex}
        </code>
      </div>
    </div>
  );
}

interface GTTintFamilyProps {
  familyName: string;
  colors: Array<{
    name: string;
    token: string;
    hex: string;
    intensity: string;
  }>;
}

export function GTTintFamily({ familyName, colors }: GTTintFamilyProps) {
  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-lg">{familyName} Family</h3>
      <div className="grid gap-2">
        {colors.map((color) => (
          <GTTintBlock
            key={color.token}
            name={color.name}
            token={color.token}
            hex={color.hex}
            intensity={color.intensity}
          />
        ))}
      </div>
    </div>
  );
}

interface LogoBlockProps {
  name: string;
  src: string;
  description: string;
  className?: string;
}

export function LogoBlock({ name, src, description, className }: LogoBlockProps) {
  return (
    <div className="rounded-lg border p-6 bg-card">
      <div className="mb-4 flex min-h-[80px] items-center justify-center bg-background p-4 rounded border">
        <img
          src={src}
          alt={name}
          className={cn("max-h-16 w-auto object-contain", className)}
        />
      </div>
      <div>
        <div className="font-medium text-sm">{name}</div>
        <div className="text-muted-foreground text-xs mt-1">{description}</div>
        <code className="font-mono text-muted-foreground text-xs mt-2 block">
          {src}
        </code>
      </div>
    </div>
  );
}
