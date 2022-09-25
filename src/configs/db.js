const mongoose=require("mongoose");
require('dotenv').config();
const url =process.env.URL ;
console.log(typeof url)
module.exports = () => {
    return mongoose.connect(
       `${url}`
    )
  };
