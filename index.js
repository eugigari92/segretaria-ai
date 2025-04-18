


require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


const app =express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const appuntamentiRouter = require("./routes/appuntamenti");
app.use("/api/appuntamenti", appuntamentiRouter);









mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB", err);
});

app.get("/", (req, res) => {
    res.send("Segretaria AI è online!");
}
);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);




