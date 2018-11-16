const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

          if (!message.member.hasPermission('ADMINISTRATOR'))
          return message.reply("Nu ai permisiunea necesara");
        
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("Te rugam sa mentionezi un membru");
        if(!member.kickable) 
          return message.reply("Nu pot da afara aceasta persoana");
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Motiv neprecizat";
        
        await member.kick(reason)
        .catch(error => message.reply(`Scuze ${message.author} nu pot da kick deoarece : ${error}`));
        channel.message.send(`${member.user.tag} a fost dat afara de ${message.author.tag} pentru: ${reason}`);
      }


exports.help = {
  name: 'lockdown',
  description: 'This will lock a channel down for the set duration, be it in hours, minutes or seconds.',
  usage: 'lockdown <duration>'
};