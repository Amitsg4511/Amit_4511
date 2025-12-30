import { Environment } from "@react-three/drei";

function Light({ isDay }) {
  return (
    <>
      {isDay ? (
        <>
          {/* <ambientLight intensity={0.5} color="#e6e1d6" /> */}
          <directionalLight
            intensity={1}
            position={[-3, 5, 3]}
            color="#fff1cc"
          />
          <Environment
            environmentIntensity={1}
            preset="forest"
            environmentRotation={[0, 0, 1]}
          />
        </>
      ) : (
        <>
          <directionalLight
            color="#9AE2ED"
            intensity={1}
            position={[-1, 1, 1]}
          />
          <ambientLight color="#A5E3E8" intensity={0.5} />
        </>
      )}
    </>
  );
}

export default Light;
