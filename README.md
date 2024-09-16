# React Model Loader

`react-model-loader` is a React component for loading 3D models with support for OBJ, GLTF, GLB, FBX, and STL formats. This component uses Three.js and `@react-three/fiber` to render 3D models in a React application. You can also customize the background with a color or image.

## Installation

You can install `react-model-loader` via npm, yarn, or pnpm:

```sh
npm install react-model-loader
```

Or with yarn:

```sh
yarn add react-model-loader
```

Or with pnpm:

```sh
pnpm add react-model-loader
```

## Usage

Once installed, you can use the `ModelLoader` component in your React application. Here’s an example:

```jsx
import React from "react";
import ModelLoader from "react-model-loader";

function App() {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <ModelLoader
        // Required: URL or local path to your 3D model file
        modelPath="path/to/your/model.glb"
        // Optional: Props
        backgroundColor="#f0f0f0"
        backgroundImage="path/to/your/background.jpg"
        className="h-full w-full"
      />
    </div>
  );
}

export default App;
```

## Props

The `ModelLoader` component accepts the following props:

- **`modelPath`** (string, required): The URL or local path to the model file. Supported formats include OBJ, GLTF, GLB, FBX, and STL.

- **`backgroundColor`** (string, optional): A hex color code (e.g., `#ffffff`) to set the background color. If not provided, the background will be transparent.

- **`backgroundImage`** (string, optional): A URL to an image that will be used as the background. If provided, it will override the `backgroundColor` prop. If neither is provided, the background will be transparent.

## Development

To contribute to this project or use it in development mode, clone the repository and run:

```sh
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

## Building

To build the package for production:

```sh
pnpm run build
```

## Author

[NaolBm](https://twitter.com/NaolBm)
