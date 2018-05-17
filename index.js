const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'Hans, get the flammenwerfer') {
		message.channel.sendMessage('Hans, get the flammenwerfer :Flammenwerfer:');
    }

    if(message.content == 'The arabs are coming') {
        message.channel.sendMessage('Hans, get the flammenwerfer :Flammenwerfer:');
    }

    if(message.content == 'I am a furry') {
        message.channel.sendMessage('Hans, get the flammenwerfer :Flammenwerfer:');
    }

    if(message.content == 'I am gay') {
        message.channel.sendMessage('Hans, get the flammenwerfer :Flammenwerfer:');
    }
    
    if(message.content == 'Karl, halp!') {
        message.channel.sendMessage('Hans, get the flammenwerfer :Flammenwerfer:');
    }

});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9jEw.kchXM7KDGrCamMTdwgzE0y5LB9k');