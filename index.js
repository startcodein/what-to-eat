// Import bot configuration
const config = require('./config.json');
// Include Telegraf module
const Telegraf = require('telegraf');
// Create a bot using TOKEN provided as environment variable
const bot = new Telegraf(config.token);


// bot.use(Telegraf.log())

// // Start command
// bot.command('start', ({ reply }) => {
//   reply('Welcome, nice to meet you! I can sell you various products. Just ask.');
// });

// bot.use((ctx) => {
//   console.log(ctx.message)
//   console.log('============================')
//   console.log(ctx.chat)
//   console.log('============================')
//   console.log(ctx.from)
//   console.log('============================')
//   console.log(ctx.match)
// })

// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.hears(/buy/i, (ctx) => ctx.reply('Buy-buy'))

// bot.command('oldschool', (ctx) => ctx.reply('Hello'))
// bot.command('modern', ({ reply }) => reply('Yo'))
// bot.command('hipster', Telegraf.reply('λ'))


bot.on('left_chat_member', ctx => {
  console.log(ctx.message);
  ctx.reply('Oral poyi');
});

bot.on('new_chat_members', ctx => {
  console.log('============================')
  console.log(ctx.message);
  console.log('============================')
  ctx.reply('oral chernnu');
});

// Handle message update
bot.on('message', (ctx) => {
  return ctx.reply('Hello')
})

// Handle sticker or photo update
bot.on(['sticker', 'photo'], (ctx) => {
  console.log(ctx.message)
  return ctx.reply('Cool!')
})

bot.startPolling()
