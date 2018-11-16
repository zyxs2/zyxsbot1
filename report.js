const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let rUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rUser) return message.channel.send("Pentru a raporta pe cineva scrie: th!report @nume motiv");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Reporturi")
    .setColor("#15f153")
    .addField("Persoana raportata", `${rUser} with ID: ${rUser.id}`)
    .addField("Raportat de", `${message.author} with ID: ${message.author.id}`)
    .addField("Canalul", message.channel)
    .addField("Timpul", message.createdAt)
    .addField("Motivul", reason);

    let reportschannel  = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Nu pot gasi canalul de reporturi");


     message.delete().catch(O_o=>{});
     reportschannel.send(reportEmbed);
    return;
  }
module.exports.help = {
    name: "purge"
}