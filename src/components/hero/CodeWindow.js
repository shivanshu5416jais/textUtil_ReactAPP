export default function CodeWindow() {
  return (
    <div
      className="
      
rounded-3xl
overflow-hidden

border

border-white/10

shadow-2xl
"
    >
      <div
        className="
bg-slate-800

px-5

py-4

flex

gap-3
"
      >
        <div className="w-3 h-3 rounded-full bg-red-500" />

        <div className="w-3 h-3 rounded-full bg-yellow-500" />

        <div className="w-3 h-3 rounded-full bg-green-500" />
      </div>

      <pre
        className="
bg-slate-900

text-green-400

p-8

text-sm

leading-8

overflow-auto
"
      >
        {`const developer = {

name:"Shivanshu",

role:"Software Engineer",

frontend:[
"React",
"Angular",
"Tailwind"
],

backend:[
"Node",
"Express"
],

cloud:[
"AWS",
"Docker"
],

ai:[
"MCP",
"OpenAI"
]

};`}
      </pre>
    </div>
  );
}
