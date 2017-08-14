import { Component, OnInit } from '@angular/core';
import { StocksService } from '../stocks.service'

@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  constructor (private stocksService: StocksService) {}
  stocks = []

  ngOnInit() {
    this.stocksService.getStocks().
    subscribe(stocks => this.stocks = stocks)
  }
}
