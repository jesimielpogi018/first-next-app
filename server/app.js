const express = require("express");
const cors = require("cors");
const app = express();

// eslint-disable-next-line no-unused-vars
const dot_env = require("dotenv").config();

// importing sub-endpoints
const envRoute = require("./env");

const corsOptions = {
   origin: "*",
   optionSuccessStatus: 200
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

app.use("/env", envRoute);

app.get("/", (req, res, next) => {
   res.status(200).send("Hello World");
   next();
});

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});