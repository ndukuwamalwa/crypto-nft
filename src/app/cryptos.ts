import {
  faC,
  faT,
  faU,
  faDrawPolygon,
  faBitcoinSign,
  faX,
  faChain,
  faLitecoinSign,
  faA,
} from '@fortawesome/free-solid-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { ICrypto } from './models';

export const CRYPTO_CURRENCIES: Array<ICrypto> = [
  {
    label: 'cardano',
    icon: faC,
  },
  {
    label: 'tron',
    icon: faT,
  },
  {
    label: 'ethereum',
    icon: faEthereum,
  },
  {
    label: 'uniswap',
    icon: faU,
  },
  {
    label: 'polygon',
    icon: faDrawPolygon,
  },
  {
    label: 'bitcoin',
    icon: faBitcoinSign,
  },
  {
    label: 'xrp',
    icon: faX,
  },
  {
    label: 'chainlink',
    icon: faChain,
  },
  {
    label: 'litecoin',
    icon: faLitecoinSign,
  },
  {
    label: 'cosmos',
    icon: faC,
  },
  {
    label: 'algorad',
    icon: faA,
  },
];
