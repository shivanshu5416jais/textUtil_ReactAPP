export default function ArchitectureDiagram() {
  return (
    <div
      className="
rounded-3xl
bg-slate-900
border
border-slate-800
p-10
"
    >
      <div className="space-y-6">
        <div
          className="
rounded-xl
bg-cyan-500
p-4
text-center
font-bold
"
        >
          React UI
        </div>
        ↓
        <div
          className="
rounded-xl
bg-blue-500
p-4
text-center
font-bold
"
        >
          Node.js API
        </div>
        ↓
        <div
          className="
rounded-xl
bg-purple-500
p-4
text-center
font-bold
"
        >
          MCP Server
        </div>
        ↓
        <div
          className="
rounded-xl
bg-orange-500
p-4
text-center
font-bold
"
        >
          OpenAI
        </div>
        ↓
        <div
          className="
rounded-xl
bg-green-500
p-4
text-center
font-bold
"
        >
          Compliance Report
        </div>
      </div>
    </div>
  );
}
