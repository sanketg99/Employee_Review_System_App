const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://sanketbg99:sanket123@cluster0.ewcrs64.mongodb.net/?retryWrites=true&w=majority`);
//mongodb://localhost:27017/employeeReview
// mongodb+srv://sanketbg99:sanket123@cluster0.ewcrs64.mongodb.net/?retryWrites=true&w=majority
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Successfully connected to the Mongodb-Database');
});

module.exports = db;

