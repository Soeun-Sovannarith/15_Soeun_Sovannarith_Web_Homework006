import Link from "next/link";
import { ChevronLeft, Heart, Share2, ShoppingCart, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { notFound } from "next/navigation";
import { getProducts } from "@/app/Service/apiService";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const allProducts = await getProducts();
  const product = allProducts.find((p) => p.productId === id);

  if (!product) {
    notFound();
  }

  
  const imageSrc = product.imageUrl || "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=3200&auto=format&fit=crop";

  return (
    <div className="w-full max-w-5xl bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.06)] flex overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500 min-h-[600px]">
      
  
      <div className="w-1/2 relative bg-[#f8f9fa] flex items-center justify-center p-12">
        
        <div className="absolute top-8 left-8 flex flex-col gap-2">
          <span className="bg-[#111827] text-white text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-max">
            New Arrival
          </span>
          <span className="bg-cyan-100 text-cyan-800 text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full w-max">
            Free Shipping
          </span>
        </div>

        
        <div className="absolute top-8 right-8 flex flex-col gap-3">
          <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <Heart className="h-4 w-4 text-slate-400" />
          </button>
          <button className="h-10 w-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow">
            <Share2 className="h-4 w-4 text-slate-400" />
          </button>
        </div>

      
        <div className="relative w-full aspect-square flex items-center justify-center">
          <img
            src={imageSrc}
            alt={product.name}
            className="w-full h-full object-contain mix-blend-multiply drop-shadow-2xl hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

    
      <div className="w-1/2 p-12 flex flex-col justify-center">
        <Link href="/products" className="inline-flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest hover:text-blue-600 transition-colors mb-8 w-max">
          <ChevronLeft className="h-3 w-3" />
          Back to Product
        </Link>

        <div className="space-y-6">
          <div className="space-y-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-500">
              Premium Experience
            </span>
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.1]">
              {product.name}
            </h1>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-4xl font-black text-slate-900">
              ${product.price ? product.price.toLocaleString() : "0"}
            </span>
            <div className="flex flex-col mb-1">
              <span className="text-sm font-bold text-slate-400 line-through leading-none">
                ${product.price ? (product.price * 1.2).toLocaleString() : "0"}
              </span>
              <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest leading-none mt-1">
                Save 20% Today
              </span>
            </div>
          </div>

          <p className="text-sm font-medium text-slate-500 border-l-2 border-cyan-200 pl-4 py-1">
            {product.description || "string"}
          </p>

          <div className="space-y-3 pt-4">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
              Select Quantity
            </span>
            <div className="flex items-center gap-4 bg-slate-50 w-max rounded-xl p-1 border border-slate-100">
              <button className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all">
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-8 text-center font-black text-slate-900">1</span>
              <button className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all">
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="pt-8 flex items-center gap-4 border-t border-slate-100 mt-8">
            <Button className="flex-1 h-14 bg-[#111827] hover:bg-[#1f2937] text-white rounded-2xl font-bold shadow-xl shadow-slate-900/20 transition-transform hover:-translate-y-0.5 gap-3">
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </Button>
            <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-transform hover:-translate-y-0.5">
              Buy Now
            </Button>
          </div>
        </div>
      </div>

    </div>
  );
}
