import { MongoClient } from "mongodb";

const client = new MongoClient(
	"mongodb+srv://projetoteste2024:ajuGNN2nA8I09Qha@cluster0.9qawmcu.mongodb.net/?retryWrites=true&w=majority"
);

let usersCollection; 

try {
	await client.connect();

	const db = client.db("projetoDesafioChat");
	usersCollection = db.collection("users");

	console.log("Successfully connected to database");
} catch (error) {
	console.log(error);
}

export { usersCollection };