"use client";
import { Mosaic, MosaicWindow } from "react-mosaic-component";
import "react-mosaic-component/react-mosaic-component.css";

function page() {
  const ELEMENT_MAP = {
    a: <div className="bg-white">Left Window</div>,
    b: <div className="bg-white">Top Right Window</div>,
    c: <div className="bg-white">Bottom Right Window</div>,
  };
  return (
    <div className="bg-black h-screen pt-16">
      <Mosaic
        renderTile={(id) => ELEMENT_MAP[id]}
        initialValue={{
          direction: "column",
          first: {
            direction: "row",
            first: "a",
            second: "b",
            splitPercentage: 30,
          },
          second: "c",
          splitPercentage: 80,
        }}
      />
    </div>
  );
}
export default page;
