import mongoose, {Connection} from 'mongoose'
import Model from "./model"
import {Permission} from "./permission"
import {prop, getModelForClass} from "@typegoose/typegoose"

export class User extends Model {
	@prop({required: true}) public Name?: string
	@prop({required: true}) public Email!: string
	@prop({required: true}) public Password?: string
	@prop() public Permissions?: Permission[]
}

export interface PartialUser {
	Id: string
	Name: string
	Email: string
	Permissions: Permission[]
}

export function getUserModel(conn: mongoose.Connection) {
	return getModelForClass(User, {existingConnection: conn})
}
