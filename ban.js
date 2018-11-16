const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

          if (!message.member.hasPermission('ADMINISTRATOR'))
          return message.reply("Nu ai permisiunea necesara!");
        
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Te rugam sa mentionezi un membru");
        if(!member.bannable) 
          return message.reply("Nu pot bana acesta persoana!");
    
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Motiv neprecizat";
        
        await member.ban(reason)
          .catch(error => message.reply(`Scuze ${message.author} nu pot bana deoarece : ${error}`));
        message.reply(`${member.user.tag} a fost banat de ${message.author.tag} pentru: ${reason}`);
      }


exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};