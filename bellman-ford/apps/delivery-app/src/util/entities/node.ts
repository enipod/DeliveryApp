export class Node {
  location: string;
  adjacents: Set<string>;

  constructor(id: string) {
    this.id = id;
    this.adjacents = new Set();
  }

  addAdjacent(value: string): void {
    this.adjacents.add(value);
  }

  removeAdjacent(value: string): void {
    this.adjacents.delete(value);
  }

  getAdjacents(): Set<string> {
    return this.adjacents;
  }

  isAdjacent(value: string): boolean {
    return this.adjacents.has(value);
  }
}
