require('dotenv').config();

module.exports = {
	serverPort: {
		PORT: process.env.PORT,
	},
	database: {
		URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.lquq3.mongodb.net/${process.env.MONGO_DBNAME}?retryWrites=true&w=majority`,
	},
};
