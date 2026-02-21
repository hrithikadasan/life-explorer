import { useState, type FormEvent } from "react";

interface LandingProps {
  onSubmit: (input: string) => void;
  error: string | null;
}

export default function Landing({ onSubmit, error }: LandingProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <div className="noise relative flex flex-col items-center justify-center min-h-screen px-4 overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] animate-float" />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-amber-500/10 blur-[140px] animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-indigo-500/8 blur-[100px]" />

      {/* Subtitle badge */}
      <div
        className="animate-fade-in-up relative z-10 mb-6 px-5 py-1.5 rounded-full glass text-xs font-medium tracking-widest uppercase text-indigo-300"
        style={{ animationDelay: "0.05s" }}
      >
        ✦ Explore the possibilities ✦
      </div>

      {/* Hero */}
      <div className="animate-fade-in-up relative z-10 text-center mb-10">
        <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-violet-400 bg-clip-text text-transparent animate-gradient-x">
            Parallel Life
          </span>
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent animate-gradient-x" style={{ animationDelay: "3s" }}>
            Explorer
          </span>
        </h1>
        <p className="mt-5 text-base md:text-lg text-slate-400 max-w-lg mx-auto leading-relaxed">
          Enter two life paths below and discover how each choice could
          unfold into a completely different future.
        </p>
      </div>

      {/* Input card */}
      <form
        onSubmit={handleSubmit}
        className="animate-fade-in-up relative z-10 w-full max-w-xl"
        style={{ animationDelay: "0.25s" }}
      >
        <div className="glass rounded-2xl p-1.5 animate-pulse-glow">
          <div className="relative flex items-center">
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="e.g. Engineering vs Design"
              className="w-full px-6 py-4 rounded-xl bg-transparent text-white text-lg placeholder:text-slate-500 focus:outline-none transition-all"
            />
            <button
              type="submit"
              className="shrink-0 mr-1 px-7 py-3 rounded-xl bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-600 text-white font-bold hover:brightness-110 hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-indigo-500/25 cursor-pointer"
            >
              Discover →
            </button>
          </div>
        </div>

        {error && (
          <p className="mt-3 text-red-400 text-sm text-center animate-fade-in-up">
            ⚠ {error}
          </p>
        )}
      </form>

      {/* Example chips */}
      <div
        className="animate-fade-in-up relative z-10 flex flex-wrap justify-center gap-3 mt-10"
        style={{ animationDelay: "0.45s" }}
      >
        <span className="text-xs text-slate-600 self-center mr-1">
          Explore:
        </span>
        {[
          "Engineering vs Design",
          "Medicine vs Music",
          "Business vs Art",
          "Law vs Science",
        ].map((example, i) => (
          <button
            key={example}
            onClick={() => {
              setValue(example);
              onSubmit(example);
            }}
            className="group relative px-5 py-2 rounded-full text-sm font-medium glass text-slate-300 hover:text-white hover:border-indigo-400/40 transition-all duration-300 cursor-pointer overflow-hidden"
            style={{ animationDelay: `${0.5 + i * 0.08}s` }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-violet-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">{example}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
