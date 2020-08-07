import mongoose from "mongoose"
import Model from "../models/Model"

export default class Mongo {
		
	public static Connection: mongoose.Connection
	
	public static async ConnectAsync(connectionString: string) {
		Mongo.Connection = await mongoose.createConnection(connectionString, {useNewUrlParser: true, dbName: "weird"})
		console.log("connected to mongo")
	}
	
	
}