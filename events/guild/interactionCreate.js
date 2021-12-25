const Logger = require("../../lib/logger");
module.exports = async (client, interaction) => {
  if (interaction.isCommand()) {
    const command = client.slashCommands.get(interaction.commandName);

    try {
      command.execute(interaction, interaction.options, client);
    } catch (err) {
      Logger.error(err);
    }
  } else {
    return interaction.followUp({ content: "An error has occurred!" });
  }
};
/**
 * @INFO
 * Coded By Vishal Codez
 * @INFO
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * @INFO
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */