const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Contact")
    .setColor("#15f153")
    .addField("Persoana", `${message.author}`)
    .addField("Are nevoie de ajutor din partea unui detinator!", `${message.author}`);

    let reportschannel  = message.guild.channels.find(`name`, "⏰-atentionari-⏰");
    if(!reportschannel) return message.channel.send("Nu pot gasi canalul de reporturi");


     message.delete().catch(O_o=>{});
     reportschannel.send(reportEmbed);
     message.channel.send("Un mesaj de contact a fost trimis cate detinatori!!")
    return;
  }
module.exports.help = {
    name: "purge"
}