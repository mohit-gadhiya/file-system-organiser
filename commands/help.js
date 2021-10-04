// help Fn
function helpFn(dirPath) {
    console.log(`
                node main.js tree "dirPath"
                node main.js organize "dirPath"
                node main.js help
    `);
}
module.exports = {
    helpKey:helpFn
}