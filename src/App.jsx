import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PromptPanel from "./components/PromptPanel";
import PreviewPanel from "./components/PreviewPanel";
import Inspector from "./components/Inspector";

function App() {
  return (
    <div className="min-h-screen text-white bg-[#070b14]">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4">
          <div className="grid min-h-[calc(100vh-88px)] grid-cols-[340px_minmax(0,1fr)_280px] gap-4">
            <PromptPanel />
            <PreviewPanel />
            <Inspector />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;