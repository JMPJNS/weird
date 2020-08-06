// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {NextApiResponse} from "next"
import {CustomRequest} from "../../server"


export default (req: CustomRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ name: 'John Doe', stuff: req.test })
}
