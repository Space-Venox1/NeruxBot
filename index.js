const mineflayer = require('mineflayer')


const bot = mineflayer.createBot({

    host: 'Neruxvace.net',
    username: 'email',
    password: 'password',
    version: "1.8.9",
    auth: 'mojang'

});

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }


bot.on('spawn', () => {
//Wenn du keine Subdomain hast entferne das // vor den folgenden Nachrichten und ersetze den Namen
  //sleep(1000)
  //bot.chat("/ps join Name")
  sleep(2000)
  bot.chat("/commandspy")
  bot.chat("Bot erfolgreich geladen")
  console.log("Bot wurde erfolgreich geladen.")

})
 
bot.on("chat", function(username, message){
    if(username == bot.username) return;

    let msg = message.toString(); 
    let playername = username; 

    //Einfacher Command
    if(msg == "/spawn") {
      bot.chat("/spawn "+ username)
    }

    //Command mit Argumenten, z. B. /warp Test
    if(msg.includes("/tpmich")) {
      let warpstring= msg.split(" ").slice(1, 2).join(" ");
      bot.chat("/warp "+ warpstring + " "+ username)
    }

    //Nachricht beinhaltet Etwas
    if(msg.includes("Hilfe")){
      bot.chat("@" + username + ", ein Teammitglied wurde benachrichtigt")
      sleep(500)
      bot.chat("/tc !!!!!! Der Spieler @"+ username + " braucht Hilfe !!!!!!")
     }

    //Nachricht beginnt mit Etwas
    if(msg.startsWith("Discord")){
      bot.chat("/bc Unser Discord Link: Dein Link c:")
    }
    if(msg.includes("Hey Bot")){
      bot.chat("Hey @"+ username)
    }
    if(msg.includes("Hallo Bot")){
      bot.chat("Hey @"+ username)
    }
    if(msg.includes("Moin Bot")){
      bot.chat("Hey @"+ username)
    }
    
})
