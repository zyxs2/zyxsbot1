const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    if (!message.member.hasPermission('ADMINISTRATOR'))
    return message.reply("Nu ai permisiunea necesara!");

    let anunt2 = args.join(' ');
    if (!anunt2) return message.reply('Trebuie sa specifi mesajul!');
    let anunt = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setFooter('Anunt', message.guild.iconURL)
    .setColor("#ffff00")
    .addField("Anunt", args.join(" "))
    message.delete();


    message.channel.send(anunt);
}


module.exports.help = {
    name: "say"
}