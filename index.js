const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'I am a capitalist', 'The arabs are coming', 'I am a furry', 'I am gay', 'Karl, halp!') {
		message.channel.send('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }
});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9jEw.kchXM7KDGrCamMTdwgzE0y5LB9k');