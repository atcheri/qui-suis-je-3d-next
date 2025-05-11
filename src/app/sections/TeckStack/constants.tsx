export type TechStackIcon = {
  name: string;
  modelPath: string;
  scale: number;
  rotation: [number, number, number];
};

export const techStackIcons: TechStackIcon[] = [
  {
    name: "Golang Development",
    modelPath: "/models/golang-3d-model.glb",
    scale: 3,
    rotation: [0, 4.5, -0.3],
  },
  {
    name: "Front-end with React.js",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Back-end with Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Building on the Cloud with AWS",
    modelPath: "/models/aws-3d-model.glb",
    scale: 0.3,
    rotation: [0, 0, 0],
  },
  {
    name: "Writing smartcontracts in Solidity",
    modelPath: "/models/solidity-3d-model.glb",
    scale: 3,
    rotation: [0, 0, 0],
  },
];
