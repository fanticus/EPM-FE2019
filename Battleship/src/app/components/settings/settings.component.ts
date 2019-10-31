import { Component } from '@angular/core';

import { FieldService } from 'src/app/services/field.service';
import { ShipsService } from 'src/app/services/ships.service';

import { ShipsData } from "../../interfaces/ships.interface";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})

export class SettingsComponent {

  private ships: ShipsData[];

  constructor(
    private fieldService: FieldService,
    private shipsService: ShipsService
  ) {}

  onAutoPlacement(): void {
    this.ships = this.shipsService.getShips();
    this.fieldService.getField(this.ships);
  }
}
