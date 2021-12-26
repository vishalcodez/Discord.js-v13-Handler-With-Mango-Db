// importing all the required libraries
const { Client, Intents, Collection } = require("discord.js");
// setting env variables
require("dotenv").config();
// connecting to mongodb
require("./mongodb");

// setup discord intents
const myIntents = new Intents();
myIntents.add(
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
  Intents.FLAGS.GUILD_MESSAGE_REACTIONS
);
// setup client
const client = new Client({
  intents: myIntents,
  partials: ["MESSAGE", "REACTION"],
});

// custom collections
client.events = new Collection();
client.slashCommands = new Collection();

// running events
["eventHandler", "slashCommandHandler"].forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});

// logging in with discord with discord token
client.login(process.env.DISCORD_TOKEN);

/**
 * Coded By Vishal Codez
 * Please Don't Forget To Give Credits To Vishal Codez if You Are Using This
 * Please Mention Vishal Codez / In Code Streakers, When Using This Code!
 */
