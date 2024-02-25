require('dotenv').config();
const { connectDB } = require("./functions/connectDB.js");
const createTest = require('./functions/createTest.js');
const { Bot, session } = require("grammy");
const {
    conversations,
    createConversation,
  } = require("@grammyjs/conversations");

const bot = new Bot(process.env.BOT_TOKEN);

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

bot.use(createConversation(createTest));

/*(async () => {
    const client = await connectDB();
    let createTableQuery = `
    INSERT INTO users (name, gender, inventory) VALUES ('Mikhail Vel', 'male', '{}');
    `;
    const res = await client.query(createTableQuery);
    console.log(`Created table.`);

    const entries = await client.query('SELECT * FROM users WHERE name = $1;', ["Mikhail Vel"]);
  console.log(`Database entries for ${1}: ${entries.rowCount} row(s)`);
  console.log(Object.keys(entries.rows?.[0]).join('\t'));
  console.log(`${entries.rows.map((r) => Object.values(r).join('\t')).join('\n')}`);
  await client.end();
  })();*/

bot.command("start", async (ctx) =>  { console.log(ctx.match)
    if(ctx.match == "") return ctx.reply("Для создания теста введите /create")
});

bot.command("create", async (ctx) =>  { console.log(ctx.match)
  await ctx.conversation.enter("createTest");
});

bot.start();
