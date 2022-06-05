import { Component, OnInit } from '@angular/core';
import { CardInfoItem } from '../block-info/CardInfoItem';
import {CardsService} from './CardsService'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  
  panels = [
    {
      name: 'This is panel header 1',
      text: 'hbhdjskbkhdsbcdsjhbcsjdhcbsjdcbsjbcsjcbjcbjsbcjsdcbhcbjshbcsjhbdcjsdbcjsdbhcdsjhbcjsbcjsdhcbssjdhbcjsbcdjsbc'
    },
    {
      name: 'This is panel header 2',
      text: '12315dsmcklsmcdlksmclsdmcslcmslcmsl,knklnjkln,m,m.,.hbkfmdkl;sc'
    },
    {
      name: 'This is panel header 3',
      text: 'hbhdjskbkhdsbcdsjhbcsjdhcbsjdcbsjbcsjcbjcbjsbcjsdcbhcbjshbcsjhbdcjsdbcjsdbhcdsjhbcjsbcjsdhcbssjdhbcjsbcdjsbc'
    }
  ];

  cards: CardInfoItem[];

  constructor(
    private _cardsService: CardsService
  ) { }

  ngOnInit(): void {
    this.cards = this._cardsService.getCards();
  }

}
