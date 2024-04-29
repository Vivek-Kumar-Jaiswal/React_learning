import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white gap-3 shadow-2xl px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "black"}}>Black</button>
          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor("indigo")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "indigo"}}>Indigo</button>
          <button onClick={() => setColor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "orange"}}>Orange</button>
          <button onClick={() => setColor("slategray")} className="outline-none px-4 py-1 rounded-full text-white shadow-xl" style={{backgroundColor: "slategray"}}>Slate Grey</button>
        </div>
      </div>
    </>
  )
}

export default App
