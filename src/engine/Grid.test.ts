import { Grid } from "./Grid";
import { Configuration } from "./Configuration";
import { genericTypeAnnotation } from "@babel/types";

describe("Grid", () => {
  const configuration = {
    level: 0,
    speed: 100,
    width: 1000,
    height: 1000,
    nbCellsX: 100,
    nbCellsY: 100,
    cellWidth: 10,
    cellHeight: 10,
    apples: 5
  } as Configuration;

  it("should have five apples present", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();

    expect(apples.length).toBe(5);
  });
  it("should have remove apples", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();
    grid.removeApple(apples[0])
    expect(apples.length).toBe(4);
  });
  it("should have add apples if no more apples", () => {
    const grid = new Grid(configuration);

    const apples = grid.getApples();
    grid.removeApple(apples[0])
    grid.removeApple(apples[0])
    grid.removeApple(apples[0])
    grid.removeApple(apples[0])
    grid.removeApple(apples[0])
    grid.seed();
    expect(apples.length).toBe(5);
  });
});
