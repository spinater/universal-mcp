"use client";
import { useState } from "react";

const initial = [
  { name: "filesystem", status: "online" },
  { name: "github", status: "online" },
  { name: "postgres", status: "offline" },
];

export default function Home() {
  const [servers, setServers] = useState(initial);
  const [name, setName] = useState("");

  const add = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    setServers([...servers, { name: name.trim(), status: "online" }]);
    setName("");
  };
  const toggle = (i) =>
    setServers(servers.map((s, j) => j === i ? { ...s, status: s.status === "online" ? "offline" : "online" } : s));

  return (
    <main className="wrap">
      <header>
        <h1>🔌 Universal MCP</h1>
        <p>แอปโง่ๆ สำหรับดู MCP server ({servers.filter(s => s.status === "online").length}/{servers.length} online)</p>
      </header>
      <form onSubmit={add} className="form">
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="ชื่อ server ใหม่..." />
        <button>เพิ่ม</button>
      </form>
      <section className="grid">
        {servers.map((s, i) => (
          <div className="card" key={i}>
            <span className={`dot ${s.status}`} />
            <h2>{s.name}</h2>
            <small>{s.status}</small>
            <button onClick={() => toggle(i)}>สลับสถานะ</button>
          </div>
        ))}
      </section>
    </main>
  );
}
