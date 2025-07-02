const express = require("express");
const app = express();
const connect = require("./helpers/dbConnection");
const authRoutes = require("./routes/authRoutes");
const mainRoutes = require("./routes/mainRoutes");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api/protected", mainRoutes);

const PORT = 3000;

app.listen(PORT, () => console.log(`Backend server listening on port ${PORT}`));
