import  express from "express";
import  dotenv from "dotenv";
import  mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import PackagesRoute from "./routes/Packages.js";
import roomsRoute from "./routes/rooms.js";

const app = express();
dotenv.config();

const contect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB")
      } catch (error) {
        throw error
      }   
    
};

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from MongoDB")
})

//Middlewares

//Bypass validation error messages in Postman
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/hotels", PackagesRoute);
app.use("/api/rooms", roomsRoute);

app.listen(8800, () => {
    contect ()
    console.log("Backend Conntected")
});
