module.exports = {
  apps: [
    {
      name: "production",
      script: "./index.js",
      // instances: "max",
      watch: true,

      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      env: {
        NODE_ENV: "production",
        PORT: 5005,
      },
    },
    {
      name: "staging",
      script: "./index.js",
      // instances: "max",
      watch: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      env: {
        NODE_ENV: "staging",
        PORT: 8080,
      },
    },


    {
      name: "backup",
      script: "./backup.js",
      // instances: "max",
      // watch: true,
      log_date_format: "YYYY-MM-DD HH:mm:ss",
      merge_logs: true,
      env: {
        NODE_ENV: "production",
        PORT: 8000,
      },
    },
  ],
};
