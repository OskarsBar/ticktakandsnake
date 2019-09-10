import { Cell } from "./Cell";
import { Configuration } from "./Configuration";
import { Snake } from "./Snake";

export class Grid {
  private configuration: Configuration;

  apples = [
    new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)),
    new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)),
    new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)),
    new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)),
    new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40))

  ]
  constructor(configuration: Configuration) {
    this.configuration = configuration;
  }

  seed(): void {
    for (var i = 0; i < 5; i++) {
      this.apples.push(new Cell(Math.floor(Math.random() * 80), Math.floor(Math.random() * 40)))
    }
  }

  isAppleInside(cell: Cell): boolean {

    for (var i = 0; i < this.apples.length; i++) {
      if (this.apples[i].x === cell.x && this.apples[i].y === cell.y) {
        this.removeApple(this.apples[i])
        return true

      }
    }

    return false;
  }

  removeApple(cell: Cell): void {
    for (var i = 0; i < this.apples.length; i++) {
      if (this.apples[i].x === cell.x && this.apples[i].y === cell.y) {
        this.apples.splice(i, 1)
        break
      }
    }
  }

  isDone(): boolean {
    if (this.apples.length === 0) {
      return true
    }
    return false;
  }

  getApples(): Cell[] {
    return this.apples;
  }
}
