import {NextApiResponse} from "next"
import {User, getUserModel} from "../../models/User"
import {CustomRequest} from "../../server"


export default async function login(req: CustomRequest, res: NextApiResponse) {

	const user: User = req.body.credentials
	
	const userModel = getUserModel(req.mongo.Connection)

	const foundUser = await userModel.findOne({Email: user.Email}, "-Password")

	if (foundUser) {
		res.statusCode = 400
		res.json({message: "User with that Email Already Exists"})
		return
	}

	const { _id: id } = await userModel.create(user);

	res.statusCode = 200
	res.json({ Name: user.Name, ID: id })
}