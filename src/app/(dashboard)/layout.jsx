import Link from "next/link";
import { Bell, ShoppingCart, Package, Users, Layers, SettingsIcon, UserIcon, CreditCardIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex-1 flex flex-col min-w-0 bg-[#fafafa]">
        <header className="h-[72px] bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-slate-400">
            <SidebarTrigger className="-ml-1 text-slate-500 hover:text-slate-800" />
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            <button className="relative text-slate-400 hover:text-slate-600 transition-colors">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center border-2 border-white box-content">
                3
              </span>
            </button>
            <div className="h-8 w-px bg-slate-200 mx-2" />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3 hover:bg-slate-50 p-1.5 pl-1.5 pr-4 rounded-full transition-colors focus-visible:outline-none focus:ring-2 focus:ring-slate-200 cursor-pointer border-none bg-transparent">
                <img
                  src="https://static.wikia.nocookie.net/herofanon/images/c/ce/Chill_Guy.jpg"
                  alt="Admin User"
                  className="h-9 w-9 shrink-0 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="hidden sm:flex flex-col items-start">
                  <span className="text-sm font-bold text-slate-800 leading-none">
                    Admin User
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase">
                    KSHRD
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 rounded-2xl p-2 shadow-xl border-slate-100" align="end" alignOffset={0}>
                <DropdownMenuGroup>
                  <DropdownMenuLabel className="font-normal flex flex-col gap-1 p-2 pb-3">
                    <span className="text-[15px] font-bold text-slate-800 leading-none">Admin User</span>
                    <span className="text-[13px] font-medium text-slate-400">admin@hrdshop.com</span>
                  </DropdownMenuLabel>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-slate-100 mx-1 mb-2" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="py-2.5 px-2 rounded-xl cursor-pointer">
                    <UserIcon className="size-4" />
                    My Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2.5 px-2 rounded-xl cursor-pointer">
                    <CreditCardIcon className="size-4" />
                    Billing
                  </DropdownMenuItem>
                  <DropdownMenuItem className="py-2.5 px-2 rounded-xl cursor-pointer">
                    <SettingsIcon className="size-4" />
                    Settings
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}
