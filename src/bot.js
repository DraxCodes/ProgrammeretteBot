const Commando = require('discord.js-commando');
const sqlite = require('sqlite');
const path = require('path');
const { Token, Prefix } = require('./Resources/config.json');


const client = new Commando.Client({
    owner: '246249703044284426',
    commandPrefix: Prefix,
});

client.registry
    // Registers your custom command groups
    .registerGroups([
        ['misc', 'Misc commands'],
    ])
    .registerDefaults()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.setProvider(
    sqlite.open(path.join(__dirname, 'settings.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.on('ready', () => {
    console.log('Bot now ready and online.');
});

client.login(Token);