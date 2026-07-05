import profile from "../../data/profile";

export default function AboutContent() {
  return (
    <div>
      <h2
        className="
                text-4xl
                font-bold
                "
      >
        {profile.designation}
      </h2>

      <p
        className="
                mt-4
                text-cyan-400
                "
      >
        {profile.company}
      </p>

      <p
        className="
                mt-8
                leading-8
                text-slate-400
                "
      >
        {profile.intro}
      </p>

      <div
        className="
                mt-10
                flex
                flex-wrap
                gap-4
                "
      >
        {profile.highlights.map((skill) => (
          <span
            key={skill}
            className="
    px-5
    py-2
    rounded-full
    bg-slate-800
    border
    border-slate-700

    text-slate-200

    hover:border-cyan-400
    hover:text-cyan-400

    transition-all
    duration-300
  "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
