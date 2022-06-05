import { Component, Input, OnInit } from '@angular/core';
import { CardInfoItem } from './CardInfoItem'

@Component({
  selector: 'app-block-info',
  templateUrl: './block-info.component.html',
  styleUrls: ['./block-info.component.scss']
})
export class BlockInfoComponent implements OnInit {

  @Input()
  cardItem: CardInfoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
