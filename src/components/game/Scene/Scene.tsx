import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon"; // Import Physics
import { Environment } from "@react-three/drei";
import Fruit from "../Fruit/Fruit";
import banana from "../../../assets/banana.glb";
import apple from "../../../assets/apple.glb";
import pear from "../../../assets/pear.glb";
import strawberry from "../../../assets/strawberry.glb";

const fruits = [
  {
    fruit: banana,
    position: [0, 0, 0],
    scale: [100, 100, 100],
    rotation: [0, 10, 0],
    amplitude: 2,
    frequency: 3,
  },
  {
    fruit: apple, // GLTF path
    position: [2, 0, 0],
    scale: [100, 100, 100],
    rotation: [0, 10, 0],
    amplitude: 3,
    frequency: 2,
  },
  {
    fruit: strawberry, // GLTF path
    position: [-2, 0, -4],
    scale: [0.4, 0.4, 0.4],
    rotation: [0, 10, 0],
    amplitude: 3,
    frequency: 2,
  },
  {
    fruit: pear, // GLTF path
    position: [3, 0, -3],
    scale: [0.4, 0.4, 0.4],
    rotation: [0, 10, 0],
    amplitude: 4,
    frequency: 1,
  },
];

function Scene() {
  return (
    <div className="w-screen h-screen">
      <Canvas
        camera={{
          position: [0, 1, 7],
          fov: 75,
        }}
      >
        <ambientLight intensity={0.9} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        <Environment files={"/textures/envmap3.hdr"} background={true} />

        {fruits.map((fruit, index) => (
          <Fruit
            key={index}
            fruit={fruit.fruit}
            position={fruit.position}
            scale={fruit.scale}
            rotation={fruit.rotation}
            amplitude={fruit.amplitude}
            frequency={fruit.frequency}
          />
        ))}

        {/* <gridHelper args={[30, 30]} /> */}
      </Canvas>
    </div>
  );
}

export default Scene;
