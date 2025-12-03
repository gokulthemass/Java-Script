var roman = function(s){
    
    let num = Number(s);
      const romanValues = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 }
  ];
  let roman ="";
  for(let i = 0; i <romanValues.length; i++ ){
      while(num>=romanValues[i].value){
          roman += romanValues[i].symbol;
          num -= romanValues[i].value;
      }
  }

    return roman;
}

let input = prompt("enter: ");
console.log(roman(input));


var rmn = function(input){
    
    let num = Number(input);
        const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const hrns = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const ths = ["", "M", "MM", "MMM"];
    
    return ths[Math.floor(num / 1000)] + hrns[Math.floor((num % 1000) / 100)] + tens[Math.floor((num % 100) / 10)] + ones[num % 10];
}
let input = prompt("enter: ");
console.log(rmn(input))