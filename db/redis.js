const redis = require('redis');

const client = redis.createClient({
    // port: 6379,
    // host: 'localhost'
    url: process.env.REDIS_HOST,
    port : process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

async function connect(){
    await client.on("error", function (err) {
        throw err;
    });
    await client.connect();    
    await client.set('foo', 'bar');
}
connect;

module.exports = client;