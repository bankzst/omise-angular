import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  token: string = '';

  constructor(
    private _route: ActivatedRoute
  ) {
    this._route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['omiseToken'];
    });
   }

  ngOnInit(): void {
  }

}
