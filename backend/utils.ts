import jwt from 'jsonwebtoken';
// import mg from 'mailgun-js';

export const generateToken = (user:any) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    },
    (process.env as any).JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};
