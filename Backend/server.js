// require('dotenv').config()
const cors = require('cors');
const express = require('express')
const app = express()
const mongoose = require('mongoose')

//connection to mongo
const CONNECTION_URL = 'mongodb+srv://evilker:HjtZ2DikD.qPrw3@cluster0.op7rz.mongodb.net/EdenDB?retryWrites=true&w=majority';
const PORT = process.env.PORT|| 3100;
app.use(cors({origin: (origin, callback) => callback(null, true), credentials: true}));
app.options('*', cors());
app.use(express.json())
app.options('*',cors());

const usersRouter = require('./routes/users')
app.use('/users', usersRouter)
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));









