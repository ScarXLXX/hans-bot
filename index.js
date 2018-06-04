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
	if(message.content == 'K') {
		message.channel.send('Yeah, you see, K is a nice element. Really reactive. Unlike that response you just gave.');
	}
});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9jEw.kchXM7KDGrCamMTdwgzE0y5LB9k');