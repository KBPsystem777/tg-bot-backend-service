"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Load dotenv configuration
require("dotenv").config();
const grammy_1 = require("grammy");
const express = require("express");
const app = express();
const port = process.env.PORT || 1995;
const apiKey = process.env.API_KEY || "";
app.get("/", (req, res) => {
    res.send("Please try our app: https://t.me/devKBPsystembot/devkbpbot");
    const bot = new grammy_1.Bot(apiKey);
    // You can now register listeners on your bot object `bot`.
    // grammY will call the listeners when users send messages to your bot.
    // Handle the /start command.
    bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
    // Handle other messages.
    bot.on("message", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const chatter = yield ctx.getChat();
        console.log("Chatter info: ", chatter);
        console.log(`Message from ${chatter.first_name} <${chatter.username}>: ${(_a = ctx.update.message.text) === null || _a === void 0 ? void 0 : _a.toString()}`);
        ctx.reply(`
    Hello, ${chatter.first_name}!

    Please try our app: https://t.me/devKBPsystembot/devkbpbot
    
    Here are some of your info:

    Username: ${chatter.username}
    
    ${JSON.stringify(chatter)}
    
    All the best,
    @kbpsystem
    `);
    }));
    // Now that you specified how to handle messages, you can start your bot.
    // This will connect to the Telegram servers and wait for messages.
    // Start the bot.
    bot.start();
});
app.listen(port, () => {
    console.log(`@devKBPsystembot is now running on port ${port}`);
});
