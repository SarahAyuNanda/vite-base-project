import CryptoJS from "crypto-js";

import { IDecryptionProps, IEncryptionProps, Key } from "@/utils/helper/Encryption/index.model";

const SECRET_KEY = "";

const encrypt = (data: string): string => {
  const result = CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
  return result;
};

const decrypt = (data: string): string => {
  const result = CryptoJS.AES.decrypt(data, SECRET_KEY).toString(CryptoJS.enc.Utf8);
  return result;
};

const setEncrypt = ({ key, data }: IEncryptionProps) => {
  const encryptedData = encrypt(data);
  localStorage.setItem(key, encryptedData);
};

const getDecrypt = ({ key }: IDecryptionProps): string => {
  const decryptedData = localStorage.getItem(key);

  if (decryptedData) {
    const result = decrypt(decryptedData);
    return result;
  }
  return "";
};

const clearStorageItem = (key: Key) => localStorage.removeItem(key);

export { setEncrypt, getDecrypt, clearStorageItem };
