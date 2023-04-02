const express = require('express');
const connectDb = require('./config/dbConnection');
const dotenv = require("dotenv").config();
const errorHandler = require('./middleware/errorhandler');

connectDb();

const app = express();

const adminPassword = "monmotdepasse";

const authenticateAdmin = (req, res, next) => {
  const { password } = req.body;
  if (!password || password !== adminPassword) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};


app.use(express.json());
app.use("/api/scores", require("./routes/contactRoutes"))

app.post("/admin", authenticateAdmin, (req, res) => {
  // Code pour la page d'administrationr
  res.status(200).send("Authentification réussie");
  console.log("reussi autho")
});

app.use(errorHandler);

app.listen(4000, () => {
  console.log("Server started to listen on port 4000");
});
