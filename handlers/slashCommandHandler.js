// importing required modules
const fs = require("fs");

// importing logger
const Logger = require("../lib/logger");

// defining slash command handler
const slashCommandHandler = async (client) => {
  const arrayOfSlashCommand = [];
  const command_files = fs
    .readdirSync(`./commands/`)
    .filter((file) => file.endsWith(".js"));
  for (const file of command_files) {
    const command = require(`../commands/${file}`);
    if (command.name) {
      client.slashCommands.set(command.name, command);
      arrayOfSlashCommand.push(command);
    } else {
      continue;
    }

    client.on("ready", async () => {
      try {
        Logger.debug("Refreshing slash commands...");
        await client.application.commands.set(arrayOfSlashCommand);
        Logger.debug("Successfully reloaded slash commands.");
      } catch (error) {
        Logger.error(error);
      }
    });
  }
};

module.exports = slashCommandHandler;
/**
 * Coded By Vishal Codez
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */
