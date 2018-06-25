const Koa = require('koa')
const app = new Koa()

app.use(async ctx => {
  ctx.body = `${Date.now()} hello jenkins  你好 javascipt之禅`
})

app.listen(3000)
