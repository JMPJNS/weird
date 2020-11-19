import axios, {AxiosResponse, Method} from "axios"
import {CustomRequest} from "../server/index"
import FormData from "form-data"

export default async function uploadToCDN(req: CustomRequest, filename: string, contentType: string, file: File) {

    console.log("uploading to cdn: ", req.apiKeys.CDN_API_KEY)
    
    const resp = await axios.request({
        method: "POST",
        url: "https://cdn.jmp.blue",
        data: file,
        headers: {"x-api-key": req.apiKeys.CDN_API_KEY, "Content-Type": contentType}
    }).catch(e => {
        return e.response
    })

    console.log(resp)
}