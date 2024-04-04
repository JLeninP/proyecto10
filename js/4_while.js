var x, digito, s;

x = parseInt(prompt("Introducir x: "));

s = 0;
while(x != 0){
    digito = x % 10;
    x = parseInt(x / 10);
    s += digito;
}
alert("Resultado:" + s);