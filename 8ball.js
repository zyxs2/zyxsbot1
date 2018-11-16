const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {


    if(!args[1]) return message.reply("Intreaba o intrebare completa!");
    let replies = ["Da", "Nu", "Poate"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor("#ffff00")
    .addField("Intrebarea", question)
    .addField("Raspuns", replies[result]);

    message.channel.send(ballembed);
}


module.exports.help = {
    name: "say"
}