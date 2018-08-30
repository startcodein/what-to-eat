// Import bot configuration
const config = require('./config.json');
// Include Telegraf module
const Telegraf = require('telegraf');
// Create a bot using TOKEN provided as environment variable
const bot = new Telegraf(config.token);

// Actions
const preventBot = require('./actions/preventBot');
bot.use(Telegraf.log())

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

/* bot.use((ctx, next) => {
  const start = new Date()
  return next(ctx).then(() => {
    const ms = new Date() - start
    console.log('Response time %sms', ms)
  })
})
*/

bot.on('text', (ctx, next) => {
  // console.log(ctx.me);
  // console.log(ctx.from);


  // ctx.replyWithMarkdown(`നമസ്കാരം {name}, LCHF മലയാളം ഗ്രൂപ്പിലേക്ക് സ്വാഗതം 🙏
  // ടെലിഗ്രാമിൽ പുതിയ ആളാണെങ്കിൽ [ഭാഗം 1](http://keralagram.in/why-telegram/) [ഭാഗം 2](http://keralagram.in/why-you-should-use-telegram/) എന്നിവ സന്ദർശിക്കുക. ടെലിഗ്രാം ബന്ദപ്പെട്ടുള്ള പ്രശ്നങ്ങൾക്കുള്ള പരിഹാരം @keralagram ഗ്രൂപ്പിൽ നിന്നും ലഭിക്കുന്നതാണ്.
  
  // ഡയറ്റ് തുടങ്ങുന്നതിന്ന് മുന്നേ എന്താണ് LCHF അത് ശരീരത്തിൽ എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് പഠനം നടത്തുക അതിനായി 👉[വീഡിയോകൾ](https://www.youtube.com/channel/UCebgwCA5a0YeRbwGyLxD_uQ/videos)👈 കഴിയുന്നത്ര കാണൂക.
  
  // 05 ഡിസംബർ 2018 ഇന്ന് കോഴിക്കോട് വെച്ച് നടക്കുന്ന മഹാ സമ്മേളനത്തിൽ പങ്കെടുക്കാൻ 👉[റജിസ്റ്റർ](https://goo.gl/forms/myiKTkfhH2oTS8st2)👈 ചെയ്യുക കൂടെ നൽകാൻ സാധിക്കുന്ന സംഖ്യ എഴുതാൻ മറക്കരുത്, ഒരാൾക്ക് ചുരുങ്ങിയത് 500 രൂപയാണ് പ്രവേശന ഫീസ്. വിദേശത്തുള്ളവർക്ക് സംഭാവന ചെയ്യാനുള്ള വിവരങ്ങൾക്ക് 👉[ലിങ്ക്](https://telegra.ph/Account-details-for-abroad-members-08-13)👈 സന്ദർശിക്കുക. *ഈ ഗ്രൂപ്പും അതിന്റെ പ്രവർത്തനങ്ങളും ലാഭേച്ഛയില്ലാതെ(non-profit) നടത്തുന്നതാണ് അതിനാൽ മഹാ സമ്മേളനത്തിന്ന് എല്ലാവരുടേയും സഹായ സഹകരണങ്ങൾ അത്യാവശ്യമാണ്*
  
  // പൊതുവായി വരാവുന്ന സംശയങ്ങളുടെയും ചോദ്യങ്ങളുടെയും ഉത്തരങ്ങളും ഈ 👉[ചാനൽ](https://t.me/lchfmalayalamchannel)👈 സന്ദർശിച്ച് ദൂരീകരിക്കാവുന്നതാണ്.
  // ഗ്രൂപ്പിൽ pin ചെയ്തിരിക്കുന്ന മെസേജ് മുതൽ താഴേക്കുള്ള ചർച്ചകൾ വീക്ഷിച്ചാൽ പല ചോദ്യങ്ങളും ഒഴിവാക്കാം👇
  // `)


  ctx.reply(`Welcome ${ctx.message.from.first_name} to our group`)
    .then(
      () => {
        ctx.deleteMessage(ctx.message_id)
        console.log('----------');
        console.log(ctx.chat.id);
        
      }
      // (ctx) => {
      //   // console.log(chat);
      //   console.log(ctx.message_id);
      //   // console.log('========');
      //   // console.log(chat.id, message_id);
        
      //   // () => ctx.deleteMessage(chat.id, message_id)
      // }
    );
  // return next();
})

// bot.on('text', ( ctx ) => ctx.reply(`Welcome ${ctx.message.from.first_name} to our group`))

bot.on('new_chat_members', preventBot);

// Welcome message
const welcomeMessage = (ctx, firstName='', lastName='' ) => {
  ctx.reply(`Welcome ${firstName} ${lastName} to our group`);
}
bot.on('new_chat_members', ctx => {
  console.log('============================')
  // console.log(ctx.message);
  console.log('============================')
  welcomeMessage(
    ctx,
    ctx.message.new_chat_participant.first_name,
    ctx.message.new_chat_participant.last_name
  )

  // ctx.deleteMessage(ctx.message_id);
  // ctx.deleteMessage()
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
  // ctx.deleteMessage()
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

bot.command('oldschool', (ctx) => ctx.reply('Hello'))
bot.command('modern', ({ reply }) => reply('Yo'))
bot.command('hipster', Telegraf.reply('λ'))

bot.startPolling()
