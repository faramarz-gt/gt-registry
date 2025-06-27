export function LogoFull() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gtreasury-logo-rgb.svg"
        alt="GTreasury Full Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function LogoFullWhite() {
  return (
    <div className="flex items-center justify-center p-6 bg-slate-800 rounded-lg border">
      <img
        src="/assets/gtreasury-logo-rgb-white.svg"
        alt="GTreasury Full Logo White"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function LogoSymbol() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gtreasury-logo-rgb-symbol-only.svg"
        alt="GTreasury Symbol Only"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function LogoMark() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gtreasury-logo-mark.svg"
        alt="GTreasury Logo Mark"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function LogosGrid() {
  return (
    <section className="w-full">
      <div className="mb-6">
        <h2 className="mb-2 font-semibold text-xl">Brand Logos</h2>
        <p className="text-muted-foreground">
          Various versions of the GTreasury brand logo for different use cases and backgrounds.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-3">
          <LogoFull />
          <div>
            <div className="font-medium text-sm">Full Logo (Color)</div>
            <div className="text-muted-foreground text-xs mt-1">
              Primary logo with full branding and color gradient
            </div>
            <code className="font-mono text-muted-foreground text-xs mt-2 block">
              /assets/gtreasury-logo-rgb.svg
            </code>
          </div>
        </div>
        
        <div className="space-y-3">
          <LogoFullWhite />
          <div>
            <div className="font-medium text-sm">Full Logo (White)</div>
            <div className="text-muted-foreground text-xs mt-1">
              White version for dark backgrounds and overlays
            </div>
            <code className="font-mono text-muted-foreground text-xs mt-2 block">
              /assets/gtreasury-logo-rgb-white.svg
            </code>
          </div>
        </div>
        
        <div className="space-y-3">
          <LogoSymbol />
          <div>
            <div className="font-medium text-sm">Symbol Only</div>
            <div className="text-muted-foreground text-xs mt-1">
              Standalone symbol without text for compact spaces
            </div>
            <code className="font-mono text-muted-foreground text-xs mt-2 block">
              /assets/gtreasury-logo-rgb-symbol-only.svg
            </code>
          </div>
        </div>
        
        <div className="space-y-3">
          <LogoMark />
          <div>
            <div className="font-medium text-sm">Logo Mark</div>
            <div className="text-muted-foreground text-xs mt-1">
              Simplified logo mark for icons and favicons
            </div>
            <code className="font-mono text-muted-foreground text-xs mt-2 block">
              /assets/gtreasury-logo-mark.svg
            </code>
          </div>
        </div>
      </div>
    </section>
  );
} 