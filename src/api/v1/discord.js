const router = require('express').Router()

router.post('/messages', (req, res, next) => {
  if (req.headers.authorization !== process.env.BUBBLE_API_KEY) {
    return res.status(401).send()
  }
  const { message, channel } = req.body
  if (!message || !channel) {
    return res.status(400).send({ error: 'message and channel are required in body' })
  }
  res.status(200).send({ message: 'hi' })
})

module.exports = router
