import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const NeuralNet = ({ isMobile }) => {
	const computer = useGLTF("./neural_network/scene.gltf");
	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<pointLight intensity={1} />
			<spotLight position={[-20, 50, 20]} angle={0.12} penumbra={1} intensity={4} />
			<primitive
				object={computer.scene}
				scale={isMobile ? 0.5 : 0.65}
				position={isMobile ? [0, -3, -1.5] : [0, -3.5, -0.5]}
				rotation={[0, Math.PI / 2 - 0.2, -0]}
			/>
		</mesh>
	);
};

const NeuralNetCanvas = () => {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width:500px)");

		setIsMobile(mediaQuery.matches);

		const handleMediaQueryChange = (event) => {
			setIsMobile(event.matches);
		};

		mediaQuery.addEventListener("change", handleMediaQueryChange);

		return () => {
			mediaQuery.removeEventListener("change", handleMediaQueryChange);
		};
	}, []);

	return (
		<Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 50 }} gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
				<NeuralNet />
			</Suspense>
			<Preload all />
		</Canvas>
	);
};

export default NeuralNetCanvas;
