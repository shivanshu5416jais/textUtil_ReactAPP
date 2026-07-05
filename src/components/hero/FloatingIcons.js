import { FaReact, FaNodeJs, FaDocker, FaAws } from "react-icons/fa";

import { SiAngular, SiMongodb } from "react-icons/si";

export default function FloatingIcons() {
  return (
    <>
      <FaReact
        className="
absolute

top-32

left-20

text-cyan-400

text-5xl

opacity-20
"
      />

      <SiAngular
        className="
absolute

bottom-40

left-32

text-red-500

text-5xl

opacity-20
"
      />

      <FaNodeJs
        className="
absolute

top-52

right-32

text-green-500

text-5xl

opacity-20
"
      />

      <FaAws
        className="
absolute

bottom-24

right-24

text-orange-400

text-5xl

opacity-20
"
      />

      <FaDocker
        className="
absolute

top-20

right-96

text-blue-500

text-5xl

opacity-20
"
      />

      <SiMongodb
        className="
absolute

bottom-56

left-96

text-green-400

text-5xl

opacity-20
"
      />
    </>
  );
}
