const router = require("express").Router();

const Employee = require("../models/employee.model");

router.post("/register", async (req, res) => {
  try {
    const result = await Employee.create(req.body);

    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find();

    return res.status(200).json(employees);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.get("/employee/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const employeeInfo = await Employee.findOne({
      _id: id,
    });

    if (employeeInfo) {
      return res.status(200).json(employeeInfo);
    }
    return res.status(404).json({ msg: "Employee not found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updateInfo = await Employee.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });

    if (updateInfo) {
      return res.status(200).json(updateInfo);
    }
    return res.status(404).json({ msg: "Employee not found" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const employeeInfo = await Employee.deleteOne({
      _id: id,
    });

    return res.status(200).json({});
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: err });
  }
});

module.exports = router;
