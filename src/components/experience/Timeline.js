import experience from "../../data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="relative">
      <div
        className="
          absolute
          left-5
          top-0
          bottom-0
          w-[2px]
          bg-slate-700
        "
      />

      <div className="space-y-16">
        {experience.map((item) => (
          <TimelineItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
