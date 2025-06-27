import { SidebarProvider } from "@/components/ui/sidebar";
import type { ReactNode } from "react";

import { RegistrySidebar } from "@/components/design/registry-sidebar";
import { Toaster } from "@/components/ui/sonner";

export default function RegistryLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <SidebarProvider>
      <RegistrySidebar />
      <main className="flex w-full justify-center">{children}</main>
      <Toaster />
    </SidebarProvider>
  );
}
