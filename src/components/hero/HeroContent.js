import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div>
      <p
        className="
uppercase
tracking-[5px]
text-cyan-400
font-semibold
"
      >
        Software Engineer
      </p>

      <h1
        className="
mt-5
text-6xl
lg:text-8xl
font-black
leading-none
"
      >
        Hi, I'm
        <span
          className="
block
bg-gradient-to-r
from-cyan-400
to-purple-500
bg-clip-text
text-transparent
"
        >
          Shivanshu
        </span>
      </h1>

      <p
        className="
mt-8
text-slate-400
leading-8
max-w-xl
"
      >
        Building scalable web applications, AI powered developer tools,
        cloud-native solutions, and modern user experiences.
      </p>

      <HeroButtons />
    </div>
  );
}
