const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    console.log("works");
}

const ms = require('ms');
exports.run = (bot, message, args) => {
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("Nu ai permisiunea necesara pentru comanda!");
  if (!bot.lockit) bot.lockit = []; 
  let time = args.join(' ');
  let validUnlocks = ['release', 'unlock'];
  if (!time) return message.reply('Trebuie sa specifi timp-ul! secunde(s), minute(m), ore(h)!');

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: null
    }).then(() => {
      message.channel.sendMessage('Lockdown terminat.');
      clearTimeout(bot.lockit[message.channel.id]);
      delete bot.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.sendMessage(`Lockdown pentru ${ms(ms(time), { long:true })}`).then(() => {

        bot.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: null
          }).then(message.channel.sendMessage('Lockdown terminat.')).catch(console.error);
          delete bot.lockit[message.channel.id];
        }, ms(time));

      }).catch(error => {
        console.log(error);
      });
    });
  }
};
exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};