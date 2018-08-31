const link = user => '@' + user.username;

const preventBot = (ctx, next) => {
  const { new_chat_members:newMembers } = ctx.message;
  const { from:invitedUsed } = ctx.message;
  const { id:chatID } = ctx.chat;
  console.log('newMembers' + ctx.me);
  console.log(newMembers);
  console.log('----------');

  const bots = newMembers.filter( member => member.is_bot);

  // console.log('bots');
  // console.log(bots);
  // console.log(bots[0]);
  // console.log(bots[0].username)

  // ctx.kickChatMember(chatID, bots.id);
  // ctx.kickChatMember(invitedUsed.id);

  for (const bot of bots) {
    ctx.telegram.kickChatMember(chatID, bot.id);
  }
  
  ctx.reply(`ഗ്രൂപ്പിൽ വന്ന ${bots.map(link).join(', ')} ബോട്ടിനെ പുറത്താക്കിയിരിക്കുന്നു.
  അതോടൊപ്പം ഈ ബോട്ടിനെ ഗ്രൂപ്പിൽ ചേർത്ത <b>${invitedUsed.first_name}</b> നെയും പുറത്താക്കിയിരിക്കുന്നു`)

  return next();
}

module.exports = preventBot;
