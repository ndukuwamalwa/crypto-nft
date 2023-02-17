import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface IPhoto {
  url: string;
  creator: string;
  amount: number;
  name: string;
}

export interface ICrypto {
  label: string;
  icon: IconProp;
}
