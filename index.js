// Import bot configuration
const config = require('./config.json');
// Include Telegraf module
const Telegraf = require('telegraf');
// Create a bot using TOKEN provided as environment variable
const bot = new Telegraf(config.token);

// Actions
const preventBot = require('./actions/preventBot');
const welcomeMessage = require('./actions/welcomeMessage');
const byeMessage = require('./actions/byeMessage.js');
// bot.use(Telegraf.log())

// bot.on('text', welcomeMessage);

bot.on('new_chat_members', preventBot, welcomeMessage);
bot.on('left_chat_member', byeMessage);

bot.on(['sticker', 'photo'], (ctx) => {
  console.log(ctx.message)
  return ctx.reply('Cool! you put sticker or photo');
})

bot.on('text', (ctx) => {

  // Explicit usage
  // ctx.replyWithMarkdown(`Hello here you are${ctx.message.from.first_name} *${ctx.message.from.first_name}*`)
  ctx.replyWithMarkdown(`Hi [${ctx.message.from.first_name}](tg://user?id=${ctx.message.from.id})`)
})

bot.startPolling()
