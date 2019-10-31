import { Component, OnInit, Input } from '@angular/core';

import { ShipData } from '../../interfaces/ship.interface';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})

export class FieldComponent implements OnInit {

  @Input() isEnemy?: boolean;
  @Input() fieldArr: ShipData[][];
  @Input() avaliableToPlay: boolean;

  public description: string;

  public getLetter = (coordX: number): string => {
    return String.fromCodePoint(coordX + 65);
  };

  ngOnInit(): void {
    this.description = this.isEnemy ? 'Поле противника' : 'Ваше поле';
  }
}
