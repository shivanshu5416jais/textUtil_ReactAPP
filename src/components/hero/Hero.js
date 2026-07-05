import HeroContent from "./HeroContent";
import CodeWindow from "./CodeWindow";
import FloatingIcons from "./FloatingIcons";

export default function Hero() {
  return (
    <section
      className="
relative
min-h-screen
pt-32
pb-24
flex
items-center
"
    >
      <div
        className="
container
mx-auto
grid
lg:grid-cols-2
items-center
gap-20
"
      >
        <HeroContent />

        <CodeWindow />
      </div>
    </section>
  );
}
