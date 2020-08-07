/**
 * Check if a user is authenticated via JWT
 * @param fn function to execute afterwards
 */
import express from "express"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import {User} from "../../models/User"
import Mongo from "../db"
import {CustomRequest} from "../index"
import {verify} from "jsonwebtoken"


export type CustomApiHandler<T = any> = (req: CustomRequest, res: NextApiResponse<T>) => void | Promise<void>

const authenticated = (fn: CustomApiHandler) => async (req: CustomRequest, res: NextApiResponse) => {
	if (!req.headers.authorization) {
		await un()
		return
	}
	verify(req.headers.authorization, req.jwtSecret, async function (err, decoded) {
		if (!err && decoded) {
			return fn(req, res)
		}
		await un()
	})
	
	async function un() {
		res.statusCode = 401
		await res.end("Unauthorized")
	}
}

export default authenticated