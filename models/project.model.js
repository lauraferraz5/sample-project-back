const { Schema, model } = require("mongoose");

const PorjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  customerContact: {
    name: { type: String },
    email: { type: String },
    phone: { type: String },
  },
  deadline: { type: Number },
});

const ProjectModel = model("project", PorjectSchema);

module.exports = ProjectModel;
