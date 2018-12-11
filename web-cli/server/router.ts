import * as Router from 'koa-router'
import userCtl from './controller/user'

const router = new Router({prefix: '/api'})

router.get('/user', userCtl.find)
router.get('/user/:id', userCtl.findById)
router.delete('/user', userCtl.deleteById)
router.put('/user', userCtl.modify)
router.post('/user', userCtl.add)

router.get('/qa', async (ctx, next) => {
  ctx.body = 'Hello World2222!'
})
router.get('/qa/:id', async (ctx, next) => {
  ctx.body = 'Hello World2222!'
})
router.delete('/qa', async (ctx, next) => {
  ctx.body = 'Hello World2222!'
})
router.put('/qa/:id', async (ctx, next) => {
  ctx.body = 'Hello World2222!'
})
router.post('/qa', async (ctx, next) => {
  ctx.body = 'Hello World2222!'
})

export default router
