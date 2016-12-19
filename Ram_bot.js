const Discord = require("discord.js");

const bot = new Discord.Client({
  disableEveryone: true,
  messageCacheMaxSize: 1000,
  messageCacheLifetime: 300,
  messageSweepInterval: 60
});


const scraper = require("google-search-scraper");

const YouTube = require("youtube-node");

const youTube = new YouTube();

youTube.setKey("AIzaSyBdkeUXJzDYV2VYX_9NUWFRikdn-A8VD_E");

var Cleverbot = require('cleverbot-node');

cleverbot = new Cleverbot;

/* Twitch search in the making
var TwitchApi = require('twitch-api');

var twitch = new TwitchAPI({
    clientId: 'your client id',
    clientSecret: 'your client secret',
    redirectUri: 'same redirectUri that you have configured on your app',
    scopes: [array of scopes you want access to]
  });
*/

var self = "<@250943511648534528>";
var selfid = "250943511648534528";
var ramgeneralchat = "251327992762990592";
var ramserver = "251327992762990592";

var d = new Date();
var Month = d.getMonth();

bot.on('ready', () => {
    console.log("Ram bot ready for service!");
    bot.user.setStatus("dnd");
    bot.user.setGame("@Ram#5325 cmds");
    if (Month == 11) {
        console.log("It's christmas time!");
        console.log("Profile Picture is now Christmas themed!");
        bot.user.setAvatar("E:/Stuff/Wallpapers & Themes/Pictures/ram_pic_christmas.png");
    }
    else {
        bot.user.setAvatar("E:/Stuff/Wallpapers & Themes/Pictures/ram_pic_1.jpg");
    }
});

/*
setInterval(Reminders, 2000);

 function Reminders() {
    bot.guild.channel.sendMessage("Reminder: To see what commands I have, type what I'm playing!").catch(console.error);
}; */

bot.on('message', message => {
    if (message.content.startsWith(self + " ")) {
        msgArray = message.content.split(self + " ");
        userinput = msgArray[1].replace('  ', ' ').toString();
        
        if (userinput.startsWith ("cb ")) {
            var msgArray = userinput.split('cb ');
            
            Cleverbot.prepare(function(){
                cleverbot.write(msgArray[1], function (response) {
                message.channel.sendMessage(message.author + " " + response.message).catch(console.error);
            })});
        }
        
        if (userinput === 'join') {
            message.channel.sendMessage(message.author + " ***Use this link to invite me to your server:*** \n\n<https://discordapp.com/api/oauth2/authorize?client_id=250943511648534528&scope=bot&permissions=0>").catch(console.error);
        }
        
        if (userinput === 'creator') {
            message.channel.sendMessage(message.author + " You can meet my creator by joining this: https://discord.gg/2ffbTEQ").catch(console.error);
        }
        
        if (userinput === 'server') {
            message.channel.sendMessage(message.author + " Here is the link to join my server: https://discord.gg/2ffbTEQ").catch(console.error);
        }
        
        if (userinput === 'cmds') {
            lastmsg = message
            message.author.sendMessage("***My current commands and what they do are as follows:*** \n\n`join` Provides a link so that you can invite me to a server. \n\n`creator` Allows you to find out who the creator is. \n\n`server` Provides an invite link to my server \n\n`gs` Searches google for the text that follows the command. \n\n`ys` Searches youtube for the text that follows this command.").catch(console.error);
        }
        
        if (userinput.startsWith('gs')) {
            var msgArray = userinput.split('gs ');
                
                var searchoptions = {
                        query: msgArray[1],
                        host: 'www.google.com.au',
                        lang: 'en',
                        limit: 1
                    };
                    var firstSearch = false;
                    scraper.search(searchoptions, function(err, url) {
                        //this is called for each result
                        if (err) {
                            console.log(err);
                        }
                        if (message.content === "" || message.content === " ") {
                            message.channel.sendMessage(message.author + " Please enter some text after `@Ram gs `.").catch(console.error);
                        }
                        else if (msgArray[1] != "" || msgArray[1] != " ") {
                            if (firstSearch == false) {
                                console.log(url)
                                message.channel.sendMessage(message.author + " \n\n`This is the top search result for the text you entered.`\n\n" + url).catch(console.error);
                                firstSearch = true;
                            }
                        }
                    });
        }
        
        if (userinput.startsWith('ys ')) {
            var msgcontent = message.content
                    var msgArray = message.content.split('ys ');

                    youTube.search(msgArray[1], 1, function(error, result) {
                        if (error) {
                            console.log(error);
                        } else {
                            var rawData = JSON.stringify(result, null, 1);
                            var parsed = JSON.parse(rawData);
                            
                            //console.log(parsed.items); // used for debugging
                            if (message.content === "" || message.content === " ") {
                                message.channel.sendMessage(message.author + " Please enter some text after `@Ram ys `.").catch(console.error);
                            }
                            else {
                                
                            if(parsed.items[0].id.kind === 'youtube#channel') {
                                //this will get run if the top result is a channel and not a video
                                message.channel.sendMessage(message.author + "\n\n`Here is the top result for the text you entered.`\n\n" + "https://www.youtube.com/channel/" + parsed.items[0].id.channelId).catch(console.error);
                            }
                            if(parsed.items[0].id.kind === 'youtube#video') {
                                message.channel.sendMessage(message.author + "\n\n`Here is the top result for the text you entered.`\n\n" + "https://www.youtube.com/watch?v=" + parsed.items[0].id.videoId).catch(console.error);
                            }
                                
                            }
                        }
                    });
        }
            
            /* purge command in the making
            if (userinput.startsWith("purge ")) {
                var msgArray = message.content.split('purge ')
                authorid = message.author.id;
                if (Guild.available) {
                if (message.author.guild.GuildMember.hasPermission("Manage Messages", true)) {
                    
                }
                }
            }
            */
        
     
        
    } // this is the end of the if statement that checks if the message startsWith self...
        
});


bot.login("MjUwOTQzNTExNjQ4NTM0NTI4.CxcPXA._ikYa21gSKxe-RjUYHjxpFbXCug").catch(console.error);