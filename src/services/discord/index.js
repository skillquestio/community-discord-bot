const { Client, Intents } = require('discord.js')
const discord = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

const skills = require('./skills')

skills.forEach((skill) => skill(discord))

discord.once('ready', () => {
  console.log('BOT is ONLINE')
})

discord.login(process.env.DISCORD_TOKEN)
