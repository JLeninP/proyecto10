var n, a, b, aux, i;

n = parseInt(prompt("Ingresar n: "));
a = -1;
b = 1;
for(i = 0; i < n; i++){
    aux = a + b;
    a = b;
    b = aux;
    document.write("<font size = 30>");
    document.write(aux + " ");
    document.write("</font>")
}