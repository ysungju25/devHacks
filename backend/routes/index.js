const router = require('express').Router()
const apiRoutes = require('./api')
const path = require('path')
// API Routes any route starting with '/api'
router.use('/api', apiRoutes)
//router.use('/twilio', twilioRoutes)
//router.use('/mail', mailRoutes)
// =========== SEND REACT PRODUCTION BUILD ====================
/* Has Literally Never Worked [/?]
router.get('*', (req, res) => {
  console.log(`start serve`);
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})
*/
module.exports = router
