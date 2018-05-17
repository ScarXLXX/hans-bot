const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'I am a capitalist') {
		message.channel.sendMessage('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }

    if(message.content == 'The arabs are coming') {
        message.channel.sendMessage('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }

    if(message.content == 'I am a furry') {
        message.channel.sendMessage('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }

    if(message.content == 'I am gay') {
        message.channel.sendMessage('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }
    
    if(message.content == 'Karl, halp!') {
        message.channel.sendMessage('Hans, get the flammenwerfer <:flammenwerfer:446752673757265930>');
    }

});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9jEw.kchXM7KDGrCamMTdwgzE0y5LB9k');