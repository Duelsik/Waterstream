//hello pachu, if you ever see this. Don't worry this is for a different server, you can't actually use this on your server :)
const Discord = require("discord.js");
const { getImage } = require('random-reddit')
const cooldown = new Set();

exports.run = async(client, message, args) => {
    if(message.guild.id === '836707588640997456' || message.guild.id === '742732244673626234'){
        if(cooldown.has(message.member.id)) return;
        
        //if(message.member.id === '659690575859154955') return;
        if(args[0]){
            const image = await getImage(args[0])
            message.channel.send(image).catch(e => message.channel.send('Something went wrong.'))

            if(message.member.id === '659690575859154955'){
                cooldown.add(message.member.id)

                setTimeout(() => {
                    // Removes the user from the set after 2 hours
                    cooldown.delete(message.member.id);
                  }, 17280);
            }


        }else{
            var subslist = ['hentai','rule34'       ]
            var subreddits = subslist[Math.floor(Math.random() * subslist.length)];
            
            const image = await getImage(subreddits)
            message.channel.send(image).catch(e => message.channel.send('Something went wrong.'))

            if(message.member.id === '659690575859154955'){
                cooldown.add(message.member.id)

                setTimeout(() => {
                    // Removes the user from the set after 2 hours
                    cooldown.delete(message.member.id);
                  }, 17280);
            }

        }
    }
}


