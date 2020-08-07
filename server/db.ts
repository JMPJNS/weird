import mongoose from "mongoose"
import Model from "../models/model"

export default class Mongo {
		
	public static Connection: mongoose.Connection
	
	public static async ConnectAsync(connectionString: string) {
		Mongo.Connection = await mongoose.createConnection(connectionString, {useNewUrlParser: true, dbName: "weird", useUnifiedTopology: true})
		console.log("connected to mongo")
	}
	
	
}