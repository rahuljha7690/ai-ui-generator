import { useState } from "react";
import sampleSchema from "../src/components/data/sampleSchema";
import mockGenerator from "./utils/mockGenerator";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import PromptPanel from "./components/PromptPanel";
import PreviewPanel from "./components/PreviewPanel";
import Inspector from "./components/Inspector";
import { validateSchema } from "./utils/schemaValidator";

function App() {
  const [uiSchema, setUiSchema] = useState(sampleSchema);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async (prompt) => {
    setIsGenerating(true);
    setError("");

    try {
      const generatedSchema = mockGenerator(prompt);

      const validation = validateSchema(generatedSchema);

      if (!validation.valid) {
        setError(validation.error);
        return;
      }

      setUiSchema(generatedSchema);
    } catch (error) {
      console.error(error);
      setError("Something went wrong while generating the UI.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#070b14] text-white">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4">
          <div className="grid min-h-[calc(100vh-88px)] grid-cols-[340px_minmax(0,1fr)_280px] gap-4">
            <PromptPanel
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
            {error && (
              <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-400">
                {error}
              </div>
            )}
            <PreviewPanel schema={uiSchema} />

            <Inspector />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
