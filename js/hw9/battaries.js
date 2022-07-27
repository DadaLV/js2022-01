class Battery {
  constructor(name, model, size, type) {
    this.name = name;
    this.model = model;
    this.size = size;
    this.type = type;
  }
  RechargeIndicator(charge) {
    if (charge === 0) {
      return "The battery must be charged";
    }
  }
}

class Table {
  constructor(color, material, size, options) {
    this.color = color;
    this.size = size;
    this.material = material;
    this.options = options;
  }
}

class Doors {
  constructor(color, material, size) {
    this.color = color;
    this.size = size;
    this.material = material;
  }
  Status(open) {
    if (open) {
      return "The door is open";
    } else {
      return "The door is closed";
    }
  }
  Lock(open) {
    if (open) {
      this.door.Status === !open;
    }
  }
}

class Conditioner {
  constructor(energyConsuptionPerHour, productivity, color, maxHeat, area) {
    this.energyConsuptionPerHour = energyConsuptionPerHour;
    this.productivity = productivity;
    this.color = color;
    this.maxHeat = maxHeat;
    this.area = area;
  }
  suit(color) {
    let roomColor;
    if (roomColor === this.color) {
      return "This conditioner suites you";
    } else {
      return "This conditioner doesn't suites your room color";
    }
  }

  temperature(time, roomArea) {
    let workingTime;
    return this.maxHeat * time * roomArea;
  }

  consumption(hours) {
    return hours * this.energyConsuptionPerHour;
  }

  quantaty(roomArea) {
    return Math.ceil(roomArea / this.area);
  }
}
