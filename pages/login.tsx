import React, {useState} from "react"
import Layout from "../components/layouts/layout"
import doFetch from "../helpers/do-fetch"
import getCurrentUser from "../helpers/getCurrentUser";
import {NextPageContext} from "next";
import {PartialUser} from "../models/user";

export default function Login({user}: {user?: PartialUser}) {
	if (user) {
		const us = JSON.stringify(user, null, 2)
		return (<Layout>Already Logged in {us} , <a href="/logout">Logout</a></Layout>)
	}
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [response, setResponse] = useState("")

	
	const login = async () => {
		const res = await doFetch("/api/login", "post", {Email: email, Password: password})
		setResponse(JSON.stringify([res?.data, {status: res?.status}], null, 2))

		if (res?.status == 200) {
			localStorage.setItem("user", JSON.stringify(res))
		}
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

export async function getServerSideProps(ctx: NextPageContext) {
	const user = getCurrentUser(ctx)
	return({props: {user}})
}
