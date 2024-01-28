const r = typeof require === 'function' && require;
console.log(r('./foo'))

if (typeof require === 'function') {
    console.log(require('./foo'))
}


if (typeof require === 'function') {
    const r = require;
    console.log(r('./foo'))
}