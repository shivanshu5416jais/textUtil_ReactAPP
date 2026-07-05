import { Download } from "lucide-react";

export default function HeroButtons() {
  return (
    <div
      className="
mt-10
flex
flex-wrap
gap-5
"
    >
      <button
        className="
px-7
py-4
rounded-xl
bg-gradient-to-r
from-cyan-500
to-blue-600
hover:scale-105
transition-all
duration-300
shadow-lg
shadow-cyan-500/30
"
      >
        View Projects
      </button>

      <button
        className="
flex
items-center
gap-2

px-7
py-4

rounded-xl

border

border-cyan-500

hover:bg-cyan-500/10

transition
"
      >
        <Download size={18} />
        Resume
      </button>
    </div>
  );
}
