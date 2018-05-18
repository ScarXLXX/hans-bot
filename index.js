const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'I am a capitalist') {
        message.channel.send('Hans, get the flammenwerfer! <:flammenwerfer:446404128730644490>');
    }
    if(message.content == 'The arabs are coming') {
        message.channel.send('Hans, get the flammenwerfer! <:flammenwerfer:446404128730644490>');
    }
    if(message.content == 'I am a furry') {
        message.channel.send('Hans, get the flammenwerfer! <:flammenwerfer:446404128730644490>');
    }
    if(message.content == 'I am gay') {
        message.channel.send('Hans, get the flammenwerfer! <:flammenwerfer:446404128730644490>');
    }
    if(message.content == 'Karl, halp!') {
        message.channel.send('Hans, get the flammenwerfer! <:flammenwerfer:446404128730644490>');
    }
    if(message.content == 'xD') {
        message.channel.send('<:crispyjoy:442653622510157835>');
    }

});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9jEw.kchXM7KDGrCamMTdwgzE0y5LB9k');