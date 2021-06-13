const monggose = require('mongoose');
const config = require('../config');

function connect () {
    monggose.connect(config.MONGODB.URI, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (err) {
            console.log('数据库连接失败');
        } else {
            console.log('数据库连接成功');
        }
    });
}

module.exports = { connect }