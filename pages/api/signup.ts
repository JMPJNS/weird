import cookie from "cookie"
import {NextApiResponse} from "next"
import JwtClaim from "../../models/JwtClaim"
import {getUserModel, User} from "../../models/User"
import {CustomRequest} from "../../server"
import {hash} from "bcrypt"
import {sign} from "jsonwebtoken"
import {getCurrentUser} from "./currentUser"

export default async function signup(req: CustomRequest, res: NextApiResponse) {
	if (req.method != "POST") {
		res.statusCode = 400
		res.json({message: "Only POST Method supported"})
		return
	}
	const userModel = getUserModel(req.mongo.Connection)
	
	const user: User = req.body
	
	const foundUser = await userModel.countDocuments({Email: user.Email})
	
	if (foundUser) {
		res.statusCode = 400
		res.json({message: "User with that Email Already Exists"})
		return
	}

	user.Password = await hash(user.Password, 8)
	
	user.Permissions = []

	const { _id: id } = await userModel.create(user);
	
	const claim = <JwtClaim>{}

	claim.Name = user.Name!
	claim.Email = user.Email
	claim.Permissions = user.Permissions!
	claim.sub = id

	const jwt = sign(claim, req.jwtSecret, {expiresIn: "5d"})

	res.setHeader("Set-Cookie", cookie.serialize("auth", jwt, {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: true,
		path: "/",
		maxAge: 60*60*5
	}))

	req.userId = id
	await getCurrentUser(req, res)
}
