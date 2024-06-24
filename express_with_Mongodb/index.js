const mongoose = require("mongoose")

main()
.then(()=>{
    console.log('connected')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/demo_practice');
}

//Database Schema
const userSchema = new mongoose.Schema({
    Name: String,
    Email : String,
    age : Number
})

//Make collections
const User =  mongoose.model("User",userSchema)
// const Employee =  mongoose.model("Employee",userSchema)

//CRUD

// const user2 = new User({
//      Name:"Siyush",
//      Email:"siyush@gmail.com",
//      age:24
// })
// user2.save()
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })


//isert Many
//  User.insertMany([
//     {
//         "Name": "Alice",
//         "Email": "alice@example.com",
//         "Age": 28
//     },
//     {
//         "Name": "Bob",
//         "Email": "bob@example.com",
//         "Age": 32
//     },
//     {
//         "Name": "Charlie",
//         "Email": "charlie@example.com",
//         "Age": 25
//     },
//     {
//         "Name": "Diana",
//         "Email": "diana@example.com",
//         "Age": 30
//     },
//     {
//         "Name": "Ethan",
//         "Email": "ethan@example.com",
//         "Age": 27
//     }
// ]) 
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>console.log(err))


//Update
// User.updateOne({ Name: 'Siyush' }, { $set: { Name: 'Nikhil' } })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// User.deleteOne({Name:'Nikhil'})
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })

//Find
// User.findById('6679791c6d656b7790d3fb4e')
// .then((res)=>{
//     console.log(res)
// })
// .catch((err)=>{
//     console.log(err)
// })