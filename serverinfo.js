const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    var embedserverinfo = new Discord.RichEmbed()
    .setTitle("")
    .setThumbnail(message.guild.iconURL)
    .setFooter('Since @ zyxs BOT- Official BOT', message.guild.avatarURL)
        .addField("Nume:", message.guild.name)
        .addField("ID:", message.guild.id)
        .addField("Level de verificare", message.guild.verificationLevel)
        .addField("Detinator:", message.guild.owner)
        .addField("Creat:", message.guild.createdAt)
        .addField("Membri & Boti:", message.guild.memberCount)
        .addField("Canale:", message.guild.channels.size)
        .addField("Regiunea:", message.guild.region)
        .setColor('#ffff00')
    message.channel.send(embedserverinfo);
}


module.exports.help = {
    name: "say"
}