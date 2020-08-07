import {NextPageContext} from "next"
import axios, {AxiosResponse, Method} from "axios"
import Router from "next/router"

export default async function doFetch(url: string, method: Method = "get", data: any = {}, ctx?: NextPageContext, redirectToLogin = false): Promise<AxiosResponse | undefined> {
	const cookie = ctx?.req?.headers.cookie
	
	
	const resp = await axios.request({
			method: method,
			url: url,
			data: data,
			headers: {cookie: cookie}
	}).catch(e => {
		return e.response
	})
	
	if (resp?.status !== 401 || !redirectToLogin || !ctx) {
		return resp
	}
	
	if (cookie) {
		ctx?.res?.writeHead(302, {Location: "/login"})
		ctx?.res?.end()
		return
	}
	
	await Router.replace("/login")
}