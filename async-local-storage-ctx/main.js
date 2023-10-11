const Router = require('express')
const {AsyncLocalStorage} = require('node:async_hooks')

const router = new Router()
const als = new AsyncLocalStorage()

let inc = 1;
router.use((req, res, next) => {
  console.log('inc: ', inc)
  als.run({
    requestId: inc++,
    logger: (m) => console.log(m)
  }, () => {
    next()
  })
})

router.get('/', (req, res) => {
  const {requestId: id, logger} = als.getStore()
  logger(`inhandler: ${id}`)
  res.send('hi')
})

router.listen("7777", () => {
  console.log('listening on 7777')
})
