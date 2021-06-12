    exports.run = (client, message, args) => {
    let light = ["⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜",
                 "⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬜",
                 "⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜",
                 "⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜","⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛"];
    var colours = "🟫🟪🟪🟪🟦🟦🟩🟩🟨🟨🟧🟧🟥";

    message.channel.send(`${light[client.lightstatus]} \n${colours}`)
    .then(msg => {
        msg.react('🔲')
        msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '🔲') {
                message.reply('yes it work.');
            }
        })
        .catch(collected => {
        });

    });

    const filter = (reaction, user) => {
        return ['🔲'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

}