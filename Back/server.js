const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
//connecting to database
mongoose.connect(
  "mongodb+srv://mahdi:06061997mh@tunisiapetapp.ndcmj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
);
const db = mongoose.connection;

//Server configuration
app.use(express.json());
app.listen(process.env.PORT || 5000, () => console.log("Server Started !"));

//DB Status on init
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database !"));

// Express Session

User = require("./routes/user")(app);
Pet = require("./routes/pet")(app);
