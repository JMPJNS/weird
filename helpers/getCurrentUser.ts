import {PartialUser} from "../models/user"
import {NextPageContext} from "next"
import {decode} from "jsonwebtoken"
import {CustomRequest} from "../server";
import JwtClaim from "../models/jwt-claim";

export default function getCurrentUser(ctx: NextPageContext): PartialUser | null {
	if (!ctx || !ctx?.req) return null

	const c = (ctx.req as CustomRequest)?.cookies

	if (!c?.auth) return null

	const d = decode(c.auth) as JwtClaim

	if (!d) return null
	if (!d.Email || !d.Name || !d.sub) return null

	const ret = {} as PartialUser
	ret.Email = d.Email
	ret.Id = d.sub
	ret.Name = d.Name
	ret.Permissions = d.Permissions || []

	return ret
}