import Link from "next/link";
import { Home, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlankLayout from "./(blank)/layout";

export default function NotFound() {
  return (
    <BlankLayout>
      <div className="relative flex flex-col items-center justify-center w-full max-w-2xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
        
        {}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[80%] text-[20rem] font-black text-slate-100/60 -z-10 select-none tracking-tighter">
          404
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight relative z-10">
            Oops! Page not found.
          </h1>
          <p className="text-slate-500 font-medium leading-relaxed max-w-lg mx-auto relative z-10">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Don't worry, our products are still here!
          </p>
        </div>

        <div className="flex items-center justify-center gap-4 relative z-10 pt-4">
          <Link href="/">
            <Button className="h-12 px-6 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold gap-2 shadow-lg shadow-blue-600/20 transition-all hover:-translate-y-0.5">
              <Home className="h-4 w-4" />
              Back to Homepage
            </Button>
          </Link>
          
          <Link href="/products">
            <Button variant="outline" className="h-12 px-6 rounded-xl bg-white border-slate-200 text-slate-700 hover:bg-slate-50 font-bold gap-2 shadow-sm transition-all hover:-translate-y-0.5">
              <Search className="h-4 w-4 text-slate-400" />
              Browse Products
            </Button>
          </Link>
        </div>

        <p className="text-sm font-medium text-slate-400 relative z-10 pt-8">
          Need help? <Link href="#" className="font-bold text-blue-600 hover:text-blue-700 transition-colors">Contact Support</Link>
        </p>
      </div>
    </BlankLayout>
  );
}
