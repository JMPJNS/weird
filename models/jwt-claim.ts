import {Permission} from "./permission"

export default interface JwtClaim {
	sub: string
	Email: string
	Name: string
	Permissions: Permission[]
}