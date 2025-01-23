import { usePlane } from "@react-three/cannon";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import desertTexture from "../../../assets/des.jpg";

function Ground() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0], // Lay flat horizontally
    position: [0, 0, 0], // Ground at y = 0
  }));

  // Load the grass texture
  const grassTexture = useLoader(TextureLoader, desertTexture);

  // Repeat the grass texture for tiling effect
  //   grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  //   grassTexture.repeat.set(50, 50); // Adjust tiling to match ground size

  return (
    <mesh ref={ref}>
      <planeGeometry args={[50, 50]} />
      <meshStandardMaterial map={grassTexture} />
    </mesh>
  );
}

export default Ground;
