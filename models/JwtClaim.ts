import {Permission} from "./Permission"

export default interface JwtClaim {
	sub: string
	Email: string
	Name: string
	Permissions: Permission[]
}