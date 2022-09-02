const setupSchema = require(`${process.cwd()}/modelos/setups.js`);
const Discord = require('discord.js');
const { Welcome } = require('niby-welcomes')

module.exports = client => {
    client.on("guildMemberAdd", async member => {
        try {

            const {guild} = member;

            let setupData = await setupSchema.findOne({guildID: guild.id});
            if(!setupData) return;

            let canalBienvenidas = guild.channels.cache.get(setupData?.bienvenidas?.canal);
            if(!canalBienvenidas) return;
            
            let imagenBienvenida = await new Welcome()
        .setWelcomeMessage("¡BIENVENIDO@!", {color: "#7CB3DB"})
            .setUsername(member.user.tag, {color: "#343434"})
            .setMemberCount(`Eres el número #${member.guild.memberCount}`, {color: "#00192B"})
            .setAvatar(member.user.displayAvatarURL({size: 512, extension: "png"}))
            .setBackgroundUrl(setupData?.bienvenidas?.fondo, {opacity: 0.8})
            .setBorder(true, {color: "#ffffff", size: 15})
            .setStyle("koya")
            .build();


            let attachment = new Discord.AttachmentBuilder(imagenBienvenida, {name: `bienvenida ${member.user.tag}.png`})

            canalBienvenidas.send({content: `${setupData?.bienvenidas?.mensaje.replace(/{usuario}/, member).replace(/{servidor}/, guild.name)}`,
            files: [attachment]
        }).catch(() => {});

        }catch(e){
            console.log(e)
        }
    })
}

/*
╔════════════════════════════════════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 y retocado por ByHectorOficiat|| - ||   ║
╚══════════════════════════════════════════════════════════════════════════════════╝
*/
