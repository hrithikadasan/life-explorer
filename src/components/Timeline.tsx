import type { TimelineEvent } from "../types";
import EventCard from "./EventCard";

interface TimelineProps {
  events: TimelineEvent[];
  side: "left" | "right";
}

export default function Timeline({ events, side }: TimelineProps) {
  return (
    <div className="flex flex-col">
      {events.map((event, i) => (
        <EventCard key={event.age} event={event} index={i} side={side} />
      ))}
    </div>
  );
}
