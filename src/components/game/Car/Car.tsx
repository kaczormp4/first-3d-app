import { useRef, useState, useEffect } from "react";

function Car(props) {
  const carRef = useRef();
  const [position, setPosition] = useState([0, 0.5, 0]);

  // Handle movement with keys
  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prev) => {
        const [x, y, z] = prev;
        switch (event.key) {
          case "ArrowUp":
          case "w":
            return [x, y, z - 0.1];
          case "ArrowDown":
          case "s":
            return [x, y, z + 0.1];
          case "ArrowLeft":
          case "a":
            return [x - 0.1, y, z];
          case "ArrowRight":
          case "d":
            return [x + 0.1, y, z];
          default:
            return prev;
        }
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <mesh ref={carRef} position={position} {...props}>
      <boxGeometry args={[1, 0.5, 2]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default Car;
