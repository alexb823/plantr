const server = require('./app');
const syncAndSeed = require('./seed');

const port = process.env.PORT || 3000;

syncAndSeed().then(() => {
  server.listen(port, () => console.log(`Server is listening on port ${port}`));
});
