import type { ReactElement, ReactNode } from "react";

import { hero } from "@/app/(design)/blocks/[slug]/(demos)/hero";
import { login } from "@/app/(design)/blocks/[slug]/(demos)/login";
import { logos } from "@/app/(design)/blocks/[slug]/(demos)/logos";
import { productGrid } from "@/app/(design)/blocks/[slug]/(demos)/product-grid";

interface Block {
  name: string; // this must match the `registry.json` name
  components?: {
    [name: string]: ReactNode | ReactElement;
  };
}

export const demos: { [name: string]: Block } = {
  hero,
  login,
  logos,
  "product-grid": productGrid,
};
