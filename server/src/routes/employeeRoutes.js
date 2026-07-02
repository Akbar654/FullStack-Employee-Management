const express = require("express");
const router = express.Router();

const {
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee,
} = require("../controllers/employeeController");

const {
    createEmployee
} = require("../controllers/employeeController");

const {
    createEmployeeValidator
} = require("../validators/employeeValidator");

const validate = require("../middleware/validate");

const auth = require("../middleware/auth");
const { register } = require("../controllers/authController");

router.post(
    "/",
    createEmployeeValidator,
    validate,
    createEmployee,
    register
);
router.get("/", getEmployees);
router.get(
    "/profile",
    auth,
);
router.get("/update/:id", getEmployeeById);
router.put("/update/:id", updateEmployee);
router.delete("/delete/:id", deleteEmployee);


module.exports = router;