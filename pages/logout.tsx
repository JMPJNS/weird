import Layout from "../components/layouts/layout";
import React from "react";
import doFetch from "../helpers/do-fetch";

export default function Logout() {
	const lo = async () => {
		const res = await doFetch("/api/logout")
		if (res?.status != 200) {
			console.error("error logging out", res?.data)
		}
		window.location.href = "/"
	}

	return (
			<Layout>
				<button onClick={lo}>Logout</button>
			</Layout>
	)
}