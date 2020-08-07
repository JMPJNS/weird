import React, {useState} from "react"
import Layout from "../components/layouts/layout"
import doFetch from "../helpers/do-fetch"

export default function Login() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [response, setResponse] = useState("")
	
	const login = async () => {
		const res = await doFetch("/api/login", "post", {Email: email, Password: password})
		setResponse(JSON.stringify(res?.data, null, 2))
	}
	
	return (
		<Layout>
			<button onClick={login}>Login</button>
			<input type="text" placeholder="email" onChange={(event) => setEmail(event.target.value)}/>
			<input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
			<p style={{color: "white"}}>{response}</p>
		</Layout>
	)
}