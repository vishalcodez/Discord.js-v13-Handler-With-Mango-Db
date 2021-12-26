const { Schema, model } = require("mongoose");

const demoSchema = new Schema({
  name: String,
});

const Demo = model("Demo", demoSchema);

module.exports = Demo;
/**
 * Coded By Vishal Codez
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */
