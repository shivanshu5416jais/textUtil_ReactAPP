const filters = ["All", "AI", "React", "Node", "Full Stack"];

export default function FilterBar() {
  return (
    <div
      className="
flex
justify-center
gap-4
flex-wrap
mb-16
"
    >
      {filters.map((filter) => (
        <button
          key={filter}
          className="
px-6
py-3

rounded-full

border

border-slate-700

hover:border-cyan-400

hover:text-cyan-400

transition
"
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
