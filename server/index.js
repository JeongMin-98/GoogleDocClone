const express = require("express");
const mongoose = require("mongoose");
const PORT = process.env.PORT | 3001;

const app = express();

const DB = require('./config/keys');



mongoose.set('strictQuery', true);
mongoose.connect(DB.mongoURI, {
    useNewUrlParser: true, useUnifiedTopology: true
}).then(() => console.log("MongoDB connected...")).catch(error => console.log(error))

app.listen(PORT, "0.0.0.0", () => {
    console.log(`connected at port ${PORT}`);
});