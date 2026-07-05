import SkillBadge from "./SkillBadge";

export default function SkillCategory({ category }) {
  return (
    <div
      className="
            rounded-3xl
            border
            border-slate-800
            bg-slate-900/60
            backdrop-blur-lg
            p-8
            "
    >
      <h3
        className="
                text-2xl
                font-bold
                mb-8
                "
      >
        {category.title}
      </h3>

      <div
        className="
                flex
                flex-wrap
                gap-4
                "
      >
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
}
