"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, Calendar, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getCustomers } from "@/app/Service/apiService";

export default function CustomerListPage() {
  const [customers, setCustomers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCustomers();
        setCustomers(data);
      } catch (error) {
        console.error("Failed to fetch customers", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredCustomers = customers.filter(c => 
    `${c.firstName} ${c.lastName}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">
          List of All Customer
        </h1>
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Search customers..."
            className="pl-10 h-10 bg-slate-50 border-slate-200 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-sm text-left">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="px-6 py-4 rounded-tl-2xl">Customer Name</th>
              <th className="px-6 py-4">Birthdate</th>
              <th className="px-6 py-4 text-center">Amount Spent</th>
              <th className="px-6 py-4 text-center rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {loading ? (
              <tr>
                <td colSpan={4} className="px-6 py-10 text-center text-slate-500">
                  Loading...
                </td>
              </tr>
            ) : filteredCustomers.map((c) => (
              <tr key={c.customerId} className="hover:bg-slate-50/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-bold text-slate-800 text-sm">
                      {c.firstName} {c.lastName}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide">
                      ID: {c.customerId.slice(0, 8).toUpperCase()}...
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 text-slate-500 font-medium text-xs">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    {c.birthDate}
                  </div>
                </td>
                <td className="px-6 py-4 text-center">
                  <span className="inline-flex items-center justify-center px-3 py-1 bg-green-100 text-green-700 font-black text-sm rounded-lg tracking-tight">
                    ${c.moneySpent}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <Link href={`/customers/${c.customerId}`}>
                      <Button variant="outline" className="h-9 px-4 gap-2 rounded-xl text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900 font-medium transition-colors">
                        <Eye className="h-4 w-4" />
                        View Profile
                      </Button>
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
