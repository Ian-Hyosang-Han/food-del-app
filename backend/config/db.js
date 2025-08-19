import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kkoma330:mpzdqVcNW33nuTwQ@cluster0.dighzep.mongodb.net/food-del').then(()=>console.log("DB connected"));
}