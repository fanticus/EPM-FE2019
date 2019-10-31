import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToolsService {

  public getRandom = (min: number, max: number): number => Math.round(Math.random() * (max - min)) + min;
}
