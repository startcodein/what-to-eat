
const welcomeMessage = (ctx, next) => {
  const { new_chat_members } = ctx.message;

console.log('------------------------------');
console.log(new_chat_members);

const newMembers = new_chat_members.filter( member => member.is_bot === false)
console.log(newMembers);
console.log('------------------------------');


  const {first_name:firstName, last_name:lastName } = ctx.message.new_chat_participant;
  ctx.replyWithMarkdown(`നമസ്കാരം ${firstName} ${lastName||''}, LCHF മലയാളം ഗ്രൂപ്പിലേക്ക് സ്വാഗതം 🙏
ടെലിഗ്രാമിൽ പുതിയ ആളാണെങ്കിൽ [ഭാഗം 1](http://keralagram.in/why-telegram/) [ഭാഗം 2](http://keralagram.in/why-you-should-use-telegram/) എന്നിവ സന്ദർശിക്കുക. ടെലിഗ്രാം ബന്ദപ്പെട്ടുള്ള പ്രശ്നങ്ങൾക്കുള്ള പരിഹാരം @keralagram ഗ്രൂപ്പിൽ നിന്നും ലഭിക്കുന്നതാണ്.

ഡയറ്റ് തുടങ്ങുന്നതിന്ന് മുന്നേ എന്താണ് LCHF അത് ശരീരത്തിൽ എങ്ങനെ പ്രവർത്തിക്കുന്നു എന്ന് പഠനം നടത്തുക അതിനായി 👉[വീഡിയോകൾ](https://www.youtube.com/channel/UCebgwCA5a0YeRbwGyLxD_uQ/videos)👈 കഴിയുന്നത്ര കാണൂക.

05 ഡിസംബർ 2018 ഇന്ന് കോഴിക്കോട് വെച്ച് നടക്കുന്ന മഹാ സമ്മേളനത്തിൽ പങ്കെടുക്കാൻ 👉[റജിസ്റ്റർ](https://goo.gl/forms/myiKTkfhH2oTS8st2)👈 ചെയ്യുക കൂടെ നൽകാൻ സാധിക്കുന്ന സംഖ്യ എഴുതാൻ മറക്കരുത്, ഒരാൾക്ക് ചുരുങ്ങിയത് 500 രൂപയാണ് പ്രവേശന ഫീസ്. വിദേശത്തുള്ളവർക്ക് സംഭാവന ചെയ്യാനുള്ള വിവരങ്ങൾക്ക് 👉[ലിങ്ക്](https://telegra.ph/Account-details-for-abroad-members-08-13)👈 സന്ദർശിക്കുക. *ഈ ഗ്രൂപ്പും അതിന്റെ പ്രവർത്തനങ്ങളും ലാഭേച്ഛയില്ലാതെ(non-profit) നടത്തുന്നതാണ് അതിനാൽ മഹാ സമ്മേളനത്തിന്ന് എല്ലാവരുടേയും സഹായ സഹകരണങ്ങൾ അത്യാവശ്യമാണ്*

പൊതുവായി വരാവുന്ന സംശയങ്ങളുടെയും ചോദ്യങ്ങളുടെയും ഉത്തരങ്ങളും ഈ 👉[ചാനൽ](https://t.me/lchfmalayalamchannel)👈 സന്ദർശിച്ച് ദൂരീകരിക്കാവുന്നതാണ്.
ഗ്രൂപ്പിൽ pin ചെയ്തിരിക്കുന്ന മെസേജ് മുതൽ താഴേക്കുള്ള ചർച്ചകൾ വീക്ഷിച്ചാൽ പല ചോദ്യങ്ങളും ഒഴിവാക്കാം👇
`).then(
  ({ message_id }) => {
    setTimeout(
      () => ctx.deleteMessage(message_id),
    60 * 1000)
    // console.log(message_id)
})

  return next();
}

module.exports = welcomeMessage;
