// GTreasury Logo Components
export function LogoFull() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gtreasury/gtreasury-logo-rgb.svg"
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
        src="/assets/gtreasury/GTreasury-Logo-Single-Color-White-RGB.svg"
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
        src="/assets/gtreasury/gtreasury-logo-rgb-symbol-only.svg"
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
        src="/assets/gtreasury/gtreasury-logo-mark.svg"
        alt="GTreasury Logo Mark"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

// GSmart Logo Components
export function GSmartConnectivity() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Connectivity (White Transparent).svg"
        alt="GSmart Connectivity Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartConnectivityGradient() {
  return (
    <div className="flex items-center justify-center p-6 bg-slate-800 rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Connectivity (White on Gradient).svg"
        alt="GSmart Connectivity Logo on Gradient"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartForecast() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Forecast (White Transparent).svg"
        alt="GSmart Forecast Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartLedger() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Ledger (White Transparent).svg"
        alt="GSmart Ledger Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartLiquidity() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Liquidity (White Transparent).svg"
        alt="GSmart Liquidity Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartRisk() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart logo - Risk (White Transparent).svg"
        alt="GSmart Risk Logo"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function GSmartSymbol() {
  return (
    <div className="flex items-center justify-center p-6 bg-background rounded-lg border">
      <img
        src="/assets/gsmart/GSmart Symbol Hot Pink.svg"
        alt="GSmart Symbol"
        className="max-h-16 w-auto object-contain"
      />
    </div>
  );
}

export function LogosGrid() {
  return (
    <section className="w-full space-y-12">
      {/* GTreasury Logos Section */}
      <div>
        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">GTreasury Brand Logos</h2>
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
                /assets/gtreasury/gtreasury-logo-rgb.svg
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
                /assets/gtreasury/GTreasury-Logo-Single-Color-White-RGB.svg
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
                /assets/gtreasury/gtreasury-logo-rgb-symbol-only.svg
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
                /assets/gtreasury/gtreasury-logo-mark.svg
              </code>
            </div>
          </div>
        </div>
      </div>

      {/* GSmart Logos Section */}
      <div>
        <div className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">GSmart Product Logos</h2>
          <p className="text-muted-foreground">
            GSmart product suite logos for different modules and use cases.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <GSmartConnectivity />
            <div>
              <div className="font-medium text-sm">GSmart Connectivity</div>
              <div className="text-muted-foreground text-xs mt-1">
                Connectivity module logo for transparent backgrounds
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Connectivity (White Transparent).svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartForecast />
            <div>
              <div className="font-medium text-sm">GSmart Forecast</div>
              <div className="text-muted-foreground text-xs mt-1">
                Forecast module logo for predictive analytics
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Forecast (White Transparent).svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartLedger />
            <div>
              <div className="font-medium text-sm">GSmart Ledger</div>
              <div className="text-muted-foreground text-xs mt-1">
                Ledger module logo for transaction management
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Ledger (White Transparent).svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartLiquidity />
            <div>
              <div className="font-medium text-sm">GSmart Liquidity</div>
              <div className="text-muted-foreground text-xs mt-1">
                Liquidity module logo for cash flow management
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Liquidity (White Transparent).svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartRisk />
            <div>
              <div className="font-medium text-sm">GSmart Risk</div>
              <div className="text-muted-foreground text-xs mt-1">
                Risk module logo for risk assessment and management
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Risk (White Transparent).svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartSymbol />
            <div>
              <div className="font-medium text-sm">GSmart Symbol</div>
              <div className="text-muted-foreground text-xs mt-1">
                Standalone GSmart symbol in brand hot pink
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart Symbol Hot Pink.svg
              </code>
            </div>
          </div>
          
          <div className="space-y-3">
            <GSmartConnectivityGradient />
            <div>
              <div className="font-medium text-sm">GSmart Gradient</div>
              <div className="text-muted-foreground text-xs mt-1">
                Connectivity logo with gradient background
              </div>
              <code className="font-mono text-muted-foreground text-xs mt-2 block">
                /assets/gsmart/GSmart logo - Connectivity (White on Gradient).svg
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 