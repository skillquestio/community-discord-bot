const { Request, Response, NextFunction } = require('express')

module.exports = (req, res, next) => {
  const { body } = res
  if (body) {
    return res.send(body)
  } else {
    return res.send(res.body)
  }
}
