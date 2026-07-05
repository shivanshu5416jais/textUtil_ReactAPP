import stats from "../../data/about";
import StatCard from "./StatCard";

export default function Stats() {
  return (
    <div
      className="
            grid
            md:grid-cols-4
            gap-6
            mt-24
            "
    >
      {stats.map((stat) => (
        <StatCard key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
