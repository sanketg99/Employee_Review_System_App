const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:27017/test2`);
//mongodb://localhost:27017/Placement_Cell_App
// mongodb+srv://sanketbg99:sanket123@cluster0.ewcrs64.mongodb.net/?retryWrites=true&w=majority/placementCell
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Successfully connected to the Mongodb-Database');
});

module.exports = db;

