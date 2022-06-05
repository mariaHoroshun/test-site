import { Injectable } from "@angular/core";
import {CardInfoItem} from "../block-info/CardInfoItem"

@Injectable()
export class CardsService {
    constructor() {}

    getCards(): CardInfoItem[]{
        var cards: CardInfoItem[] = [
            {
                "img": "url(../../assets/einstein.jpg)",
                "name": "Hans Albert Einstein",
                "text": "Einstein was widely recognized for his research on sediment transport. To honor his outstanding achievement in hydraulic engineering, the American Society of Civil Engineers established the Hans Albert Einstein Award in 1988 and the annual award is given to those who have made significant contributions to the field."
            },
            {
                "img": "url(../../assets/newton.jpg)",
                "name": "Sir Isaac Newton",
                "text": "was an English mathematician, physicist, astronomer, alchemist, theologian, and author (described in his time as a natural philosopher) widely recognised as one of the greatest mathematicians and physicists of all time and among the most influential scientists. He was a key figure in the philosophical revolution known as the Enlightenment."
            },
            {
                "img": "url(../../assets/tesla.jpeg)",
                "name": "Nikola Tesla",
                "text": "was a Serbian-American inventor, electrical engineer, mechanical engineer, and futurist best known for his contributions to the design of the modern alternating current (AC) electricity supply system."
            },
        ]
        return cards;
    }
}