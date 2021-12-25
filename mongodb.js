const mongoose = require("mongoose");
const Logger = require("./lib/logger");
// connecting to mongodb
mongoose.connect(`${process.env.MONGODB_SRV}`, (err) => {
  err
    ? Logger.error(err)
    : Logger.info("connected to the database successfully");
});
/**
 * @INFO
 * Coded By Vishal Codez
 * @INFO
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * @INFO
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */