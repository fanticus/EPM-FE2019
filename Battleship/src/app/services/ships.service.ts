import { Injectable } from '@angular/core';

import { HttpService } from 'src/app/services/http.service';
import { ToolsService } from 'src/app/services/tools.service';

import { ShipsData } from '../interfaces/ships.interface';
import { ConfigShipsData } from '../interfaces/configShips.interface';
import { CoordsData } from '../interfaces/coords.interface';
import { ConfigData } from '../interfaces/config.interface';

@Injectable({
  providedIn: 'root'
})

export class ShipsService {

  private shipsData: ConfigShipsData[];
  private fieldSize: number;
  private occupiedCells: boolean[][];

  constructor(
    private httpService: HttpService,
    private toolsService: ToolsService
  ) {
    this.httpService.getShipsData().subscribe((data: ConfigData) => {
      this.fieldSize = data.fieldSize;
      this.shipsData = data.shipsData;
    });
  }

  private occupingCells = (coords: CoordsData): void => {
    for (let i = 0; i < 3; i++) {
      try { this.occupiedCells[coords.coordX - 1][coords.coordY - 1 + i] = true; } catch {}
      try { this.occupiedCells[coords.coordX][coords.coordY - 1 + i] = true; } catch {}
      try { this.occupiedCells[coords.coordX + 1][coords.coordY - 1 + i] = true; } catch {}
    }
  };

  private isOccupied = (
    coordX: number,
    coordY: number,
    directionX: number,
    directionY: number,
    size: number
  ): boolean => {
    for (let i = 0; i < size; i++) {
      const indexArr: number = coordX + (i * directionX);
      const indexItem: number = coordY + (i * directionY);
      if (this.occupiedCells[indexArr][indexItem]) {
        return true;
      }
    }
    return false;
  };

  private oneTypeShips = (num: number, size: number): ShipsData[] => {

    return new Array(num).fill(null).map((item) => {
      const coords: CoordsData[] = [];
      let coordX: number;
      let coordY: number;

      const directionX: number = this.toolsService.getRandom(0, 1);
      const directionY: number = directionX ? 0 : 1;

      do {
        coordX = this.toolsService.getRandom(0, this.fieldSize - 1 - (size - 1) * directionX);
        coordY = this.toolsService.getRandom(0, this.fieldSize - 1 - (size - 1) * directionY);
      } while (this.isOccupied(coordX, coordY, directionX, directionY, size));

      for (let i = 0; i < size; i++) {
        coords.push({
          coordX: coordX + (i * directionX),
          coordY: coordY + (i * directionY)
        });
        this.occupingCells(coords[i]);
      }

      return {
        coords,
        size,
        isSunk: false
      };
    });
  };

  getShips(): ShipsData[] {
    const ships: ShipsData[] = [];
    this.occupiedCells = new Array(this.fieldSize).fill(false).map(() => new Array(this.fieldSize).fill(false));
    this.shipsData.forEach((ship) => {
      const { number, size } = ship;
      ships.push(...this.oneTypeShips(number, size));
    });

    return ships;
  }
}
