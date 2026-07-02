const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");


const employeeRoutes = require("./routes/employeeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Employee Management API");
});

app.use("/api/employees", employeeRoutes);
app.use("/api/auth", authRoutes);

// Error middleware should be registered after all routes
app.use(errorHandler);

module.exports = app;

