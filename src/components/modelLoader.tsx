// ModelLoader.tsx
import React, { useEffect, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";

interface ModelLoaderProps {
  className?: string;
  modelPath: string;
  backgroundColor?: string; // Optional background color
  backgroundImage?: string; // Optional background image URL
}

const Background: React.FC<{ color?: string; image?: string }> = ({
  color,
  image,
}) => {
  const { scene }: any = useThree();

  useEffect(() => {
    if (color) {
      // Set background color
      scene.background = new THREE.Color(color);
    } else if (image) {
      // Set background image
      const loader = new THREE.TextureLoader();
      loader.load(image, (texture) => {
        scene.background = texture;
      });
    } else {
      // Clear background
      scene.background = null;
    }
  }, [color, image, scene]);

  return null;
};

const ModelLoader: React.FC<ModelLoaderProps> = ({
  modelPath,
  backgroundColor,
  backgroundImage,
  className,
}) => {
  const [model, setModel] = useState<THREE.Object3D | null>(null);

  useEffect(() => {
    // Determine the loader based on file extension
    const extension = modelPath.split(".").pop()?.toLowerCase();
    let loader: THREE.Loader | undefined;

    switch (extension) {
      case "glb":
      case "gltf":
        loader = new GLTFLoader();
        break;
      case "obj":
        loader = new OBJLoader();
        break;
      case "fbx":
        loader = new FBXLoader();
        break;
      case "stl":
        loader = new STLLoader();
        break;
      default:
        console.error("Unsupported file type:", extension);
        return;
    }

    // Load the model
    if (loader) {
      loader.load(
        modelPath,
        (loadedModel: any) => {
          if (loadedModel) {
            if (loadedModel) {
              setModel(loadedModel.scene);
            } else if (
              loadedModel instanceof THREE.Group ||
              loadedModel instanceof THREE.Mesh
            ) {
              setModel(loadedModel);
            } else {
              console.error("Unexpected model type:", loadedModel);
            }
          }
        },
        undefined,
        (error) => {
          console.error("An error happened while loading the model:", error);
        }
      );
    }
  }, [modelPath]);

  return (
    <Canvas className={className}>
      <Background color={backgroundColor} image={backgroundImage} />
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      {model && <primitive object={model} />}
      <OrbitControls />
    </Canvas>
  );
};

export default ModelLoader;
