const ctrl = {};
const { database } = require('./../keytoserver/key.js');
const { MongoClient } = require('mongodb');

ctrl.read = async (req, res) => {
	const client = new MongoClient(database.URI);
	try {
		await client.connect();
		const db = await client.db('tinder');
		const collection = await db.collection('users');
		const users = await collection.find({}).toArray();
		res.json(users);
	} catch (error) {
		console.log(error.message);
	} finally {
		await client.close();
	}
};

ctrl.signup = async (req, res) => {
	const client = new MongoClient(database.URI);
	try {
	} catch (error) {
	} finally {
	}
	res.json('signup');
};

ctrl.users = async (req, res) => {
	res.json('users');
};

module.exports = ctrl;
