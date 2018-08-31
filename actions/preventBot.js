const link = user => '@' + user.username;

const preventBot = (ctx, next) => {
  const { new_chat_members:newMembers } = ctx.message;
  const { from:invitedUser } = ctx.message;
  const { id:chatID } = ctx.chat;

  const bots = newMembers.filter( member => member.is_bot);

  if (bots.length === 0) {
    return next();
  }

  ctx.kickChatMember(invitedUser.id);
  
  for (const bot of bots) {
    ctx.telegram.kickChatMember(chatID, bot.id);
  }

  ctx.replyWithMarkdown(`ഗ്രൂപ്പിൽ വന്ന ${bots.map(link).join(', ')} ബോട്ടിനെ പുറത്താക്കിയിരിക്കുന്നു. അതോടൊപ്പം ഈ ബോട്ടിനെ ഗ്രൂപ്പിൽ ചേർത്ത [${invitedUser.first_name} ${invitedUser.last_name}](tg://user?id=${invitedUser.id}) നെയും പുറത്താക്കിയിരിക്കുന്നു.`)
  return next();
}

module.exports = preventBot;
