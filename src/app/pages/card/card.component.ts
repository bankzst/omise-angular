import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const OmiseCard: any;

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    OmiseCard.configure({
      publicKey: 'OMISE_PUBLIC_KEY'
    });

    OmiseCard.configureButton('#checkout-button', {
      amount: 100000,
      currency: 'THB',
      buttonLabel: 'Pay 1000 THB'
    });

    OmiseCard.attach();
  }

  onSubmit() {
  }


}
