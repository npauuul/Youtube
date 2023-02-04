const { Client, Events, GatewayIntentBits, EmbedBuilder } = require('discord.js');
const { token, prefix } = require('./config/config.json');

const client = new Client({ intents: [
    GatewayIntentBits.Guilds, 
    GatewayIntentBits.MessageContent, 
    GatewayIntentBits.GuildMessages] });

client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.once(Events.MessageCreate, (message) => {
    if (message.content === prefix + "ping") {
        const embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle('Responde')
            .setDescription('Pong!')
        message.channel.send({ embeds: [embed]})
    }
})

client.login(token);




















