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

// Welcome message
const welcomeMessage = (ctx, firstName='', lastName='' ) => {
  ctx.reply(`Welcome ${firstName} ${lastName} to our group`);
}
bot.on('new_chat_members', ctx => {
  console.log('============================')
  console.log(ctx.message);
  console.log('============================')
  welcomeMessage(
    ctx,
    ctx.message.new_chat_participant.first_name,
    ctx.message.new_chat_participant.last_name
  )

  ctx.deleteMessage(ctx.message_id);
});
// Good bye message
const byeMessage = (ctx, firstName='', lastName='' ) => {
  ctx.reply(`Good bye. ${firstName} ${lastName}. All the best`);
}
bot.on('left_chat_member', (ctx) => {
  console.log(ctx.message);
  byeMessage(
    ctx,
    ctx.message.left_chat_participant.first_name,
    ctx.message.left_chat_participant.last_name
  )
});


// // Handle message update
// bot.on('message', (ctx) => {
//   return ctx.reply('Hello')
// })
// Handle sticker or photo update
bot.on(['sticker', 'photo'], (ctx) => {
  console.log(ctx.message)
  return ctx.reply('Cool! you put sticker or photo');
})

bot.startPolling()
