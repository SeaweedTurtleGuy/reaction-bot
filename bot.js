const Discord = require("discord.js");

const TOKEN = "NDMzNTg2MzAxNTM5ODQ0MDk2.DdvC4A.FPCr6WUwD37zb6iFcTkOwWUnlBE";
const PREFIX = "$";

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("ReactionPlayz BOT Activated | Version 1.2.3");

    bot.user.setGame('$help');
});

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "giveaway":
            message.reply("**Reaction-Playz Giveaway** *If you would still like to enter the giveaway type:* ***$giveawayenter***, *If you would like to cancel please type:* ***$giveawaycancel***...");
            break;
        case "ip":
            message.reply("**Reaction-Playz.mc.gg**");
            break;
        case "help":
        var embed = new Discord.RichEmbed()
            .setColor(0x0db0ff)
            .setTitle("Commands")
            .setDescription("$help   $ip   $giveaway   $website")
        message.channel.sendEmbed(embed);
            break;
        case "website":
            message.reply("https://reactionplayz.enjin.com/");
            break;
        case "giveawaycancel":
            message.reply("Giveaway Entry Has Been Canceled...");
            break;
        case "giveawayenter":
        const role = message.guild.roles.find("name", "Staff")
        message.reply(`Congratulations! You have now been entered into the giveaway! | ${role}`);
            break;
        default:
        var embed = new Discord.RichEmbed()
            .setColor(0xff0606)
            .setTitle("Invalid Syntax")
            .setDescription("Do **~help** For A List Of Commands...")
        message.channel.sendEmbed(embed);
        break;
    }
});

bot.login(TOKEN);