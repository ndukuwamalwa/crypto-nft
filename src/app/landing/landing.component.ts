import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { interval, map } from 'rxjs';
import { CRYPTO_CURRENCIES } from '../cryptos';
import { APP_PROTOS } from '../images';
import { ICrypto, IPhoto } from '../models';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  firstButtonsSet = this.splitButtonsIntoTwo(true);
  lastButtonsSet = this.splitButtonsIntoTwo(false);
  photos = APP_PROTOS;
  selectedButton: { label: string; icon: IconProp } = this.getSelectedCrypto();
  counter$ = interval(1000).pipe(
    map(() => {
      const dt = new Date();
      return `${dt.getHours().toString().padStart(2, '0')}:${dt
        .getMinutes()
        .toString()
        .padStart(2, '0')}:${dt.getSeconds().toString().padStart(2, '0')}`;
    })
  );

  constructor(private router: Router) {}

  splitButtonsIntoTwo(first: boolean) {
    const cryptoButtons = CRYPTO_CURRENCIES;
    const middle = Math.floor(cryptoButtons.length / 2);
    if (first) {
      return cryptoButtons.slice(0, middle);
    }

    return cryptoButtons.slice(middle, cryptoButtons.length);
  }

  getSelectedCrypto() {
    const saved = localStorage.getItem('crypto');
    if (saved) {
      return JSON.parse(saved);
    }
    return {
      label: 'ethereum',
      icon: faEthereum,
    };
  }

  goToPlaceBid(photo: IPhoto) {
    this.router.navigate(['bid', photo.url]);
  }

  goToCrypto(btn: ICrypto) {
    this.selectedButton = btn;
    localStorage.setItem('crypto', JSON.stringify(btn));
    this.router.navigate(['crypto-trends', btn.label]);
  }
}
