class Marker {
  constructor(color, quantaty, printMethod) {
    this.color = color;
    this.quantaty = quantaty;
  }
  printMethod(str) {
    str.length = this.quantaty.match(/^\s/g).length * 2;
    str.style.color = this.color;
    // Marker.addEventListener("keydown", function (e) {
    //   if (str.length>=this.quantaty.match(/^\s/g).length * 2) {
    //     e.preventDefault();
    //   }
    // });
  }
}

class Refill extends Marker {
  refill(points) {
    refilledQuantaty = this.quantaty + points;
  }
}
