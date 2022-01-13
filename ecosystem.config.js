module.exports = {
  apps: [
    {
      name: 'app',
      script: './node_modules/next/dist/bin/next',
      exec_mode: 'cluster',
      instances: 'max',
      args: 'start -p 3010',
      log_date_format: 'YYYY-MM-DD HH:mm Z"',
    },
  ],
};
