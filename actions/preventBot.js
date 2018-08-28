const preventBot = (ctx, next) => {
  const { new_chat_members:newMembers } = ctx.message;
  const { from:invitedUsed } = ctx.message;
  const { id:chatID } = ctx.chat;
  console.log('newMembers' + ctx.me);
  console.log(newMembers);
  console.log('----------');

  const bots = newMembers.filter( member => member.is_bot);

  console.log('bots');
  console.log(bots);
  console.log(bots[0]);
  console.log(bots[0].username)

  // ctx.kickChatMember(chatID, bots.id);
  // ctx.kickChatMember(invitedUsed.id);

  ctx.reply(`ഗ്രൂപ്പിലിട്ട @${bots[0].username} ഇനെ പുറത്താക്കിയിരിക്കുന്നു.
  അതോടൊപ്പം ഈ ബോട്ടിനെ ഗ്രൂപ്പിൽ ഇട്ട ${invitedUsed.first_name} നെയും പുറത്താക്കിയിരിക്കുന്നു
  `)

  return next();
}

module.exports = preventBot;
