export default function TimelineItem({ item }) {
  return (
    <div className="relative flex gap-8">
      {/* Timeline Dot */}
      <div
        className="
          relative
          z-10
          w-10
          h-10
          rounded-full
          bg-cyan-500
          flex
          items-center
          justify-center
          shadow-lg
          shadow-cyan-500/40
        "
      >
        <div className="w-4 h-4 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div
        className="
          flex-1
          rounded-3xl
          bg-slate-900
          border
          border-slate-800
          p-8
          hover:border-cyan-400
          transition-all
          duration-300
        "
      >
        <h3 className="text-3xl font-bold">{item.company}</h3>

        <p className="mt-2 text-cyan-400">{item.role}</p>

        <p className="text-slate-400 mt-1">{item.duration}</p>

        <div className="flex flex-wrap gap-3 mt-6">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-slate-800
                border
                border-slate-700
                text-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="mt-6 space-y-2">
          {item.achievements.map((achievement) => (
            <li key={achievement} className="text-slate-300 flex gap-3">
              <span className="text-cyan-400">✓</span>
              {achievement}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
