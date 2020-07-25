import React, {Fragment} from "react"

export default class RealScribble extends React.Component {
	constructor(props: {}) {
		super(props);
		this.state = {pixels: []}
	}
	state: {pixels: Pixel[]}
	
	render() {
		return (
			<Fragment>
				<div style={{color: "white"}}>Definetly Not Fake Scribble</div>
			</Fragment>
		)
	}

}

interface Pixel {
	x: number,
	y: number,
	color: string
}