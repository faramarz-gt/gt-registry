import { 
  LogosGrid, 
  LogoFull, 
  LogoFullWhite, 
  LogoSymbol, 
  LogoMark,
  GSmartConnectivity,
  GSmartConnectivityGradient,
  GSmartForecast,
  GSmartLedger,
  GSmartLiquidity,
  GSmartRisk,
  GSmartSymbol
} from "@/components/logos";

export const logos = {
  name: "logos",
  components: {
    "All Logos": <LogosGrid />,
    "GTreasury Full (Color)": <LogoFull />,
    "GTreasury Full (White)": <LogoFullWhite />,
    "GTreasury Symbol": <LogoSymbol />,
    "GTreasury Mark": <LogoMark />,
    "GSmart Connectivity": <GSmartConnectivity />,
    "GSmart Connectivity Gradient": <GSmartConnectivityGradient />,
    "GSmart Forecast": <GSmartForecast />,
    "GSmart Ledger": <GSmartLedger />,
    "GSmart Liquidity": <GSmartLiquidity />,
    "GSmart Risk": <GSmartRisk />,
    "GSmart Symbol": <GSmartSymbol />,
  },
}; 