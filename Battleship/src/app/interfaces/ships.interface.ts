import { CoordsData } from './coords.interface';

interface ShipsData {
  coords: CoordsData[],
  size: number,
  isSunk: boolean
}

export { ShipsData };
