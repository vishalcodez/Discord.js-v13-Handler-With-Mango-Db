// importing logger
const Logger = require("../../lib/logger");

// defining ready event function
const readyEvent = (client) => {
  Logger.info(
    `Logged in as ${client.user.username}. Ready on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users`
  );

  client.user.setActivity(
    `${client.guilds.cache.size} Servers`,
    {
      type: "WATCHING",
    }
  );
};

module.exports = readyEvent;
/**
 * @INFO
 * Coded By Vishal Codez
 * @INFO
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * @INFO
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */