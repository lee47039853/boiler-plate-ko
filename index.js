const dotenv = require('dotenv');
dotenv.config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const { User } = require("./models/User");
const port = process.env.PORT || 3000;


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//application/json
app.use(bodyParser.json());

app.listen(port, () => console.log(`Example app listening on port ${port} !`));

app.get('/', (req, res) => res.send('Hello Node.js World !!! '));

app.post('/register', (req, res) => {

  const user = new User(req.body);
  user.save((err, userInfo) => {
    if(err) return res.json({success: false, err})
    return res.status(200).json({
      success: true
    });
  });

});



