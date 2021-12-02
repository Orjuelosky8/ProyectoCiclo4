const mongoose = require('mongoose');

const URI = process.env.MONGOOSE_URI
    ? process.env.MONGOOSE_URI
    : 'mongodb://localhost:27017/Create';

mongoose.connect(URI, {
    useNewUrlParser: true,
    //useCreateIndex: true
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Database is connected');
});


//creamos nuestra db
/*const mongoose = require('mongoose');

URI=('mongodb+srv://admin:HoneyPet2021@cluster0.x424j.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(db => console.log('Connected to database', db.connection.name))
.catch(err => console.log(err))

module.exports = mongoose
*/