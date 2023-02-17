import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { CRYPTO_CURRENCIES } from '../cryptos';
import { APP_PROTOS } from '../images';
import { IPhoto } from '../models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  firstButtonsSet = this.splitButtonsIntoTwo(true);
  lastButtonsSet = this.splitButtonsIntoTwo(false);
  photos = APP_PROTOS;
  selectedButton: { label: string; icon: IconProp } = {
    label: 'ethereum',
    icon: faEthereum,
  };
  counter = '07:14:35';

  constructor(private router: Router) {}

  splitButtonsIntoTwo(first: boolean) {
    const cryptoButtons = CRYPTO_CURRENCIES;
    const middle = Math.floor(cryptoButtons.length / 2);
    if (first) {
      return cryptoButtons.slice(0, middle);
    }

    return cryptoButtons.slice(middle, cryptoButtons.length);
  }

  goToPlaceBid(photo: IPhoto) {
    this.router.navigate(['bid', photo.url]);
  }

  goToCrypto(label: string) {
    this.router.navigate(['crypto-trends', label]);
  }
}
