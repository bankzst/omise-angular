import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.scss']
})
export class TokenComponent implements OnInit {
  token: string = '';
  source: string = '';

  constructor(
    private _route: ActivatedRoute
  ) {
    this._route.queryParams.subscribe(params => {
      console.log(params);
      this.token = params['omiseToken'];
      this.source = params['omiseSource'];
    });
   }

  ngOnInit(): void {
  }

}
