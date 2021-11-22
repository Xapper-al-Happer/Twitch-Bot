const tmi = require('tmi.js');

// Define configuration options
const opts = {
  options: {
    debug: true,
  },
  identity: {
    username: "mohammed_is_sus1",
    password: "e0at4kudeqildkm149aocr2twisq31"
  },
  channels: [
   "ttv_saif12",
	 "Xayedgames",
	 "lethalgaming1939",
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

//arrays
const blocked_words = ['geek', 'Fuck', 'kalb', 'Fuck you'];
const colors = ["SpringGreen", "Blue", "Chocolate", "Red", "Coral", "Firebrick", "OrangeRed", "SeaGreen", "Green", "HotPink"];
//colors.toString();


// Register our event handlers (defined below)
client.on('chat', onChatHandler);
client.on('connected', onConnectedHandler);
client.on('message', (channel, userstate, message, self) => {
  if (self) return;
  //if (userstate.username === BOT_USERNAME) return;
  if (message.toLowerCase() === 'hello') {
    client.say(channel, `@${userstate.username}, hello! Welcome to the chat!`);
  }
  checkChat(channel, userstate, message);
});

// Connect to Twitch:
client.connect();

// Called every time a message comes in
function onChatHandler(target, context, msg, self) {
  if (self) { return; } // Ignore messages from the bot

  // Remove whitespace from chat message
  const commandName = msg.trim();

  // If the command is known, let's execute it
  if (commandName === 'dice') {
    const num = rollDice();
    client.say(target, `You rolled a ${num}`);
    console.log(`* Executed ${commandName} command`);

  }
  if (commandName === '!social') {
    client.say(target, `socials at S-K and https://discord.gg/habibicat`);
  }

  if (commandName === 'what game is it?') {
    client.say(target, `mohammed_is_sus1 is playing league of legends`);
  }
  
  if (commandName === '!random') {
    client.say(target, `rage is bad but playing is better so get better :)`);
	client.say(target, `Try your best!`);
  }
  
  if (commandName === 'bye') {
    client.say(target, `Bye Mate :)`);
  }

if (commandName === 'whoami') {
  client.say(target, `Agoti (A Guy on the internet 🎃)`);
  }
  
  if (commandName === 'help') {
  client.say(target, `commands: {bye, !random, !social, dice, Who made you?}`);
	client.say(target, `HabibiCat: {ping, whoami, what game is it?, Who is Xayedgames?}`);
  }
  
  if (commandName === 'Who is Xayedgames?') {
    client.say(target, `One of the best league of legends player's i have ever seen and my uncle :)`);
  }

if (commandName === 'ping') {
    client.say(target, `Pong ✨ {ping: 0}`);
  }

  if (commandName === 'Who made you?') {
    client.say(target, `S-K, The Happer himself`);
  }

  if (commandName === 'who is happer?') {
    client.say(target, `S-K, The Happer himself`);
  }

  if (msg.includes("hack") || msg.includes("Hack")) {
    client.action(target, `XSS = <scrpit>Alert from js<scrpit>`);
  }

  if (msg.includes("hello") || msg.includes("HELLO")) {
    client.say('Mohammed_is_sus1', 'welcome to the chat, enjoy your stay :)');
  }

  if (msg.includes("statements") || msg.includes("Statements")) {
    client.action('Mohammed_is_sus1', 'IF STATEMENTS HABIBI');
  }

  if (commandName === '!clear') {
    client.clear("Lonermoan");
    //wont work, no permissions
  }

  if (commandName === '!emoteY') {
    client.emoteonly("Lonermoan");
    //wont work, no permissions
  }

  if (commandName === '!followY') {
    client.followersonly("Lonermoan");
    //wont work, no permissions
  }
  if (commandName === '!followN') {
    client.followersonlyoff("Lonermoan");

  }

  if (commandName === '!emoteN') {
    client.emoteonlyoff("Lonermoan");

  }
  if (commandName === '!color') {
    //console.log(client.getChannels());
    client.color(colors[Math.floor(Math.random() * 10)]);
    //change color of bot
    client.say("Lonermoan", "Bot color changed");
  }

}

// Function called when the "dice" command is issued
function rollDice() {
  const sides = 6;
  return Math.floor(Math.random() * sides) + 1;
}

//check twitch chat, delete message which isnt suitable and respond to it
function checkChat(channel, username, message) {
  let shouldSendMessage = false;
  //check message
  message = message.toLowerCase();
  shouldSendMessage = blocked_words.some(blockedWord => message.includes(blockedWord.toLowerCase()));
  //tell user
 // client.say(channel, `@${username.username} oopsie message deleted`);
  //delete message
  if (shouldSendMessage) {
    client.deletemessage(channel, username.id)
      .then((data) => {
        //nothing
      }).catch((err) => {
        //nothing
      });
      client.say(channel, `@${username.username} oopsie message deleted`);
  }
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`* Connected to ${addr}:${port}`);
  client.say('Mohammed_is_sus1', `connected to ${addr} and ${port}`);
  client.say('Mohammed_is_sus1', 'Hello Mohammed_is_sus1, lame bot here');
}