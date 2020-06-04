export default {
  jwt: {
    secret: process.env.JWT_SECRET_KEY || 'secret-key',
    expiresIn: '1d',
  },
};
