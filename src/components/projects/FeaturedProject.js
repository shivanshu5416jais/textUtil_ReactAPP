import project from "../../data/projects";

export default function FeaturedProject() {
  return (
    <section
      id="featured-project"
      className="
py-32
px-6
bg-slate-950
text-white
"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p
            className="
uppercase
tracking-[5px]
text-cyan-400
"
          >
            Featured Project
          </p>

          <h2
            className="
text-5xl
font-bold
mt-3
"
          >
            Built For Enterprise Scale
          </h2>
        </div>

        <div
          className="
grid
lg:grid-cols-2
gap-20
items-center
"
        >
          <div>
            <h2
              className="
text-5xl
font-black
"
            >
              {project.title}
            </h2>

            <p
              className="
mt-3
text-cyan-400
"
            >
              {project.subtitle}
            </p>

            <p
              className="
mt-8
leading-8
text-slate-400
"
            >
              {project.description}
            </p>

            <div
              className="
flex
flex-wrap
gap-3
mt-10
"
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="
px-4
py-2
rounded-full
bg-slate-800
border
border-slate-700
"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div
              className="
mt-10
space-y-4
"
            >
              {project.highlights.map((item) => (
                <div
                  key={item}
                  className="
flex
gap-3
"
                >
                  <span className="text-cyan-400">✓</span>

                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div
              className="
mt-12
flex
gap-5
"
            >
              <button
                className="
px-7
py-4
rounded-xl
bg-cyan-500
"
              >
                Live Demo
              </button>

              <button
                className="
px-7
py-4
rounded-xl
border
border-cyan-500
"
              >
                Github
              </button>
            </div>
          </div>

          <ArchitectureDiagram />
        </div>
      </div>
    </section>
  );
}
