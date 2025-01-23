import { useBox } from "@react-three/cannon";
import { useEffect } from "react";

function Car(props) {
  const [ref, api] = useBox(() => ({
    mass: 1, // Dynamic object with mass
    position: [0, 1, 0], // Initial position
    args: [1, 0.5, 2], // Car dimensions: width, height, length
  }));

  // Movement and rotation controls
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "w": // Move forward
        case "ArrowUp":
          api.applyLocalForce([0, 0, -500], [0, 0, 0]); // Push forward
          break;
        case "s": // Move backward
        case "ArrowDown":
          api.applyLocalForce([0, 0, 500], [0, 0, 0]); // Push backward
          break;
        case "a": // Turn left
        case "ArrowLeft":
          api.applyLocalTorque([0, 200, 0]); // Rotate left
          break;
        case "d": // Turn right
        case "ArrowRight":
          api.applyLocalTorque([0, -200, 0]); // Rotate right
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [api]);

  return (
    <mesh ref={ref} {...props}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Car;
