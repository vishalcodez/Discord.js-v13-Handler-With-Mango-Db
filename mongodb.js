const mongoose = require("mongoose");
const Logger = require("./lib/logger");
// connecting to mongodb
mongoose.connect(`${process.env.MONGODB_SRV}`, (err) => {
  err
    ? Logger.error(err)
    : Logger.info("connected to the database successfully");
});
/**
 * Coded By Vishal Codez
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */
