const router = require('express').Router()
const discord = require('../../services/discord/index')

router.post('/messages', (req, res, next) => {
  if (req.headers.authorization !== process.env.BUBBLE_API_KEY) {
    return res.status(401).send()
  }
  const { message, channel } = req.body
  if (!message || !channel) {
    return res.status(400).send({ error: 'message and channel are required in body' })
  }
  discord.channels.cache.get(channel).send(message)

  res.status(200).send()
})

module.exports = router
