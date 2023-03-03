const db = require('../persistence');

module.exports = async (req, res) => {
    console.log("got request");
    const items = await db.getItems();
    res.send(items);
};
