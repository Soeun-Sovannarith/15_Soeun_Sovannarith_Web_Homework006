"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowUpRight, Star, PackageSearch } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/app/Service/apiService";

export default function ProductListPage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-black text-slate-800 tracking-tight">
          List of All Product
        </h1>
        <div className="relative w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input 
            placeholder="Search products..."
            className="pl-10 h-10 bg-slate-50 border-slate-200 rounded-xl"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {loading ? (
          <div className="col-span-full py-20 text-center text-slate-500 font-medium animate-pulse">
            Loading products...
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-32 text-center animate-in fade-in duration-500">
            <PackageSearch className="h-12 w-12 text-slate-300 mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-bold text-slate-800 mb-2">No products found</h3>
            <p className="text-sm font-medium text-slate-400 mb-6">
              We couldn't find any products matching '{search}'
            </p>
            <button
              onClick={() => setSearch("")}
              className="text-sm font-medium text-blue-500 hover:text-blue-600 underline underline-offset-4"
            >
              Clear search
            </button>
          </div>
        ) : (
          filteredProducts.map((p) => {
            
            const imageSrc = p.imageUrl || "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=2788&auto=format&fit=crop";

            return (
              <div key={p.productId} className="flex flex-col bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                {}
                <div className="relative h-64 bg-[#1a202c] overflow-hidden flex items-center justify-center p-6">
                  {}
                  <div className="absolute flex flex-col gap-2 top-4 left-4 z-10">
                    <span className="bg-slate-900/50 backdrop-blur-md text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full w-max">
                      New
                    </span>
                    <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-black px-2 py-1 rounded-full flex items-center gap-1 w-max">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      4.9
                    </span>
                  </div>
                  
                  <img
                    src={imageSrc}
                    alt={p.name}
                    className="w-full h-full object-contain drop-shadow-2xl hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {}
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start gap-2">
                      <div className="flex flex-col gap-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">
                          Flagship Series
                        </span>
                        <h3 className="font-black text-slate-800 text-lg leading-tight line-clamp-1">
                          {p.name}
                        </h3>
                      </div>
                      <span className="font-black text-slate-900 text-lg">
                        ${p.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 font-medium line-clamp-3 leading-relaxed">
                      {p.description || "Engineered for excellence, this flagship device brings tomorrow's tech to your..."}
                    </p>
                  </div>

                  <div className="pt-6 mt-auto">
                    <Link href={`/products/${p.productId}`}>
                      <Button className="w-full h-12 rounded-xl bg-[#111827] hover:bg-[#1f2937] text-white font-bold gap-2 group transition-all">
                        View Product
                        <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
