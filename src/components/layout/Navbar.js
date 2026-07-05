import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className=" top-0 w-full z-50">
      <div
        className="
        
        mx-auto
        max-w-7xl
        mt-5
        rounded-full
        border
        border-white/10
        bg-slate-900/60
        backdrop-blur-xl
        px-8
        py-4
        flex
        items-center
        justify-between
        "
      >
        <h1 className="text-xl font-bold">Shivanshu</h1>

        <nav className="hidden md:flex gap-8">
          <a href="#about">About</a>

          <a href="#skills">Skills</a>

          <a href="#experience">Experience</a>

          <a href="#projects">Projects</a>

          <a href="#contact">Contact</a>
        </nav>

        <button
          className="
          rounded-full
          bg-cyan-500
          px-6
          py-3
          hover:scale-105
          transition
          "
        >
          Resume
        </button>

        <Menu className="md:hidden" />
      </div>
    </header>
  );
}
