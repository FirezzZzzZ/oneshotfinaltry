const Discord = require('discord.js');
const {Client, Attachment} = require('discord.js')
const bot = new Client();


const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () =>{
    console.log('I Am Online Now!');
})

bot.on('guildMemberAdd', member =>{

    const channel = member.guild.channels.find(channel => channel.name === "welcome");
    if(!channel) return;

    channel.send(`Welcome ${member} to 1ShOt乛 Official! You are the latest member! Have fun and be relaxed. `)
});

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
            case 'ping':
                message.channel.sendMessage('pong!');
                break;
            case'website':
                message.channel.sendMessage('youtube.com/ Firez')
                break;
            case 'info':
                if(args[1] === 'version'){
                    message.channel.sendMessage('Version ' + version);
                }else{
                    message.channel.sendMessage('Invalid Args')
                } 
                break;
                case 'clear':
                if(!args[1]) return message.reply('Error Please Define Second Arg')
                message.channel.bulkDelete(args[1]);
                break;

            case 'send':
                const Attachment = new Attachment ('https://www.google.com/imgres?imgurl=https%3A%2F%2Fpreviews.123rf.com%2Fimages%2Fimagecatalogue%2Fimagecatalogue1611%2Fimagecatalogue161121129%2F66635215-rules-text-rubber-seal-stamp-watermark-caption-inside-rounded-rectangular-banner-with-grunge-design-.jpg&imgrefurl=https%3A%2F%2Fwww.123rf.com%2Fphoto_66635215_stock-vector-rules-text-rubber-seal-stamp-watermark-caption-inside-rounded-rectangular-banner-with-grunge-design-.html&docid=cJrMcamDEMYErM&tbnid=ulfGN5PrXCmyoM%3A&vet=10ahUKEwjp3PSo5f_iAhUei3AKHWinDIkQMwheKAQwBA..i&w=1300&h=595&bih=561&biw=1280&q=rules%20banner&ved=0ahUKEwjp3PSo5f_iAhUei3AKHWinDIkQMwheKAQwBA&iact=mrc&uact=8')
                    message.channel.send(message.author, attachment);
            break;
            case 'sendlocal':
                const attachment2 = new Attachment('./image.jpg');
                    message.channel.send(message.author, attachment2)
            break;
            case 'rules':
                const attachment3 = new Attachment('./rules.txt');
                    message.channel.send(message.author, attachment3)
            break;

            case 'embed':
            const embed = new Discord.RichEmbed()
            .setTitle('User Information')
            .addField('Player Name', message.author.username)
            .addField('Version', version)
            .addField('Current Server', message.guild.name)
            .setColor(0xF1C40F)
            .setThumbnail(message.author.avatarURL)
            .setFooter('Nice Picture!')
            message.channel.sendEmbed(embed);
            break;
        }
    })

bot.login(process.env.token);
