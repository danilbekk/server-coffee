import express from "express";
import mongoose from "mongoose";
import router from "./routes/drinks.js";
const DB_URL = "mongodb+srv://md_User:md_User@cluster0.7blad.mongodb.net/polls";

const app = express();
app.use(express.json());

app.use("/", router);

async function start() {
  try {
    await mongoose.connect(DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    app.listen(3000, () => console.log("Сервер запущен"));
  } catch (e) {
    console.log(e.message);
  }
}

start();
