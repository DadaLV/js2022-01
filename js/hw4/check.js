function check() {
  let obj = {
    good: this.good,
    quantaty: this.quantaty,
    price: this.price,
}
let print = JSON.stringify(obj);
console.log(print);
let sum = this.price * this.quantaty;
console.log(sum);
let sortedPrice =
}