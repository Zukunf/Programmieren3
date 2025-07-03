class MeatEater {
    constructor() {
      this.stepCount = frameCount + 1;
      this.color = "red";
      this.energy = 100;
    }
  
    step() {
   // Finde WasserNachbarn. wenn 7 oder mehr da sind, setze Zelle auf Wasser und stop
      let WasserNachbarn = findNeighbourPositions(this.row, this.col, 1, Water);
      if (WasserNachbarn.length >= 7) { // Wenn es 7 oder mehr Wasser-Nachbarn gibt
        matrix[this.row][this.col] = new Water();   // Dann wird diese Zelle zu Wasser.
        return
      }
  
      this.eat();
  
      if (this.energy >= 60) { // Wenn Energie 60 oder mehr ist
        this.multiply(); // multiplizieren
        this.energy -= 10; // energie wird runter gehen um 30
      }
      if (this.energy <= 0) { // Wenn Energie 0 ist
        matrix[this.row][this.col] = new Empty(); // wird leer
      }
    }
  
    eat() {
      // Tier sucht (Nachbar) GrassEater frisst sie und gewinnt Energie sonst verliert es Energie
      let grasseaterNeighbours = findNeighbourPositions(this.row, this.col, 1, GrassEater);
  
      if (grasseaterNeighbours.length > 0) {
        let randomgrasseaterfield = random(grasseaterNeighbours);
        updateCreaturePosition(this, randomgrasseaterfield);
        this.energy += 10;
      } else {
        this.energy -= 0.5;
      }
    }
  
    multiply() {
      let emptyPositions = findNeighbourPositions(this.row, this.col, 0, Empty);
      if (emptyPositions.length > 0) {
        let newPos = random(emptyPositions);
        let row = newPos[0];
        let col = newPos[1];
        matrix[row][col] = new MeatEater([0], [1]);
      }
    }
  }