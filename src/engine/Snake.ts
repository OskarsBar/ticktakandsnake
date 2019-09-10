import { Cell } from "./Cell";
import { Direction } from "./Direction";
export class Snake {
  head = new Cell(2, 0)
  tail = [new Cell(0, 0), new Cell(1, 0)]
  direction: Direction = 'Right'
  tailSize = 2

  setDirection(direction: Direction) {
    if (this.direction === 'Right' && direction === 'Left'||
    this.direction === 'Left' && direction === 'Right'||
    this.direction === 'Down' && direction === 'Up'||
    this.direction === 'Up' && direction === 'Down') {
      return
    }
    this.direction = direction
  }
  move() {
    this.tail.push(this.head)
    if (this.tailSize < this.tail.length) {
      this.tail.shift()
    }
    switch (this.direction) {
      case 'Right':
        this.head = new Cell(this.head.x + 1, this.head.y)
        break
      case 'Down':
        this.head = new Cell(this.head.x, this.head.y + 1)
        break
      case 'Up':
        this.head = new Cell(this.head.x, this.head.y - 1)
        break
      case 'Left':
        this.head = new Cell(this.head.x - 1, this.head.y)
        break
    }
  }
  grow() {
    this.tailSize += 3
  }
  getHead(): Cell {
    return this.head;
  }
  isSnake(cell: Cell): boolean {
    for (var i = 0; i < this.tail.length; i++) {
      if (this.tail[i].x === cell.x && this.tail[i].y === cell.y) {
        
        return true

      }
    }
    return false;
  }
  getDirection(): Direction {
    return this.direction;
  }
  getTail(): Cell[] {
    return this.tail
  }
}