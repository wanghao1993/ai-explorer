import Crypto from "crypto-js";

export const encrypt = (password: string) => {
  return Crypto.AES.encrypt(
    password,
    process.env.SECRET_KEY as string
  ).toString();
};

export const decrypt = (password: string) => {
  return Crypto.AES.decrypt(
    password,
    process.env.SECRET_KEY as string
  ).toString();
};
