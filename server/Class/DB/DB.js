const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Schema = mongoose.Schema

dotenv.config();

const { DB_ADRESS, DB_USER, DB_PASSWORD, DB_PORT } = process.env

class DB {

    constructor() {
        mongoose.connect(`mongodb://${DB_USER}:${DB_PASSWORD}@${DB_ADRESS}:${DB_PORT}/timer`, {

        })
        .catch((err) => console.log(err))
        .then(() => console.log('DB connected'))
        
        this.db = mongoose.connection
    }

    get() {
        return this.db
    }

    newTimer() {
        const Timer = new Schema({
            id: {String, unique: true, required: true},
            name: {String, required: true},
            date: {Date, required: true}
        },
        {
            timestamps: true
        })
        return mongoose.model('timer', Timer)
    }
}

module.exports = DB