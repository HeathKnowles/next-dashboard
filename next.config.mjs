// next.config.mjs
export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatar.iran.liara.run',
          pathname: '/public/*',
        },
      ],
    },
  };
  