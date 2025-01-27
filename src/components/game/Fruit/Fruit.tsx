import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface FruitProps {
  fruit: string;
  position: [number, number, number];
  scale: [number, number, number];
  rotation: [number, number, number];
  amplitude: number;
  frequency: number;
}
const Fruit = ({
  fruit,
  position,
  scale,
  rotation,
  amplitude = 2,
  frequency = 1,
}: FruitProps) => {
  const { scene } = useGLTF(fruit);
  const ref = useRef();

  // Use useFrame to update the position every frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime(); // Get elapsed time
    // const amplitude = 2; // Height of the up and down movement
    // const frequency = 1; // Speed of the movement (in cycles per second)
    if (ref.current) {
      ref.current.position.y = Math.sin(time * frequency) * amplitude;
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
};

export default Fruit;
