import { projects } from "../../data/projects";

import FilterBar from "./FilterBar";

import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      id="projects"
      className="
py-32

bg-slate-950

text-white

px-6
"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p
            className="
uppercase

tracking-[5px]

text-cyan-400
"
          >
            Projects
          </p>

          <h2
            className="
text-5xl

font-bold

mt-4

mb-20
"
          >
            Things I've Built
          </h2>
        </div>

        <FilterBar />

        <div
          className="
grid

md:grid-cols-2

xl:grid-cols-3

gap-10
"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
