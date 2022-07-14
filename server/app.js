const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3005;

const corsOptions = {
   origin: "*",
   optionSuccessStatus: 200
};

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res, next) => {
   res.send("LOL");
   next();
});

app.post("/", (req, res, next) => {
   res.status(200).json(req.body);
   next();
});

app.listen(PORT, () => {
   console.log(`Server running at http://localhost:${PORT}`);
});