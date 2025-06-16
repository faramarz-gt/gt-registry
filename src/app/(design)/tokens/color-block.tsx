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
