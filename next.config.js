module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      child_process: false,
      net: false,
      tls: false,
    };
    return config;
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};
