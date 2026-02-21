import type { TimelineEvent } from "../types";

interface EventCardProps {
  event: TimelineEvent;
  index: number;
  side: "left" | "right";
}

/** Icons for each age milestone */
const ageIcons: Record<number, string> = {
  18: "🔭",
  22: "🎓",
  25: "🚀",
  30: "🌍",
  40: "✨",
};

export default function EventCard({ event, index, side }: EventCardProps) {
  const isLeft = side === "left";

  const accentGradient = isLeft
    ? "from-cyan-500 to-blue-600"
    : "from-amber-500 to-orange-600";
  const borderColor = isLeft
    ? "border-cyan-500/20 hover:border-cyan-400/40"
    : "border-amber-500/20 hover:border-amber-400/40";
  const dotColor = isLeft ? "bg-cyan-400" : "bg-amber-400";
  const dotGlow = isLeft ? "shadow-cyan-400/50" : "shadow-amber-400/50";
  const pingColor = isLeft ? "bg-cyan-400/40" : "bg-amber-400/40";
  const lineColor = isLeft
    ? "from-cyan-500/40 via-cyan-500/10 to-transparent"
    : "from-amber-500/40 via-amber-500/10 to-transparent";
  const animClass = isLeft ? "animate-slide-in-left" : "animate-slide-in-right";
  const hoverGlow = isLeft
    ? "hover:shadow-cyan-500/8"
    : "hover:shadow-amber-500/8";

  const icon = ageIcons[event.age] ?? "✦";

  return (
    <div
      className={`${animClass} relative pl-10 pb-10 last:pb-0`}
      style={{ animationDelay: `${index * 0.14}s` }}
    >
      {/* Timeline line */}
      <div
        className={`animate-line-grow absolute left-[13px] top-4 bottom-0 w-px bg-gradient-to-b ${lineColor}`}
        style={{ animationDelay: `${index * 0.14}s` }}
      />

      {/* Dot with ping */}
      <div className="absolute left-0 top-3 flex items-center justify-center">
        <span
          className={`absolute w-[28px] h-[28px] rounded-full ${pingColor} animate-dot-ping`}
          style={{ animationDelay: `${index * 0.3}s` }}
        />
        <span
          className={`relative w-[14px] h-[14px] rounded-full ${dotColor} shadow-lg ${dotGlow} ring-[3px] ring-surface`}
        />
      </div>

      {/* Card */}
      <div
        className={`glass rounded-2xl border ${borderColor} ${hoverGlow} p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group`}
      >
        {/* Top row: age badge + icon */}
        <div className="flex items-center gap-2.5 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${accentGradient} shadow-md`}
          >
            <span className="text-sm leading-none">{icon}</span>
            Around {event.age}
          </span>
        </div>

        <h3 className="text-[17px] font-semibold text-white mb-1 group-hover:text-white/90 transition-colors">
          {event.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed">
          {event.description}
        </p>
      </div>
    </div>
  );
}
