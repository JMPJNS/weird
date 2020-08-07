import {sign} from "jsonwebtoken"
import {NextApiResponse} from "next"
import JwtClaim from "../../models/JwtClaim"
import {User, getUserModel} from "../../models/User"
import {CustomRequest} from "../../server"
import {compare} from "bcrypt"

import cookie from "cookie"


export default async function login(req: CustomRequest, res: NextApiResponse) {

	if (req.method != "POST") {
		res.statusCode = 400
		res.json({message: "Only POST Method supported"})
		return
	}

	const user: User = req.body
	
	const userModel = getUserModel(req.mongo.Connection)

	// const foundUser = await userModel.findOne({Email: user.Email}, "-Password")
	const foundUser = await userModel.findOne({Email: user.Email})

	if (!foundUser) {
		res.statusCode = 404
		res.json({message: "User Not Found"})
		return
	}
	
	const passwordOk = await compare(user.Password, foundUser.Password!)

	if (!passwordOk) {
		res.statusCode = 403
		res.json({message: "Invalid Password"})
		return
	}

	const claim = <JwtClaim>{}

	claim.Name = user.Name!
	claim.Email = user.Email
	claim.Permissions = user.Permissions!
	claim.sub = foundUser._id

	const jwt = sign(claim, req.jwtSecret, {expiresIn: "5d"})
	
	res.setHeader("Set-Cookie", cookie.serialize("auth", jwt, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: true,
		path: "/",
		maxAge: 60*60*5
	}))

	res.statusCode = 200
	res.end("success")
}