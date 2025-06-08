// Hoisting com var
console.log(a); // undefined
var a = 10;

// Hoisting com let
try {
  console.log(b);
  let b = 20;
} catch (e) {
  console.log("Erro com let:", e.message); //Erro com let: Cannot access 'b' before initialization
}

// Hoisting com const
try {
  console.log(c);
  const c = 30;
} catch (e) {
  console.log("Erro com const:", e.message); //Erro com const: Cannot access 'c' before initialization
}

// Hoisting com function
somar(2, 5); // 7

function somar (x,y) {
    return console.log(x + y); 
}

// Hoisting com function expression (usando var)
try{
    subtrair(5,2);
    var subtrair = function(x,y) {
        return console.log(x - y);
    };
} catch (e) {
    console.log("Erro com function expression:", e.message); //Erro com function expression: subtrair is not a function
}