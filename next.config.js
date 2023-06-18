const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

// proxy axios 설정
module.exports = (phase, { defaultConfig }) => {
  const rewrites = () => {
    return [
      {
        source: '/redis/:path*',
        destination: 'https://api.tapplace.co.kr',
      },
    ];
  };

  return { rewrites };
};

module.exports = nextConfig;
