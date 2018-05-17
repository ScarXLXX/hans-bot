const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {

    if(message.content == 'Hans, get the flammenwerfer') {
        // message.reply('At once!');
		message.channel.sendMessage('I AM GETTING THE FLAMMENWERFER :Flammenwerfer:');
    }

});

bot.login('NDQ2NzA3MDM1MDUzMDk2OTgx.Dd9UwQ.jhzfEr5Bh52hdgZ7Go6GYm3elGI');