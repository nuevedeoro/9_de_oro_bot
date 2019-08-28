const TeleBot = require('telebot');

const bot = new TeleBot('811753782:AAFNJXtWz8l4blzfUqXExQ5FlB1kFCxICPM');

bot.start();

const translate = require('translate-google')

bot.on(/^\/ingles (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'en'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/espanol (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'es'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/frances (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'fr'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/italiano (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'it'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/chino (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'zh-cn'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/aleman (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'de'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/holandes (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'nl'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});

bot.on(/^\/japones (.+)$/, (msg, props) => {
    const text = props.match[1];
    translate(text, {to: 'ja'}).then(res => {
        bot.sendMessage(msg.reply.text(`${ res }`,{ asReply: true }))
    }).catch(err => {
        bot.sendMessage(msg.reply.text(`${ err }`,{ asReply: true }))
    })
});


bot.on(/Que dia es hoy/, (msg) => {
    return bot.sendMessage(msg.reply.text(`el dia del cowboy`));
});

bot.on(/nico/, (msg) => {
    return bot.sendMessage(msg.reply.text(`Nico AKA el peronista yankee`));
});
/*
ingles - texto a traducir al inglés
frances - texto a traducir al frances
espanol - texto a traducir al español
italiano - texto a traducir al italiano
aleman - texto a traducir al aleman
chino - texto a traducir al chino
japones - texto a traducir al japonés
holandes - texto a traducir al neerlandés
*/