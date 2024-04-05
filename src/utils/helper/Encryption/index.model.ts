const keys = ["token"] as const;
type Key = (typeof keys)[number];

interface IEncryptionProps {
  key: Key;
  data: string;
}

interface IDecryptionProps {
  key: Key;
}

export type { Key, IDecryptionProps, IEncryptionProps };
