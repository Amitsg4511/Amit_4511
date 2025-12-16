import { useAnimations, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useEffect } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

function Experience() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={true} enablePan={false} rotateSpeed={0.5} />
      <Suspense fallback={null}>
        <primitive object={model.scene} />
        {/* <Environment preset="sunset" background /> */}
      </Suspense>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
      </EffectComposer>
    </>
  );
}
useGLTF.preload("/models/draco/need_some_space-v1.glb");
export default Experience;
