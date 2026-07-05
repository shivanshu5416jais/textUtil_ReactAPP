import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Stats from "./Stats";

export default function About() {
  return (
    <section
      id="about"
      className="
    py-32
    px-6
    bg-slate-950
    text-white
    scroll-mt-28
  "
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-cyan-400 uppercase tracking-[5px]">About Me</p>

          <h2
            className="
                        text-5xl
                        font-bold
                        mt-3
                        "
          >
            Who I Am
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
          <AboutImage />

          <AboutContent />
        </div>

        <Stats />
      </div>
    </section>
  );
}
