const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "ping",
  description: "check bot ping",

  async execute(interaction) {
    const embed = new MessageEmbed()  
      .setTitle(`${interaction.client.user.username} Ping`)
      .setDescription(`Pong ${Math.round(interaction.client.user.client.ws.ping)} Ms`)
      .setColor("RANDOM")
    interaction.reply({ embeds: [embed] });
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