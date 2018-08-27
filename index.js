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



// Import replies file
const replies = require('./replies')
 
// Extract reply_to_message.message_id field from Telegraf ctx
// If not present, return null
const getReplyToMessageId = ctx => (
    ctx.message.reply_to_message ? ctx.message.reply_to_message.message_id : null
)
 
// This method will send the reply, based on the answer type
// (text / gif / sticker). See replies.js for objects structure.
const sendReply = (ctx, reply) => {
  console.log(reply);
  
  // reply method will be the Telegraf method for sending the reply
  let replyMethod = {
    text: ctx.reply,
    gif: ctx.replyWithDocument,
    sticker: ctx.replyWithSticker
  }[reply.type]
  
  replyMethod(reply.value, {
    // this will make the bot reply to the original message instead of just sending it
    reply_to_message_id: getReplyToMessageId(ctx) 
  })
}

// /list command - will send all the triggers defined in replies.js.
bot.command('list', ctx => {
    ctx.reply(
        'Available triggers:\n\n' +
        Object.keys(replies).join('\n')
    )
})

// Listen on every text message, if message.text is one of the trigger,
// send the reply
bot.on('text', ctx => {
  let cmd = ctx.message.text.toLowerCase()
  // console.log(cmd);
  // console.log(replies);
  
  
  if (cmd in replies)
    sendReply(ctx, replies[cmd])
})

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

bot.startPolling()
