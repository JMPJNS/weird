import uploadToCDN from "helpers/upload-to-cdn"
import {NextApiResponse} from "next"
import {CustomRequest} from "../../../server"

export default async function artifactRater(req: CustomRequest, res: NextApiResponse) {
    await uploadToCDN(req, "image/png", req.body)
    res.end("yes")
}