const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'Hans, get the flammenwerfer') {
        // message.reply('At once!');
		message.channel.sendMessage('I AM GETTING THE FLAMMENWERFER :Flammenwerfer:');
    }

});

bot.login('NDQ2NzQ4NDY5OTMyMTk1ODQw.Dd9icg.lx1-FujLG2mEOsO5nfIErrz7UoA');