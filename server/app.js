const express = require("express")
const {graphqlHTTP} = require("express-graphql") 
const schema = require("./schema/schema")
const mongoose = require("mongoose")

const app = express()
mongoose.connect("mongodb+srv://graphql:graphql@cluster0.cl31gtj.mongodb.net/");
console.log("Database connected");

// const database = async () => {
//     try {
//         await mongoose.connect(
//           "mongodb+srv://graphql:graphql@cluster0.cl31gtj.mongodb.net/"
//         );
//         console.log("Database connected");
//     } catch (error) {
        
//     }
// }
// database()

// Connnect to the database


app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}))

app.listen(4000, () => {
    console.log("Server is Running on 4000");
})