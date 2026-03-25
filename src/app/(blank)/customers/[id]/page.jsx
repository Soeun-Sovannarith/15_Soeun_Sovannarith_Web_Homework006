import Link from "next/link";
import { User, Calendar, Wallet, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCustomerById } from "@/app/Service/apiService";
import { notFound } from "next/navigation";

export default async function CustomerProfilePage({ params }) {
  const { id } = await params;
  const customer = await getCustomerById(id);

  if (!customer) {
    notFound();
  }

  return (
    <div className="w-full max-w-3xl bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 flex overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
      
      {/* Left Column (Avatar/Name Profile) */}
      <div className="w-2/5 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 border-r border-slate-100">
        <div className="h-40 w-40 rounded-full bg-slate-200 border-4 border-white shadow-xl shadow-slate-200/50 flex items-center justify-center overflow-hidden mb-6">
          <User className="h-20 w-20 text-slate-400" />
        </div>
        <h2 className="text-2xl font-black text-slate-800 tracking-tight text-center">
          {customer.firstName} {customer.lastName}
        </h2>
      </div>

      {/* Right Column (Details) */}
      <div className="w-3/5 p-8 flex flex-col justify-between">
        
        <div className="space-y-8">
          <Link href="/customers" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors">
            <ChevronLeft className="h-3 w-3" />
            Back to Customer Table
          </Link>

          <div className="grid grid-cols-2 gap-y-8 gap-x-6">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Full Name
              </span>
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <User className="h-4 w-4 text-amber-500" />
                {customer.firstName} {customer.lastName}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Total Spent
              </span>
              <div className="flex items-center gap-2 font-black text-slate-900 text-xl">
                <div className="h-6 w-6 rounded bg-green-100 flex items-center justify-center text-green-600">
                  <Wallet className="h-3 w-3" />
                </div>
                ${customer.moneySpent}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Birthdate
              </span>
              <div className="flex items-center gap-2 font-bold text-slate-800 text-sm">
                <Calendar className="h-4 w-4 text-amber-500" />
                {customer.birthDate}
              </div>
            </div>

            <div className="flex flex-col gap-2 col-span-2">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
                Account ID
              </span>
              <div className="bg-slate-50 border border-slate-100 py-3 px-4 rounded-xl text-xs font-mono text-slate-500 overflow-hidden text-ellipsis whitespace-nowrap">
                {customer.customerId}
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 pt-8 border-t border-slate-100 mt-8">
          <Button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white rounded-xl h-12 font-bold shadow-lg shadow-slate-900/20 transition-all">
            Edit Profile
          </Button>
          <Button variant="outline" className="flex-1 border-red-100 bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 rounded-xl h-12 font-bold transition-all">
            Delete This User
          </Button>
        </div>

      </div>

    </div>
  );
}
