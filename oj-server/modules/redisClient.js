var redis = require('redis');
//thie client of redis is not singleton, so if we don't write a warpper for it , many instances will be created.
//Cost to much resources
var client = redis.createClient();

function set(key, value, callback) {
    client.set(key, value, function(err, res) {
        if (err) {
            return;
        }
        callback(res);
    });
}

function get(key, callback) {
    client.get(key, function(err, res) {
        if (err) {
            return;
        }
        callback(res);
    });
}

function expire(key, timeInSeconds) {
    client.expire(key, timeInSeconds);
}

function quit() {
    client.quit();
}

module.exports = {
    get: get,
    set: set,
    expire: expire,
    quit: quit,
    redisPrint: redis.print
}