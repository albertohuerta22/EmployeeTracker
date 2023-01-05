// import redis from 'redis';

// const redisClient = redis.createClient(6379);
// const connectRedis = async () => {
//   try {
//     await redisClient.connect();
//     console.log('Connecting to the Redis');
//     redisClient.on('ready', () => {
//       console.log('Connected!');
//     });
//   } catch (error) {
//     redisClient.on('error', (error) => console.error(`Error : ${error}`));
//   }
// };

// export default connectRedis;

// const connectReddis = (async () => {
//   redisClient = redis.createClient();

//   redisClient.on('error', (error) => console.error(`Error : ${error}`));

//   await redisClient.connect();
// })();
