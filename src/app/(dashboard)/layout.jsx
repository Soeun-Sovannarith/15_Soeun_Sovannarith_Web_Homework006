import Link from "next/link";
import { Bell, ShoppingCart, LogOut, Package, Users, Layers, Settings } from "lucide-react";
import SidebarNav from "@/app/Component/SidebarNav";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen w-full bg-[#fafafa]">
    
      <aside className="w-[260px] flex flex-col border-r bg-white h-screen sticky top-0">
        <div className="p-6">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="h-10 w-10 bg-cyan-100 rounded-xl flex items-center justify-center">
              <ShoppingCart className="h-5 w-5 text-cyan-500" />
            </div>
            <div>
              <h1 className="text-xl font-black text-cyan-600 tracking-tight leading-none uppercase">
                HRD <span className="text-blue-600">SHOP</span>
              </h1>
              <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase tracking-wider">
                Admin V2.0
              </p>
            </div>
          </Link>
        </div>

        <div className="px-4 py-2 mt-4 flex-1">
          <p className="text-[10px] font-bold text-slate-400 mb-4 px-2 uppercase tracking-widest">
            Main Menu
          </p>
          <SidebarNav />
        </div>

        <div className="p-6">
          <button className="flex items-center gap-3 text-red-600 font-bold hover:opacity-80 transition-opacity">
            <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-red-600">
              <LogOut className="h-4 w-4" />
            </div>
            Sign Out
          </button>
        </div>
      </aside>

    
      <main className="flex-1 flex flex-col min-w-0">
    
        <header className="h-[72px] bg-white border-b flex items-center justify-between px-8 sticky top-0 z-10">
          <div className="flex items-center gap-4 text-slate-400">
          
            <Layers className="h-5 w-5 opacity-0" />
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
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=256&auto=format&fit=crop"
                alt="Admin User"
                className="h-9 w-9 rounded-full object-cover border-2 border-white shadow-sm"
              />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-800 leading-none">
                  Admin User
                </span>
                <span className="text-[10px] font-bold text-slate-400 mt-1 uppercase">
                  KSHRD
                </span>
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 flex-1">
          {children}
        </div>
      </main>
    </div>
  );
}
