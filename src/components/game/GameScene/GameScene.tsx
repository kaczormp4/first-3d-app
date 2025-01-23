import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon"; // Import Physics
import Car from "../Car/Car";
import Ground from "../Ground/Ground";
import { OrbitControls } from "@react-three/drei";

function GameScene() {
  return (
    <div className="w-screen h-screen">
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />

        {/* Physics World */}
        <OrbitControls />
        <Physics>
          {/* Grass Ground */}
          <Ground />

          {/* Car */}
          <Car />
          <gridHelper args={[10, 10]} />
        </Physics>
      </Canvas>
    </div>
  );
}

export default GameScene;
