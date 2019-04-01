const { Client } = require('discord.js');
const client = new Client({ disableEveryone: true });
const config = require('./Resources/config.json');

client.on('ready', () => {
    console.log('Bot now ready and online.');
});

client.on('message', msg => {
    if(!msg.content.startsWith(config.Prefix)) return;

    if(msg.content.startsWith('ping', 1)) {
        msg.channel.send('pong');
    }
});

client.login(config.Token);