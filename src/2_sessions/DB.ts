import redis from 'redis';
import { createClient } from 'redis';

const url = 'redis.railway.internal';
/*
console.log("Session Reached")
const RedisClient = redis.createClient({
    url,
    pingInterval: 4 * 60 * 1000
});
*/
/*
const RedisClient = createClient({
    password: 'xfL1udKOrl9EPL5JmpYQdsvmgGyoD3pK',
    socket: {
        host: 'redis-17948.c328.europe-west3-1.gce.redns.redis-cloud.com',
        port: 17948
    }
});
*/

const RedisClient = createClient({
   url
});
/*
RedisClient.on('error', err => console.log(`Success Message and variables: ${err}`));
RedisClient.on('reconnecting', params => console.log(`Error Message : ${params}`));
RedisClient.on('connect', () => console.log('Redis connected'));
RedisClient.on('ready', () => console.log('Redis ready'));
RedisClient.on('end', () => console.log('Redis connection closed'));

await RedisClient.connect();
*/
await RedisClient.connect();

console.log("Connected")
export {RedisClient};