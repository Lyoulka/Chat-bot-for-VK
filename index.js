const { Bot, Keyboard, KeyboardColor } = require('node-vk-bot');
const util = require('util');
const steps = require('./steps');

const bot = new Bot({
    token: 'Your token',
    group_id: Your group ID
}).start();

console.log('Bot started!');

bot.get(/./i, (message, exec, reply) => {
    let info = message.payload && steps[JSON.parse(message.payload)] || steps[''];
    let keyboard = new Keyboard(true);
    for (let i = 0; i < info.btns.length; i++){
        if (i) {
            keyboard.addRow();
        }
        keyboard.addButton(info.btns[i].msg, KeyboardColor.PRIMARY, JSON.stringify(info.btns[i].next));
    }
    reply(info.question, {keyboard}).catch(e => console.error(e));
})

bot.on('poll-error', error => {
    console.error('error occurred on a working with the Long Poll server ' +
        `(${util.inspect(error, false, 8, true)})`)
})
