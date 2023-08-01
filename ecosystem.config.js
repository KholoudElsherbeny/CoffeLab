module.exports = {
  apps: [
    {
      name: "lawyer",
      exec_mode: "cluster",

      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      max_memory_restart: "100M",
      env: {
        NODE_ENV: "production",
        HOST: "0.0.0.0",
        PORT: 3000,
      },
    },
  ],
};
