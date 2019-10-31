import { Component } from '@angular/core';

import { FieldService } from 'src/app/services/field.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  public title = 'Battleship';

  constructor(
    private fieldService: FieldService
  ) {}
}
