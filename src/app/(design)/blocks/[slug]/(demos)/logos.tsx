import { LogosGrid, LogoFull, LogoFullWhite, LogoSymbol, LogoMark } from "@/components/logos";

export const logos = {
  name: "logos",
  components: {
    "All Logos": <LogosGrid />,
    "Full Logo (Color)": <LogoFull />,
    "Full Logo (White)": <LogoFullWhite />,
    "Symbol Only": <LogoSymbol />,
    "Logo Mark": <LogoMark />,
  },
}; 