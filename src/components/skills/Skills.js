import skillCategories from "../../data/skills";
import SkillCategory from "./SkillCategory";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
            py-32
            px-6
            scroll-mt-28
            "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">Tech Stack</p>

          <h2 className="text-5xl font-bold mt-3">Technologies I Work With</h2>
        </div>

        <div
          className="
                    grid
                    lg:grid-cols-2
                    gap-10
                    "
        >
          {skillCategories.map((category) => (
            <SkillCategory key={category.title} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
