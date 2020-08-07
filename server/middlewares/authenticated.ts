/**
 * Check if a user is authenticated via JWT
 * @param fn function to execute afterwards
 */
import express from "express"
import {NextApiHandler, NextApiRequest, NextApiResponse} from "next"
import JwtClaim from "../../models/JwtClaim"
import {User} from "../../models/User"
import Mongo from "../db"
import {CustomRequest} from "../index"
import {verify, VerifyErrors} from "jsonwebtoken"


export type CustomApiHandler<T = any> = (req: CustomRequest, res: NextApiResponse<T>) => void | Promise<void>

const authenticated = (fn: CustomApiHandler) => async (req: CustomRequest, res: NextApiResponse) => {
	if (!req.cookies.auth) {
		await un()
		return
	}
	verify(req.cookies.auth, req.jwtSecret, async function (err: VerifyErrors | null, decoded: object | undefined) {
		if (!err && decoded) {
			const jwt = decoded as JwtClaim
			req.userId = jwt.sub
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