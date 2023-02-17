import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faEthereum } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faUserPlus, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { APP_PROTOS } from '../images';
import { IPhoto } from '../models';

@Component({
  selector: 'app-place-bid',
  templateUrl: './place-bid.component.html',
  styleUrls: ['./place-bid.component.scss']
})
export class PlaceBidComponent implements OnInit {
  photo!: IPhoto;
  backButton = faArrowLeft;
  forwardButton = faArrowRight;
  userIcon = faUser;
  userAddIcon = faUserPlus;
  ethereumIcon = faEthereum;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe({
      next: (param: any) => {
        const url = param.params.photo || '';
        const photo = APP_PROTOS.find(p => p.url.toLowerCase() === url.toLowerCase());
        if (photo) {
          this.photo = photo;
        } else {
          // Go to landing page
          this.router.navigateByUrl('');
        }
      }
    });
  }
}
