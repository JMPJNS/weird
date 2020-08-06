import React, {useState} from "react"
import Layout from "../components/layouts/Layout"

export default function NovelReader() {

	const [novelUrl, setNovelUrl] = useState("")
	
	function doTheThing() {
		console.log(novelUrl)
	}

	return (
		<Layout>
			<p>Novel Stuff</p>
			
			<label>Boxnovel URL</label>
			<input onChange={(event) => setNovelUrl(event.target.value)} value={novelUrl} />
			<button onClick={doTheThing}>Show Novel</button>
		</Layout>
	)
}