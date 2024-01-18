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



 
  ],
};
