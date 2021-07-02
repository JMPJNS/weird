import ReactDOM from 'react-dom'
import React, { CSSProperties, useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import Layout from "../components/layouts/layout"

export default function Component() {
    const style: CSSProperties = {marginTop: 150}
    return (
        <Layout>
            <Canvas style={style}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]} />
                <Box position={[1.2, 0, 0]} />
            </Canvas>
        </Layout>
    )
}

function Box(props: JSX.IntrinsicElements['mesh']) {
    const mesh = useRef<THREE.Mesh>(null!)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    let shrinking = false;
    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.05
        mesh.current.rotation.y += 0.05
        if (shrinking) {
            mesh.current.scale.x -= 0.1;
            if (mesh.current.scale.x <= 0.5) shrinking = false
        } else {
            mesh.current.scale.x += 0.1;
            if (mesh.current.scale.x >= 3) shrinking = true
        }
    })
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={(active ? 4 : 2)}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'green' : 'purple'} />
      </mesh>
    )
  }