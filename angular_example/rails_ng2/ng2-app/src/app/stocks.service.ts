import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class StocksService {
  private url = 'api/stocks';

  constructor (private http: Http) {}

  getStocks() {
    return this.http.get(this.url)
      .map(res=> res.json())
  }
}
