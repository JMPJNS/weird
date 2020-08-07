import {NextApiResponse} from "next"
import {getUserModel, User} from "../../models/User"
import {CustomRequest} from "../../server"
import {hash} from "bcrypt"


export default async function signup(req: CustomRequest, res: NextApiResponse) {
	if (req.method != "POST") {
		res.statusCode = 400
		res.json({message: "Only POST Method supported"})
		return
	}
	const userModel = getUserModel(req.mongo.Connection)
	
	const user: User = req.body
	
	const foundUser = await userModel.count({Email: user.Email})
	
	if (foundUser) {
		res.statusCode = 400
		res.json({message: "User with that Email Already Exists"})
		return
	}

	user.Password = await hash(user.Password, 8)
	
	user.Permissions = []

	const { _id: id } = await userModel.create(user);
	
	res.statusCode = 200
	res.json({ Name: user.Name, ID: id })
}
