// Good bye message
const byeMessage = (ctx, next) => {
  const {first_name:firstName, last_name:lastName } = ctx.message.left_chat_participant;
  ctx.reply(`Good bye ${firstName} ${lastName||''}`)
  .then(
    ctx.deleteMessage()
  )
}

module.exports = byeMessage;