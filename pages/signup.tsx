import React, {useState} from "react"
import Layout from "../components/layouts/layout"
import doFetch from "../helpers/do-fetch"

export default function Signup() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")
	const [response, setResponse] = useState("")
	
	const signup = async () => {
		const res = await doFetch("/api/signup", "post", {Email: email, Password: password, Name: username})
		setResponse(JSON.stringify(res?.data, null, 2))
	}
	
	return (
		<Layout>
			<button onClick={signup}>Signup</button>
			<input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}/>
			<input type="text" placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
			<input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
			<p style={{color: "white"}}>{response}</p>
		</Layout>
	)
}