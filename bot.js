require('dotenv').config();
const { Bot } = require("grammy");

const bot = new Bot(process.env.BOT_TOKEN);

bot.command("start", (ctx) => { console.log(ctx)
    ctx.reply("Привет!")});

bot.on("message", (ctx) => ctx.reply("Получено сообщение!"));

bot.start();
