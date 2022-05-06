module.exports = (discord) => {
  // docs for what you can do with this discord object here: https://discord.js.org/#/docs/discord.js/stable/class/Client
  discord.on('messageCreate', (msg) => {
    console.log('got a message')
  })
}
