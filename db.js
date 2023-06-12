const config = require("./config/key");
const db = require('mongoose')

db.connect(config.mongoURI,{
    useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err));

module.exports = db;