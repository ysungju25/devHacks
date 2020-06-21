const router = require('express').Router()
//const usersRoutes = require('./users')
//const responsesRoutes = require('./responses');
const twilioRoutes = require('./twilio')
const emailRoutes = require('./email')

// '/api/user' for all routes involving User Accounts
//router.use('/user', usersRoutes)

// '/api/response' for all routes involving User Accounts
//router.use('/response', responsesRoutes)

// '/api/response' for all routes involving User Accounts
router.use('/twilio', twilioRoutes)

// '/api/response' for all routes involving User Accounts
router.use('/email', emailRoutes)

// '/api' for any ongoing testing the root of /api route GOOD place for mounting middleware in router.use
router.get('/', (req, res) => {
  res.status(200).send('Succesful get to /api route')
})

module.exports = router
