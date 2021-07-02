import React, {useState} from "react"
import Layout from "../components/layouts/layout"

export default function NovelReader() {

	const [novelUrl, setNovelUrl] = useState("")
	
	function doTheThing() {
		console.log(novelUrl)
	}

	return (
		<Layout>
			<h1>NOT IMPLEMENTED</h1>
			<p>Novel Stuff</p>			
			<label>Boxnovel URL</label>
			<input onChange={(event) => setNovelUrl(event.target.value)} value={novelUrl} />
			<button onClick={doTheThing}>Show Novel</button>
		</Layout>
	)
}