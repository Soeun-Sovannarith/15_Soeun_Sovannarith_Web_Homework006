"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Package, Users, Layers, Settings } from "lucide-react";
import clsx from "clsx";

export default function SidebarNav() {
  const pathname = usePathname();

  const navItems = [
    { name: "Products", href: "/products", icon: Package },
    { name: "Customer", href: "/customers", icon: Users },
    { name: "Categories", href: "/categories", icon: Layers },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <nav className="flex flex-col gap-1">
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (pathname.startsWith(item.href) && item.href !== "/");

        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={clsx(
              "px-4 py-3 flex items-center gap-3 font-medium rounded-xl transition-colors min-h-11",
              "group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:justify-center",
              isActive
                ? "bg-cyan-100/50 text-cyan-700 border border-cyan-200 group-data-[collapsible=icon]:border-transparent group-data-[collapsible=icon]:bg-cyan-100"
                : "text-slate-500 hover:bg-slate-50"
            )}
            title={item.name} 
          >
            <div className="flex items-center justify-center shrink-0">
              <Icon className={clsx("h-5 w-5", isActive ? "text-cyan-700" : "text-cyan-500")} />
            </div>
            <span className="group-data-[collapsible=icon]:hidden">{item.name}</span>
            {isActive && (
              <div className="ml-auto group-data-[collapsible=icon]:hidden">
                <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
              </div>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
