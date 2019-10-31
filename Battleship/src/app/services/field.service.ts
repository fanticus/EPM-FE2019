import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';

import { ShipData } from '../interfaces/ship.interface';
import { ShipsData } from '../interfaces/ships.interface';

@Injectable({
  providedIn: 'root'
})

export class FieldService {

  public fieldUser: ShipData[][] = [];
  public fieldBot: ShipData[][] = [];
  private fieldSize;

  constructor(
    private httpService: HttpService
  ) {
    this.httpService.getShipsData().subscribe((data: { fieldSize: number }) => {
      this.fieldSize = data.fieldSize;
      this.getField();
    });
  }

  public getField(ships?: ShipsData[]): void {
    console.log('ships', ships);
    if (this.fieldUser.length > 0) this.fieldUser = [];
    for (let x = 0; x < this.fieldSize; x++) {
      const rows: ShipData[] = [];
      for (let y = 0; y < this.fieldSize; y++) {
        const newCell: ShipData = {
          x,
          y,
          type: 'water',
        };
        if (ships) {
          ships.forEach((ship) => {
            ship.coords.forEach((cell) => {
              if (cell.coordX === x && cell.coordY === y) newCell.type = 'ship';
            });
          });
        }
        rows.push(newCell);
      }
      this.fieldUser.push(rows);
      if (this.fieldBot.length < 10) this.fieldBot.push(rows);
    }
  }
}
