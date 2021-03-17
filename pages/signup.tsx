import React, {useState} from "react"
import Layout from "../components/layouts/layout"
import doFetch from "../helpers/do-fetch"
import getCurrentUser from "../helpers/getCurrentUser";
import {NextPageContext} from "next";
import Login from "./login";
import {PartialUser} from "../models/user";

export default function Signup({user}: {user?: PartialUser}) {
	if (user) {
		return (<Layout>Already Logged in, <a href="/logout">Logout</a></Layout>)
	}

	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [username, setUsername] = useState("")
	const [response, setResponse] = useState("")
	
	const signup = async () => {
		const res = await doFetch("/api/signup", "post", {Email: email, Password: password, Name: username})
		setResponse(JSON.stringify([res?.data, {status: res?.status}], null, 2))

		if (res?.status == 200) {
			localStorage.setItem("user", JSON.stringify(res))
		}
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

export async function getServerSideProps(ctx: NextPageContext) {
	const user = getCurrentUser(ctx)
	return({props: {user}})
}