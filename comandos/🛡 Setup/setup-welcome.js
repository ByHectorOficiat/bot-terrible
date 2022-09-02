const Discord = require('discord.js');
const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
module.exports = {
    name: "setup-welcome",
    aliases: ["setup-welcomes", "setup-bienvenido", "setup-bienvenidas"],
    desc: "Sirve para crear un sistema de bienvenidas",
    permisos: ["Administrator"],
    run: async (client, message, args, prefix) => {
        const canalBienvenidas = message.guild.channels.cache.get(args[0]) || message.mentions.channels.filter(c => c.guild.id == message.guild.id).first()
        if(!canalBienvenidas) return message.reply("❌ **No se ha encontrado el canal especificado!**");

        let imagenBienvenida = args[1];
        if(!imagenBienvenida) return message.reply("❌ **Tienes que especificar una imagen de bienvenida!**");

        let mensajeBienvenida = args.slice(2).join(" ")
        if(!mensajeBienvenida) return message.reply("❌ **Tienes que especificar un mensaje de bienvenida!**");

        await setupSchema.findOneAndUpdate({guildID: message.guild.id}, {
            bienvenidas: {
                canal: canalBienvenidas.id,
                mensaje: mensajeBienvenida,
                fondo: imagenBienvenida,
            }
        })

        return message.reply({embeds: [
            new Discord.EmbedBuilder().setTitle(`✅ Sistema de Bienvenidas activado!`)
            .setDescription(`**Canal de Bienvenidas:** ${canalBienvenidas}\n\n**Mensaje de Bienvenidas:** \`${mensajeBienvenida}\`\n\n**Imagen de Bienvenida:** [\`Haz Clic\`](${imagenBienvenida})`)
            .setColor('Green')
        ]})
    }
}

/*
╔════════════════════════════════════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 y retocado por ByHectorOficiat|| - ||   ║
╚══════════════════════════════════════════════════════════════════════════════════╝
*/
