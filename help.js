const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let reportEmbed = new Discord.RichEmbed()
    .setThumbnail(message.guild.iconURL)
    .setDescription("Help")
    .setColor("#15f153")
    .addField("Acesta este botul zyxs BOT! Iar comenzile sunt urmatoarele!", `${message.author}`)
    .addField("Comenzile sunt: D!report\nD!anunt[Administrator]\nD!contact\nD!8ball\nD!serverinfo\nD!say[Administrator]\nD!kick , D!ban[Administrator]\nD!lockdown [Administrator]!",message.createdAt);

     message.delete().catch(O_o=>{});
     message.channel.send(reportEmbed);
    return;
  }
module.exports.help = {
    name: "purge"
}