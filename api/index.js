const express = require('express')
const cors = require('cors')
const app = express()

const tourRouter = require('./routes/tourRoutes')
const userRouter = require('./routes/userRoutes')

app.use(express.json())
app.use(cors())
// >> requestDater Middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString()
  next()
})
// *** Router
const apiV1Route = ''
app.use(`${apiV1Route}/tours`, tourRouter)
app.use(`${apiV1Route}/users`, userRouter)

app.get('/echo/:what', (req, res) => {
  res.json(req.params)
})

module.exports = {
  path: '/api',
  handler: app,
}
