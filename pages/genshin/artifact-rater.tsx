import Layout from "../../components/layouts/layout"
import doFetch from "../../helpers/do-fetch"
import axios, {AxiosResponse, Method} from "axios"
import FormData from "form-data"

export default function ArtifactRater() {

	let image: File;

	async function uploadImage() {
		if (!image) {
			alert("no image set")
			return
		}

		let data = new FormData()
    
		data.append(image.name, image)
		
		axios.post("/api/genshin/artifact-rater", data, {
			headers: {'Content-Type' : 'multipart/form-data'}
		})
	}

	function setImage(e: React.ChangeEvent<HTMLInputElement>) {
		const file = e.target.files?.item(0)
		if (file)
			image = file
	}

  return (
    <Layout>
			<div>Upload Image</div>
			<input onChange={setImage} type="file"></input>
			<input type="submit" onClick={uploadImage}></input>
    </Layout>
  )
}
