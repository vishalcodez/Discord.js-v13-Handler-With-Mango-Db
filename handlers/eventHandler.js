// importing required modules
const fs = require("fs");

// defining event handler
const eventHandler = (client) => {
  const load_dir = (dir) => {
    const event_files = fs
      .readdirSync(`./events/${dir}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of event_files) {
      const event = require(`../events/${dir}/${file}`);
      const event_name = file.split(".")[0];
      client.on(event_name, event.bind(null, client));
    }
  };
  ["client", "guild"].forEach((e) => load_dir(e));
};

module.exports = eventHandler;
/**
 * @INFO
 * Coded By Vishal Codez
 * @INFO
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * @INFO
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */