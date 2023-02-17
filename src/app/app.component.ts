import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
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
import { APP_PROTOS } from './images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Crypto NFT';
  private cryptoButtons: Array<{ label: string; icon: IconProp }> = [
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
  firstButtonsSet = this.splitButtonsIntoTwo(true);
  lastButtonsSet = this.splitButtonsIntoTwo(false);
  photos = APP_PROTOS;
  selectedButton: { label: string; icon: IconProp } = {
    label: 'ethereum',
    icon: faEthereum,
  };
  counter = '07:14:35';

  splitButtonsIntoTwo(first: boolean) {
    const middle = Math.floor(this.cryptoButtons.length / 2);
    if (first) {
      return this.cryptoButtons.slice(0, middle);
    }

    return this.cryptoButtons.slice(middle, this.cryptoButtons.length);
  }
}
