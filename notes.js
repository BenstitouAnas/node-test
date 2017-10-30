console.log('Starting notes.js ...');

module.exports.add = (a, b) => {
    if((isNaN(a)) || (typeof b != 'number')){
        return 'Type Error !';
    }
    return a + b;
}