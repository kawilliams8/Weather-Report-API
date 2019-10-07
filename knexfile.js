module.exports = {
  development: {
    client: "pg",
    connection: {
      filename: "postgres://localhost/forecasts"
    },
    migrations: {
      directory: "./db/migrations"
    },
    useNullAsDefault: true
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
};
