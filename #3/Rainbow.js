const Comandos = require('../../util/estructuras/Comandos');

module.exports = class Rainbow extends Comandos {
  constructor() {
    super('rainbow', 'Diver', ["rbw"]);
  }

  run(client, message, args) {
    let rol = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[0])
    if(!rol) return message.reply(`No mencionaste o introduciste el rol`)
    let colores = ["RED", "GREEN", "#bbfaba", "ORANGE"]

    setInterval(async() => {
        let color = colores[Math.floor(Math.random() * colores.length)]
        rol.setColor(color)
    }, 1000)
    message.channel.send(`**RAINBOW:** <@&${rol.id}>`)
  }
}