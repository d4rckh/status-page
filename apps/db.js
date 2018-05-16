// TODO: DB using lowdb + admin panel with btoa encryotion and passport(cookies)
// TODO: Installing lowdb and configuring
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('apps.json');
const db = low(adapter);

db.defaults({
    apps: []
}).write();

module.exports.addApp = (what, name, category) => {
    db.get(`apps.${category}`).push(what)
}
