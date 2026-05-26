export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm flex flex-col">
        <h1 className="text-6xl font-bold text-center mb-4 font-space tracking-tight">
          Stackly
        </h1>
        <p className="text-center text-xl text-gray-400 font-mono">
          A infraestrutura inteligente do mercado SaaS
        </p>
        <div className="flex justify-center mt-12">
          <button className="bg-neon text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform font-space shadow-[0_0_20px_rgba(200,255,62,0.3)]">
            Explorar Ecossistema
          </button>
        </div>
      </div>
    </main>
  );
}
