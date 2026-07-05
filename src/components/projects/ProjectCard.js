export default function ProjectCard({ project }) {
  return (
    <div
      className="
group

rounded-3xl

overflow-hidden

bg-slate-900

border

border-slate-800

hover:border-cyan-400

transition-all

duration-500

hover:-translate-y-3
"
    >
      <img
        src={project.image}
        alt={project.title}
        className="
h-56

w-full

object-cover

group-hover:scale-110

transition-all

duration-700
"
      />

      <div className="p-8">
        <h2
          className="
text-2xl

font-bold
"
        >
          {project.title}
        </h2>

        <p
          className="
mt-4

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

mt-6
"
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="
px-3

py-2

rounded-full

bg-slate-800

text-sm
"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="
mt-8

flex

gap-4
"
        >
          <button
            className="
flex-1

py-3

rounded-xl

bg-cyan-500
"
          >
            Demo
          </button>

          <button
            className="
flex-1

py-3

rounded-xl

border

border-cyan-500
"
          >
            Github
          </button>
        </div>
      </div>
    </div>
  );
}
