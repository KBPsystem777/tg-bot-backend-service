// Load dotenv configuration
require("dotenv").config();

import { Bot } from "grammy";

const express = require("express");

const app = express();
const port = process.env.PORT || 1995;
const apiKey = process.env.API_KEY || "";

app.get("/", (req: any, res: any) => {
  res.send("Please try our app: https://t.me/devKBPsystembot/devkbpbot");
});

app.listen(port, () => {
  console.log(`@devKBPsystembot is now running on port ${port}`);

  const bot = new Bot(apiKey);

  // You can now register listeners on your bot object `bot`.
  // grammY will call the listeners when users send messages to your bot.

  // Handle the /start command.
  bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
  // Handle other messages.
  bot.on("message", async (ctx) => {
    const chatter = await ctx.getChat();
    console.log("Chatter info: ", chatter);
    console.log(
      `Message from ${chatter.first_name} <${
        chatter.username
      }>: ${ctx.update.message.text?.toString()}`
    );
    ctx.reply(`
    Hello, ${chatter.first_name}!

    Please try our app: https://t.me/devKBPsystembot/devkbpbot
    
    Here are some of your info:

    Username: ${chatter.username}
    
    ${JSON.stringify(chatter)}
    
    All the best,
    @kbpsystem
    `);
  });

  // Now that you specified how to handle messages, you can start your bot.
  // This will connect to the Telegram servers and wait for messages.

  // Start the bot.
  bot.start();
});
