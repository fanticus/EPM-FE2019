import { Component, OnInit, Input } from '@angular/core';

import { ShipData } from '../../interfaces/ship.interface';

@Component({
  selector: 'app-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.scss']
})
export class CellComponent implements OnInit {

  @Input() cell?: ShipData;
  @Input() isEnemy: boolean;
  @Input() avaliableToPlay: boolean;

  public type: string;
  public position: { x: number, y: number };

  private onFire(): void {
    console.log('position', this.position);
  }

  public onClick(): void {
    this.isEnemy && this.avaliableToPlay && this.onFire();
  }

  ngOnInit(): void {
    const { x, y, type } = this.cell;
    this.type = type;
    this.position = { x, y };
  }
}
