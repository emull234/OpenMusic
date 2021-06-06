const Hapi = require('@hapi/hapi');
const songs = require('./api/song');
const songsService = require('./services/postgres/songsService');
const SongValidator = require('./validator/songs');
require('dotenv').config();

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongValidator,
    },
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
