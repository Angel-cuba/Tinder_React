const ctrl = {};
const { database } = require('./../keytoserver/key.js');
const { MongoClient } = require('mongodb');
const { v1: uuidv1 } = require('uuid');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
	console.log(req.body);
	const { email, password } = req.body;

	const uniqueId = uuidv1();
	const hashPassword = await bcrypt.hash(password, 10);
	try {
		client.connect();
		const db = await client.db('tinder');
		const dbUser = await db.collection('users').findOne({ email });
		if (dbUser) {
			return res.status(400).json({ error: 'Email already exists' });
		}
		const sanitizedEmail = email.toLowerCase();
		const newUser = {
			user_id: uniqueId,
			email: sanitizedEmail,
			hash_Password: hashPassword,
		};
		await dbUser.insert(newUser);
		// const insertedUser = await db.collection('users').save(insertedUser);

		// const token = jwt.sign(insertedUser, sanitizedEmail, {
		// 	expiresIn: 60 * 24,
		// });
		res.status(200).json({ userId: uniqueId, email: sanitizedEmail });
	} catch (error) {
	} finally {
		client.close();
	}
};

ctrl.users = async (req, res) => {
	res.json('users');
};

module.exports = ctrl;
