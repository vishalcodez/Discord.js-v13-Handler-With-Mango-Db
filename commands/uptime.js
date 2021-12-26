const { MessageEmbed } = require('discord.js');
const moment = require('moment');
module.exports = {
  name: "uptime",
  description: "bot uptime",
  
  execute(interaction) {
    const d = moment.duration(interaction.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} Day` : `${d.days()} Days`;
    const hours = (d.hours() == 1) ? `${d.hours()} Hour` : `${d.hours()} Hours`;
    const minutes = (d.minutes() == 1) ? `${d.minutes()} Minute` : `${d.minutes()} Minutes`;
    const seconds = (d.seconds() == 1) ? `${d.seconds()} Second` : `${d.seconds()} Seconds`;
    const date = moment().subtract(d, 'ms').format('dddd, MMMM Do YYYY');
    const embed = new MessageEmbed()
    .setTitle(`${interaction.client.user.username} Uptime`)
      .setDescription(`\`\`\`prolog\n${days}, ${hours}, ${minutes}, and ${seconds}\`\`\``)
      .setColor("RANDOM")
    interaction.reply({ embeds: [embed] });
  }
};
/**
 * Coded By Vishal Codez
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */
