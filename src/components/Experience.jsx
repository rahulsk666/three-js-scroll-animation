/* eslint-disable react/no-unknown-property */
import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Office } from "./Office";
import { Overlay } from "./Overlay";

const Experience = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <OrbitControls enableZoom={false} enableRotate={false} />
      <ScrollControls pages={3} damping={0.25}>
        <Overlay />
        <Office />
      </ScrollControls>
    </>
  );
};

export default Experience;
