const Koa = require('koa')
const Bodyparser = require('koa-bodyparser')
const aes = require('wx-ding-aes')


const app = new Koa()
const bodyparser = Bodyparser()
app.use(bodyparser)

app.use((ctx, next) => {
  let url = ctx.url

  if (ctx.query) {
    console.log(ctx.query, 'query===')
  } else {
    console.log(ctx.request.body,'ctx.request.body===')
  }
})

 // 必须放在在所有app.use()之后
const httpServer = app.listen(3000, () => {
  console.log('listing 3000')
})
