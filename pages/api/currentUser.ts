// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiResponse} from "next"
import {getUserModel, PartialUser} from "../../models/User"
import {CustomRequest} from "../../server"
import authenticated from "../../server/middlewares/authenticated"

export async function getCurrentUser(req: CustomRequest, res: NextApiResponse) {
  res.statusCode = 200
  const foundUser = await getUserModel(req.mongo.Connection).findById(req.userId)
  if (!foundUser) {
    res.statusCode = 404
    res.end("User Not Found")
    return
  }

  const partialUser = <PartialUser>{}
  partialUser.Id = foundUser._id
  partialUser.Email = foundUser.Email!
  partialUser.Name = foundUser.Name!
  partialUser.Permissions = foundUser.Permissions!

  ;res.json(partialUser)
}

export default authenticated(getCurrentUser)
