export interface Rol {
  id: string;
  name: string;
  discriminator: string;
  creationUserID: string;
  modificationUserID: string;
  description: string;
  enable: boolean;
  creationDate: Date;
  modificationDate: Date;
}

