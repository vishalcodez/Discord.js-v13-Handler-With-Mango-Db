const winston = require("winston");
// Define severity levels.
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

// This method set the current severity based on
// the current NODE_ENV: show all the log levels
// if the server was run in development mode; otherwise,
// if it was run in production, show only warn and error messages.
const level = () => {
  const env = process.env.NODE_ENV || "development";
  const isDevelopment = env === "development";
  return isDevelopment ? "debug" : "warn";
};

// Define different colors for each level.
const colors = {
  error: "red",
  warn: "yellow",
  info: "cyan",
  debug: "white",
};

// Tell winston to add color
winston.addColors(colors);

// Define log format.
const format = winston.format.combine(
  // write error stack
  winston.format.errors({ stack: true }),
  // Add the message timestamp with the preferred format
  winston.format.timestamp({ format: "DD-MM-YYYY HH:mm:ss:ms" }),
  // log must be colored
  winston.format.colorize({ all: true }),
  // Defining the format of the message showing the level, the timestamp, and the message
  winston.format.printf(
    (info) =>
      `${info.level}  - ${info.timestamp} : ${info.message} ${info.stack || ""}`
  )
);

// Defining which transports the logger must use to print out messages.
const transports = [
  // Writing error messages in console
  new winston.transports.Console(),
  // Writing all the error messages in error.log file inside logs folder
  new winston.transports.File({
    filename: "logs/error.log",
    level: "error",
  }),
  // Writing all the logs in all.log file inside logs folder
  new winston.transports.File({ filename: "logs/all.log" }),
];

// Create the logger instance that has to be exported
// and used to log messages.
const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
});

module.exports = Logger;
/**
 * @INFO
 * Coded By Vishal Codez
 * @INFO
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * @INFO
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */