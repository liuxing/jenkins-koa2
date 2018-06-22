const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = `${Date.now()} hello jenkins`
})

app.listen(3000)