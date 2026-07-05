export default function SkillBadge({ skill }) {
  const Icon = skill.icon;

  return (
    <div
      className="
        flex
        items-center
        gap-3
        rounded-xl
        border
        border-slate-700
        bg-slate-800
        px-5
        py-3

        text-slate-200

        transition-all
        duration-300

        hover:border-cyan-400
        hover:text-cyan-400
        hover:-translate-y-1
        hover:shadow-lg
        hover:shadow-cyan-500/20
      "
    >
      {Icon && <Icon className="text-cyan-400 text-xl flex-shrink-0" />}

      <span>{skill.name}</span>
    </div>
  );
}
