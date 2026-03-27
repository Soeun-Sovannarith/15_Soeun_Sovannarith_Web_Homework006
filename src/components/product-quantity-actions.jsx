"use client";

import { useState } from "react";
import { Minus, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProductQuantityActions() {
  const [quantity, setQuantity] = useState(1);

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="space-y-3 pt-4">
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
          Select Quantity
        </span>
        <div className="flex items-center gap-4 bg-slate-50 w-max rounded-xl p-1 border border-slate-100">
          <button 
            onClick={handleMinus}
            className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center font-black text-slate-900">{quantity}</span>
          <button 
            onClick={handlePlus}
            className="h-10 w-10 flex items-center justify-center text-slate-400 hover:text-slate-900 hover:bg-white rounded-lg transition-all"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="pt-8 flex items-center gap-4 border-t border-slate-100 mt-8">
        <Button className="flex-1 h-14 bg-[#111827] hover:bg-cyan-500 hover:text-slate-900 text-white rounded-2xl font-bold shadow-xl shadow-slate-900/20 transition-transform hover:-translate-y-0.5 gap-3">
          <ShoppingCart className="h-5 w-5" />
          Add to Cart
        </Button>
        <Button variant="outline" className="flex-1 h-14 rounded-2xl font-bold border-slate-200 bg-white text-slate-800 hover:bg-slate-50 transition-transform hover:-translate-y-0.5">
          Buy Now
        </Button>
      </div>
    </>
  );
}
