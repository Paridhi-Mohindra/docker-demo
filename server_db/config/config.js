module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || "mysecretpassword",
    "database": process.env.DB_DATABASE || "temp",
    "host": process.env.DB_HOST || "0.0.0.0",
    "port": process.env.DB_PORT || 5000,
    "dialect": "postgres"
  },
  "test": {
    "username": "postgres",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "postgres",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
