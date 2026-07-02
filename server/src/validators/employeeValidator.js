const { body } = require("express-validator");

const createEmployeeValidator = [

	body("name")
		.trim()
		.notEmpty()
		.withMessage("Name is required"),

	body("email")
		.isEmail()
		.withMessage("Invalid email"),

	body("phone")
		.isLength({ min: 10, max: 10 })
		.withMessage("Phone must be 10 digits"),

	body("salary")
		.isNumeric()
		.withMessage("Salary must be a number")
		.isFloat({ min: 0 })
		.withMessage("Salary cannot be negative")

];

module.exports = {
	createEmployeeValidator
};