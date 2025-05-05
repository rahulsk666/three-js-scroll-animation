import { Canvas } from "@react-three/fiber";
import "./App.css";
import Experience from "./components/Experience";
import { Toaster } from "react-hot-toast"; // Import Toaster

function App() {
  return (
    <>
      <Canvas
        camera={{
          fov: 64,
          position: [2.3, 1.5, 2.3],
        }}
      >
        <Experience />
      </Canvas>
      <Toaster />
    </>
  );
}

export default App;
