const Telegraf = require('telegraf')
const { Markup } = Telegraf
const bot = new Telegraf('671427209:AAHXiSMLorX1baVKssIAEm0kQjaM7mYcohw');

// app.use(Telegraf.log())
//
// Start command
bot.command('start', ({ reply }) => {
  reply('Welcome, nice to meet you! I can sell you various products. Just ask.');
});
//
// bot.use((ctx) => {
//   console.log(ctx.message)
//   console.log('============================')
//   // console.log(ctx.chat)
//   // console.log('============================')
//   // console.log(ctx.from)
//   // console.log('============================')
//   // console.log(ctx.match)
// })

bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))
bot.hashtag('kooy', (ctx) => ctx.reply('Your number is'))

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.startPolling()
