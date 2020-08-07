import cookie from "cookie"
import {NextApiResponse} from "next"
import {CustomRequest} from "../../server"

export default async function logout(req: CustomRequest, res: NextApiResponse) {
	res.statusCode = 200
	res.setHeader("Set-Cookie", cookie.serialize("auth", "", {
		httpOnly: true,
		secure: process.env.NODE_ENV !== "development",
		sameSite: true,
		path: "/",
		expires: new Date(0)
	}))
	res.end()
}