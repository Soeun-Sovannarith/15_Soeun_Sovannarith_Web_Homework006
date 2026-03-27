import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
} from "@/components/ui/sidebar";
import SidebarNav from "@/app/Component/SidebarNav";

export function AppSidebar({ ...props }) {
  return (
    <Sidebar collapsible="icon" className="border-r bg-white" {...props}>
      <SidebarHeader className="p-6 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:pt-6">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="h-10 w-10 shrink-0 bg-cyan-100 rounded-xl flex items-center justify-center">
            <ShoppingCart className="h-5 w-5 text-cyan-500" />
          </div>
          <div className="group-data-[collapsible=icon]:hidden">
            <h1 className="text-xl font-black text-cyan-600 tracking-tight leading-none uppercase">
              HRD <span className="text-blue-600">SHOP</span>
            </h1>
            <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
              Admin V2.0
            </p>
          </div>
        </Link>
      </SidebarHeader>

      <SidebarContent className="px-4 py-2 mt-4 flex-1 group-data-[collapsible=icon]:px-2">
        <SidebarGroup className="p-0">
          <SidebarGroupLabel className="text-[10px] font-bold text-slate-400 mb-4 px-2 uppercase tracking-widest group-data-[collapsible=icon]:hidden">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarNav />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
