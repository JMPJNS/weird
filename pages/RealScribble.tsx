import React, {Fragment, useState} from "react"
import styles from "../styles/RealScribble.module.css"
import {useMouseWheel, useWindowSize} from "react-use"
import Layout from "../components/layouts/layout"

export default function RealScribble(props: {}) {
	
	function doTest() {
		console.log(canvasRef)
	}

	const canvasRef = React.useRef<HTMLCanvasElement>(null);
	const [context, setContext] = React.useState<CanvasRenderingContext2D | null>(null);
	
	const [color, setColor] = useState("#F2F")
	const [strokeSize, setStrokeSize] = useState("3")
	
	const mouseWheel = useMouseWheel()
	const windowSize = useWindowSize()
	
	function hitDebugger() {
		debugger
	}

	React.useEffect(() => {
		let mouseDown: boolean = false;
		

		function handleMouseUp(evt: MouseEvent) {
			mouseDown = false;
		}

		function handleMouseDown(evt: MouseEvent) {
			mouseDown = true;
		}
		
		function drawPoint(ctx: CanvasRenderingContext2D, pos: {x: number, y: number}, size: number, color: string) {
			const prevFill = ctx.fillStyle
			const prevStroke = ctx.strokeStyle
			console.log(color)
			
			ctx.beginPath();
			ctx.fillStyle = color
			ctx.strokeStyle = color
			ctx.arc(pos.x, pos.y, size, 0, 2 * Math.PI, false);
			ctx.fill();
			ctx.lineWidth = 5;
			// ctx.strokeStyle = '#003300';
			ctx.stroke();
			
			ctx.fillStyle = prevFill
			ctx.strokeStyle = prevStroke
		}

		function handleMouseMove(evt: MouseEvent) {
			if (canvasRef.current) {
				const pos = getMousePos(canvasRef.current, evt)
				const size = parseInt(strokeSize)
				if (context && mouseDown) {
					drawPoint(context, pos, size, color)
				}
				
			}
		}

		function getMousePos(canvas: HTMLCanvasElement, evt: MouseEvent) {
			const rect = canvas.getBoundingClientRect();
			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top
			};
		}

		if (canvasRef.current) {
			const renderCtx = canvasRef.current.getContext('2d');

			if (renderCtx) {
				canvasRef.current.addEventListener('mousedown', handleMouseDown);
				canvasRef.current.addEventListener('mouseup', handleMouseUp);
				canvasRef.current.addEventListener('mousemove', handleMouseMove);

				setContext(renderCtx);
			}
		}

		return function cleanup() {
			if (canvasRef.current) {
				canvasRef.current.removeEventListener('mousedown', handleMouseDown);
				canvasRef.current.removeEventListener('mouseup', handleMouseUp);
				canvasRef.current.removeEventListener('mousemove', handleMouseMove);
			}
		}
		
	}, [context, color, strokeSize, mouseWheel, windowSize]);
	
	return (
		<Layout>
			<div>
				<p style={{color: "white"}}>Definetly Not Fake Scribble {mouseWheel}</p>
				<input style={{color: color}} onChange={(event) => setColor(event.target.value)} value={color} />
				<input type="number" style={{color: color}} onChange={(event) => setStrokeSize(event.target.value)} value={strokeSize} />
				<button onClick={hitDebugger}>Debug</button>
			</div>
			<canvas
				className={styles.canvas_container}
				id="canvas"
				ref={canvasRef}
				width={500}
				height={500}
				style={{
					border: '2px solid #000',
					marginTop: 10
				}}
			/>
		</Layout>
	)
}

interface Pixel {
	x: number,
	y: number,
	color: string
}

type Coordinates = {
	x: number;
	y: number;
};