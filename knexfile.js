module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'tour',
      },
      migrations: {
        directory: './db/migrations',
      },
    },
  };