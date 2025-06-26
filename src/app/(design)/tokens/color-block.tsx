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

interface GTColorBlockProps {
  name: string;
  token: string;
  hex: string;
  description?: string;
  usage?: string;
  style?: React.CSSProperties;
}

export function GTColorBlock({ name, token, hex, description, usage, style }: GTColorBlockProps) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="flex items-center gap-4 mb-3">
        <div 
          className="size-16 rounded-lg border shadow-sm"
          style={{ backgroundColor: hex, ...style }}
        />
        <div className="flex-1">
          <div className="font-semibold text-lg">{name}</div>
          <code className="font-mono text-muted-foreground text-sm block mt-1">
            {token}
          </code>
          <code className="font-mono text-muted-foreground text-xs block mt-1">
            {hex}
          </code>
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
