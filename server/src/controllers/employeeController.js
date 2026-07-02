const Employee = require("../model/Employee");
const asyncHandler = require("../utils/asyncHandler");

// CREATE EMPLOYEE
const createEmployee = asyncHandler(async (req, res) => {
  const employee = await Employee.create(req.body);

  res.status(201).json({
    success: true,
    data: employee
  });
});

// GET ALL EMPLOYEE
const getEmployees = async (req, res) => {
  try {

    const employees = await Employee.find();

    res.status(200).json({
      success: true,
      data: employees,
      count: employees.length
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

// GET EMPLOYEE BY ID
const getEmployeeById = async (req, res) => {
  try {

    const employee = await Employee.findById(req.params.id); 4

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found!"
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  };
};

// UPDATE EMPLOYEE BY ID
const updateEmployee = async (req, res) => {
  try {

    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true // comment this and test this line
      }
    );

    if (!employee) {
      return req.status(404).json({
        success: false,
        message: "Employe Not Found!"
      });
    }

    res.status(200).json({
      success: true,
      data: employee
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  };
};

const deleteEmployee = async (req, res) => {

  try {

    const employee = await Employee.findByIdAndDelete(req.params.id);

    if (!employee) {
      return res.status(404).json({
        success: false,
        message: "Employee Not Found!"
      })
    }

    res.status(200).json({
      success: true,
      message: "Employee Deleted Successfully."
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  };
};


module.exports = {
  createEmployee,
  getEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};