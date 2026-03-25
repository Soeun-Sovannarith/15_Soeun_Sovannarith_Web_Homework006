export default function BlankLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-50 relative overflow-hidden">
      <main className="flex-1 flex flex-col items-center justify-center relative w-full h-full p-4">
        {children}
      </main>
    </div>
  );
}
