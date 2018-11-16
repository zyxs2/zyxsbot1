
exports.run = (bot, message, args, func) => {

    if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Trebuie sa am administrator sa pot da grade");
    if(!args.join(" ")) return message.channel.send(".autorole <@ROLE>");
        message.channel.send('AutoRole setat pe : ' + i.text + '`');


}