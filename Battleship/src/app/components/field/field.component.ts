import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss']
})
export class FieldComponent implements OnInit {
  sizeField: number = 10;
  cells: string[][] = [];
  letters: string[] = [];
  numbers: string[] = [];


  ngOnInit() {
    for (let column: number = 0; column < this.sizeField; column++) {
      const rows: string[] = [];
      const columnLetter: string = String.fromCodePoint(column + 65);
      this.letters.push(columnLetter)
      this.numbers.push(`${column + 1}`)
      for (let row: number = 0; row < this.sizeField; row++) {
        const rowNumber: string = (row + 1).toString();
        rows.push(columnLetter + rowNumber);
      }
      this.cells.push(rows);
    }
  }
}
