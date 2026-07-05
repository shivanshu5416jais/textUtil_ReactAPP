export default function StatCard({ stat }) {
  return (
    <div
      className="
            rounded-3xl

            bg-slate-900

            border

            border-slate-800

            p-8

            text-center

            hover:border-cyan-400

            hover:-translate-y-2

            transition-all
            "
    >
      <h2
        className="
                text-5xl
                font-black
                text-cyan-400
                "
      >
        {stat.number}
      </h2>

      <p
        className="
                mt-4
                text-slate-400
                "
      >
        {stat.title}
      </p>
    </div>
  );
}
