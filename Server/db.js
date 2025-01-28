const mongoose = require('mongoose')
require('dotenv').config({ path: '../.env' })

const connectTOMongo = ()=>{
  mongoose.connect(`mongodb+srv://devpatel14082003:${process.env.MONGO_CONNECT_PASS}@cluster0.yd5rj.mongodb.net/chessnut`).then(()=>{
    console.log("Connected to mongoDB successfully.")
  })
  .catch((err)=>{
    console.log(err)
  })

}

module.exports = connectTOMongo;

