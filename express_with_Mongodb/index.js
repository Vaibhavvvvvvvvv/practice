const mongoose = require('mongoose');

main()
.then(()=>{
    console.log("conneted mongo db")
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/practice');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new mongoose.Schema({
    name:String,
    email:String,
    age:Number
})
const User = mongoose.model('User',userSchema)