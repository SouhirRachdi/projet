const express=require ('express');

const cors=require('cors');
const app= express();

require("dotenv").config();
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.json());
app.use(cors())
const user=require("./Routes/userRoutes");
const cour=require("./Routes/courRoutes");
const post=require("./Routes/postRoutes");
const library=require("./Routes/libraryRoutes");

const connectDb=require("./config/connectdb")

connectDb()
//Routes

app.use("/user",user)
app.use("/cour",cour)
app.use("/post",post)
app.use("/library", library)


  
const port=process.env.PORT||5000
app.listen(5000,(err)=>{
err?console.log(err):console.log(`server is run http://localhost:${port}`)
 })