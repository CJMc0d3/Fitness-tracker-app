const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindandModify: true
});

app.use(require("./routes/apiroute.js"));
app.use(require("./routes/htmlroute.js"));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!!`)
})