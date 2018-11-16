const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NTEyNjY3MTczMDM5MjQzMjk0.Ds8yFw.UD-lHvE6usi35NNqr_E8n0roV0g'
let prefix = "d!"
var fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let xp = require("./xp.json");

var userData = JSON.parse(fs.readFileSync('Storage/userData.json','utf8'));

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'd!avatar') {
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }
});

const func = require('functions.js'); // If this returns an error for you (or you might be on ubuntu/linux), try '../functions.js
client.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

    // We also need to make sure it doesn't respond to bots
    if (sender.bot) return;
    if (!message.content.startsWith(prefix)) return; // We also want to make it so that if the message does not start with the prefix, return.

    // Command Handler - .trim() removes the blank spaces on both sides of the string
    try {
        let commandFile = require(`./commands/${cmd}.js`); // This will assign that filename to commandFile
        commandFile.run(bot, message, args, func); // This will add the functions, from the functions.js file into each commandFile.
    } catch(e) { // If an error occurs, this will run.
        console.log(e.message); // This logs the error message
    } finally { // This will run after the first two clear up
        console.log(`${message.author.username} a folosit comanda: ${cmd}`);
    }

});




client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
});

client.login('NTEyNjY3MTczMDM5MjQzMjk0.Ds8yFw.UD-lHvE6usi35NNqr_E8n0roV0g');

client.on(`message`, msg => {
const memelink = [""]


if (msg.content.startsWith(`d!memes`)) {
   msg.channel.send({file: memelink[Math.floor(Math.random() * memelin.length)]}).catch(err => {console.log(err)})
}
})

client.on('ready', () => {
  client.user.setGame(`${client.users.size} members || Online`, 'https://www.youtube.com')
})




client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'prefix') {
    // Send the user's avatar URL
    message.reply("Prefixul meu este : d!help ");
  }
});

client.on('message', message => {
  if(message.author.id === "415838622038622209")
  if (message.content === 'update') {
    // Send the user's avatar URL
    client.user.setGame(`${client.users.size} members || Updating`, 'https://www.youtube.com')
    message.channel.send(`Mesajul a fost schimbat la: ** ${client.users.size} members || Updating **`)
    message.delete().catch(O_o=>{});
  }
});

client.on('message', message => {
  // If the message is "what is my avatar"
  if(message.author.id === "415838622038622209")
  if (message.content === 'normal') {
    // Send the user's avatar URL
    client.user.setGame(`${client.users.size} members || Online`, 'https://www.youtube.com')
    message.channel.send(`Mesajul a fost schimbat la: ** ${client.users.size} members || Online **`)
    message.delete().catch(O_o=>{});
  }
});


client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === 'th!info') {
    // Send the user's avatar URL
    message.reply(`I have ** ${client.users.size} ** members and ** ${client.guilds.size} ** servers`);
  }
});




client.on('message', msg => {
  if (msg.content === 'th!creator') {
    msg.channel.send('**!:dollar:!** Creatorul meu este: zyxs **!:dollar:!**');
	}
});


bot.on('message', message => {

  // Variables - Variables make it easy to call things, since it requires less typing.
  let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
  let sender = message.author; // This variable takes the message, and finds who the author is.
  let args = message.content.slice(prefix.length).trim().split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
  let cmd = args.shift().toLowerCase(); // This takes away the first object in the cont array, then puts it in this.

  // Message Leveling System - Make sure you require quick.db
  db.updateValue(message.author.id + message.guild.id, 1).then(i => { // You pass it the key, which is authorID + guildID, then pass it an increase which is 1 in this instance.
      // It also returns the new updated object, which is what we will use.

      let messages; // Create an empty variable - These IF statements will run if the new amount of messages sent is the same as the number.
      if (i.value == 100) messages = 100; // Level 1
      else if (i.value == 250) messages = 250; // Level 2
      else if (i.value == 500) messages = 500; // Level 3 - You can set these to any number, and any amount of them.
      else if (i.value == 750) messages = 750;
      else if (i.value == 1000) messages = 1000;
      else if (i.value == 2500) messages = 2500;
      else if (i.value == 5000) messages = 5000;
      else if (i.value == 10000) messages = 10000;
      else if (i.value == 12500) messages = 12500;
      else if (i.value == 15000) messages = 15000;

      if (!isNaN(messages)) { 

          db.updateValue(`userLevel_${message.author.id + message.guild.id}`, 1).then(o => {
              message.channel.send(`Ai trimis ${messages} mesage, si ai dat level up! Esti acum level ${o.value}`) 
})
}
})
});

client.on('message', msg => {
if (msg.content.includes('fute')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('suka')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('kur')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('Drequ')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('drequ')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('p1zd4')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('muie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('p1zd4')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('muje')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('pu14')) {
        console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('pula')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
      if (msg.content.includes('pizda')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('coaie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
          if (msg.content.includes('pwla')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
          if (msg.content.includes('drq')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
          if (msg.content.includes('cacat')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}

        if (msg.content.includes('muist')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('ma-ta')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('Ma-ta')) {
  console.log('Limbaj sters');
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
  msg.delete()
}
        if (msg.content.includes('Pula')) {
 console.log('Limbaj sters');
 msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
 msg.delete()
}
        if (msg.content.includes('Pizda')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('fut')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('Fut')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('Muie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('MuieMuie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('muie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}
        if (msg.content.includes('muiemuie')) {
  console.log('Limbaj sters');
  msg.delete()
  msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
        }
  if (msg.content.includes('mue')) {
    console.log('Limbaj sters');
    msg.delete()
    msg.author.send(`:angry: Te rugam sa lasi limbajul!`);
}});

bot.on('message', message => {
  if (message.content.toLowerCase().startsWith('.stats')) {
      db.fetchObject(message.author.id + message.guild.id).then(i => { // This is the object of messages sent
      db.fetchObject(`userLevel_${message.author.id + message.guild.id}`).then(o => { // This is the object of their level
        const embed = new Discord.RichEmbed()
          .setDescription(`**Stats**`)
          .setColor(0xD4AF37) // You can set any HEX color if you put 0x before it.
          .addField('Mesaje -> ',(i.value + 1),true) // The TRUE makes the embed inline. Account Holder is the title, and message.author is the value
          .addField('Level -> ',o.value,true)
  
  
      // Now we need to send the message
      message.channel.send({embed})
      })
  })
}
});

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', '🚪-intrari-🚪');
  if (!channel) return;
  channel.send(`» Multumim ${member.user.tag} ca ai intrat pe server-ul [:computer:] TeamHackeri™! :smiley: 
  \n» Se fac giveaway-uri in fiecare zi. :tada: 
  \n» Speram sa te distrezi alaturi de noi. :clown:!`);
});




client.on('message', message => {
if (message.content.toLowerCase().startsWith('.permanent')) {
  message.delete()
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!member) return message.channel.send("**Nu uita sa mentionezi pe cine vrei sa il banezi!**");
  if(!member.kickable)  return message.channel.send("`**Cacanaru nu poate fii data fara!**`");
  if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru care ii dai Ban lui " + member.tag + " !`");
  member.ban(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban : ${error}**`));
  message.channel.send(`**${member.user.tag}** a fost banat de **${message.author.tag}** Motivul: ${reason} **Since kEEpBOT 2018**`);
}
})

client.on('message', message => {
  if (message.content.toLowerCase().startsWith('.mute')) {
    message.delete()
      let member = message.mentions.members.first();
      let reason = message.content.split(' ').slice(2).join(' ');
    if(!member) return message.channel.send("**Nu uita sa mentionezi pe cine vrei sa il banezi!**");
    if(!reason) return message.channel.send("`Ai uitat sa pui motivul pentru care ii dai Ban lui " + member.tag + " !`");
    member.mute(reason)
    .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Ban : ${error}**`));
    message.channel.send(`**${member.user.tag}** a fost banat de **${message.author.tag}** Motivul: ${reason} **Since kEEpBOT 2018**`);
  }
  })

client.on('message', message => {
if (message.content.toLowerCase().startsWith('.afara')) {
  message.delete()
    let member = message.mentions.members.first();
    let reason = message.content.split(' ').slice(2).join(' ');
  if(!member) return message.channel.send("**Ai uitat sa dai mention cui vrei sa-i dai kick!**");
  if(!member.kickable)  return message.reply("**Cacanaru nu poate fii data fara!**");
  if(!reason) return message.reply("**Ai uitat sa pui motivul pentru care ii dai Kick lui " + member.tag + " !**");
  member.kick(reason)
  .catch(error => message.channel.send(`**Scuze ${message.author.tag} dar nu am putut sa dau Kick din cauza unei erori : ${error}**`));
  message.channel.send(`**${member.user.tag}** a primit kick de catre **${message.author.tag}** Motivul: ${reason} **Since kEEpBOT 2018**`);
  message.delete()
}
})



client.on("ready", () => {
    console.log("On " + client.guilds.size + " guilds.")
    console.log("With " + client.users.size + " members.")
});
client.login(token)
