function PasportIdentification(passport) {
  if (
    passport.length === 8 &&
    /[A-Za-z]/g.test(passport.substring(0, 1)) &&
    /\d/g.test(passport.substring(2, 6))
  ) {
    return passport;
  } else {
    return "Your passport value is incorrect";
  }
}
console.log(PasportIdentification("RH666666"));

function NumberIdentification(number) {
  if (/[\d]/g.test(number) && number.length === 12) {
    return number;
  } else {
    return "You number is incorrect";
  }
}
console.log(NumberIdentification("12222445p"));

function IpnIdentification(ipn) {
  if (/[\d]/g.test(ipn) || ipn.length !== 10) {
    return "You ipn is incorrect";
  } else {
    return ipn;
  }
}
console.log(IpnIdentification("a45ioio4545"));
