import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Car from "../Car/Car";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

import des from "../../../assets/des.jpg";

function GameScene() {
  const grassTexture = useLoader(TextureLoader, des);

  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Car />
        <OrbitControls />

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <meshStandardMaterial map={grassTexture} />
        </mesh>
        <gridHelper args={[10, 10]} />
      </Canvas>
    </div>
  );
}

export default GameScene;
