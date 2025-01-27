import { useGLTF } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

interface FruitProps {
  fruit: string;
  position: number[];
  scale: number[];
  rotation: number[];
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

  // Use useFrame to update the position and rotation every frame
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime(); // Get elapsed time

    // Apply up and down movement (sinusoidal)
    if (ref.current) {
      ref.current.position.y = Math.sin(time * frequency) * amplitude;

      // Slow horizontal rotation (around the Y-axis)
      ref.current.rotation.y += 0.01; // Adjust the speed by changing 0.01
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
      rotation={[rotation[0], rotation[1], rotation[2]]} // Preserve initial rotation values
    />
  );
};

export default Fruit;
