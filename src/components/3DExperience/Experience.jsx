import { Canvas } from "@react-three/fiber";
import Model from "./Model";
import { Suspense } from "react";

export default function Experience() {
  return (
    <div className="safe-area w-full h-full">
      <Canvas camera={{ fov: 25 }}>
        <Suspense fallback={null}>
          <Model />
        </Suspense>
      </Canvas>
    </div>
  );
}
