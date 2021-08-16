const { Schema, model } = require("mongoose");

const EmpolyeeSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  dateofBirth: { type: Date, required: true },
  age: { type: Number },
});

const EmployeeModel = model("employee", EmpolyeeSchema);

module.exports = EmployeeModel;
