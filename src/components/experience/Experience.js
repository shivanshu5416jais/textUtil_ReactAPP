import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 px-6 bg-slate-950 text-white scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="uppercase tracking-[5px] text-cyan-400">Experience</p>

          <h2 className="text-5xl font-bold mt-3">My Professional Journey</h2>
        </div>

        <Timeline />
      </div>
    </section>
  );
}
