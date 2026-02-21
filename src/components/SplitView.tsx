import type { TimelineEvent, Variant } from "../types";
import Timeline from "./Timeline";

interface SplitViewProps {
  options: [string, string];
  timelines: {
    left: TimelineEvent[];
    right: TimelineEvent[];
  };
  variant: Variant;
  onVariantChange: (v: Variant) => void;
  onBack: () => void;
}

export default function SplitView({
  options,
  timelines,
  variant,
  onVariantChange,
  onBack,
}: SplitViewProps) {
  return (
    <div className="noise min-h-screen flex flex-col relative overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none fixed -top-48 -left-48 w-[500px] h-[500px] rounded-full bg-cyan-600/8 blur-[140px]" />
      <div className="pointer-events-none fixed -bottom-48 -right-48 w-[500px] h-[500px] rounded-full bg-amber-600/8 blur-[140px]" />

      {/* Header */}
      <header className="animate-fade-in-up sticky top-0 z-20 glass border-b border-white/5 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-all duration-300 cursor-pointer"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
              <svg
                className="w-4 h-4 transition-transform group-hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </span>
            <span className="text-sm font-medium">Back</span>
          </button>

          {/* Center: title + variant toggle */}
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-lg font-bold tracking-tight">
              <span className="text-cyan-400 drop-shadow-[0_0_12px_rgba(6,182,212,0.4)]">
                {options[0]}
              </span>
              <span className="inline-flex items-center justify-center mx-3 w-8 h-8 rounded-full bg-white/5 text-xs text-slate-500 font-normal">
                vs
              </span>
              <span className="text-amber-400 drop-shadow-[0_0_12px_rgba(245,158,11,0.4)]">
                {options[1]}
              </span>
            </h2>

            {/* Safe / Risky toggle */}
            <div className="flex items-center rounded-full bg-white/5 p-0.5 text-xs font-medium">
              <button
                onClick={() => onVariantChange("safe")}
                className={`px-4 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  variant === "safe"
                    ? "bg-emerald-500/20 text-emerald-400 shadow-sm shadow-emerald-500/20"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                🛡 Steady Path
              </button>
              <button
                onClick={() => onVariantChange("risky")}
                className={`px-4 py-1 rounded-full transition-all duration-300 cursor-pointer ${
                  variant === "risky"
                    ? "bg-rose-500/20 text-rose-400 shadow-sm shadow-rose-500/20"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                🔥 Bold Path
              </button>
            </div>
          </div>

          <div className="w-20" />
        </div>
      </header>

      {/* Split panels */}
      <div className="relative z-10 flex-1 grid grid-cols-1 md:grid-cols-2">
        {/* Vertical divider (desktop) */}
        <div className="hidden md:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-px z-10">
          <div className="h-full w-full bg-gradient-to-b from-transparent via-indigo-500/20 to-transparent" />
        </div>

        {/* Left panel */}
        <div className="relative p-6 md:p-10 lg:p-14">
          {/* Panel glow */}
          <div className="pointer-events-none absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-cyan-500/3 to-transparent" />

          <div className="animate-slide-in-left flex items-center gap-3 mb-10 justify-center">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/30" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
              {options[0]}
            </h3>
          </div>
          <Timeline events={timelines.left} side="left" />
        </div>

        {/* Horizontal divider (mobile) */}
        <div className="md:hidden mx-6 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />

        {/* Right panel */}
        <div className="relative p-6 md:p-10 lg:p-14">
          {/* Panel glow */}
          <div className="pointer-events-none absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-amber-500/3 to-transparent" />

          <div className="animate-slide-in-right flex items-center gap-3 mb-10 justify-center">
            <span className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30" />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
              {options[1]}
            </h3>
          </div>
          <Timeline events={timelines.right} side="right" />
        </div>
      </div>
    </div>
  );
}
