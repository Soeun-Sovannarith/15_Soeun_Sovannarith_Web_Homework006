"use client";
export default function ProductHomepageCardComponent() {
  return (
    <div className="group relative w-full max-w-md h-[700px] bg-gradient-to-br from-pink-50 to-white rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden border border-pink-100 shadow-[0_20px_50px_rgba(236,72,153,0.05)] transition-all duration-500 hover:shadow-[0_40px_80px_rgba(236,72,153,0.1)] hover:-translate-y-2">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-pink-200/30 rounded-full blur-3xl group-hover:bg-pink-300/40 transition-colors duration-700" />
      <div className="relative z-10 flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-pink-500/10 text-pink-600 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full">
            Featured Technology
          </span>
          <Zap className="size-3 text-pink-500 fill-pink-500" />
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tight mt-2 italic">
          Macbook <span className="text-pink-500">Pro M5</span>
        </h2>
        <p className="text-slate-400 text-sm font-medium">
          The future of workflow starts here.
        </p>
      </div>
      <div className="relative z-10 flex items-center justify-center py-4 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3">
        <Image
          src={""}
          alt="Macbook Pro M5"
          className="w-full h-auto drop-shadow-[0_35px_35px_rgba(236,72,153,0.3)]"
          priority
        />
      </div>
      <div className="relative z-10 w-full flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">
            Starting at
          </span>
          <span className="text-2xl font-black text-slate-800">$1,999</span>
        </div>

        <Link>
          <Button className="group/btn bg-pink-400 hover:bg-pink-600 text-white h-14 px-8 rounded-2xl font-bold shadow-lg shadow-pink-200 transition-all active:scale-95 flex gap-2">
            View Details
            <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
