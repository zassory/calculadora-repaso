
let total = "";

let p_resultado = document.getElementById("p-resultado");
let p_resultado_valor = "";
let operacion = "";

let sumar = document.getElementById("sumar");

sumar.addEventListener("click", ()=> {
    operacion = "+";
    p_resultado_valor = document.getElementById("p-resultado").innerText;
    total = total + "+";
    p_resultado.innerHTML = total;
});

let restar = document.getElementById("restar");
restar.addEventListener("click", ()=> {
    operacion = "-";
    p_resultado_valor = document.getElementById("p-resultado").innerText;
    total = total + "-";
    p_resultado.innerHTML = total;
});

let multiplicar = document.getElementById("multiplicar")
multiplicar.addEventListener("click", ()=> {
    operacion = "*";
    p_resultado_valor = document.getElementById("p-resultado").innerText;
    total = total + "*";
    p_resultado.innerHTML = total;
});

let dividir = document.getElementById("dividir");
dividir.addEventListener("click", ()=> {
    operacion = "/";
    p_resultado_valor = document.getElementById("p-resultado").innerText;
    total = total + "/";
    p_resultado.innerHTML = total;
})

let siete = document.getElementById("siete");
siete.addEventListener("click", ()=> {
    total = total + "7";
    p_resultado.innerHTML = total;
})

let ocho = document.getElementById("ocho");
ocho.addEventListener("click", ()=> {
    total = total + "8";
    p_resultado.innerHTML = total;
})

let nueve = document.getElementById("nueve");
nueve.addEventListener("click", ()=> {
    total = total + "9";
    p_resultado.innerHTML = total;
})

let cuatro = document.getElementById("cuatro");
cuatro.addEventListener("click", ()=> {
    total = total + "4";
    p_resultado.innerHTML = total;
})
let cinco = document.getElementById("cinco");
cinco.addEventListener("click", ()=> {
    total = total + "5";
    p_resultado.innerHTML = total;
})
let seis = document.getElementById("seis");
seis.addEventListener("click", ()=> {
    total = total + "6";
    p_resultado.innerHTML = total;
})
let uno = document.getElementById("uno");
uno.addEventListener("click", ()=> {
    total = total + "1";
    p_resultado.innerHTML = total;
})
let dos = document.getElementById("dos");
dos.addEventListener("click", ()=> {
    total = total + "2";
    p_resultado.innerHTML = total;
})
let tres = document.getElementById("tres");
tres.addEventListener("click", ()=> {
    total = total + "3";
    p_resultado.innerHTML = total;
})
let cero = document.getElementById("cero");
cero.addEventListener("click", ()=> {
    total = total + "0";
    p_resultado.innerHTML = total;
})
let decimal = document.getElementById("decimal");
decimal.addEventListener("click", ()=> {
    p_resultado_valor = document.getElementById("p-resultado").innerText;

    if (p_resultado_valor.indexOf(",") == "-1"){
        if(p_resultado_valor === ""){
            total = total + "0,";
            p_resultado.innerHTML = total;
        }
        else{
            total = total + ","
            p_resultado.innerHTML = total;
        }
    }    
    
})
let ac = document.getElementById("ac");
ac.addEventListener("click", ()=> {
    total = "";
    p_resultado.innerHTML = total;
})

let igual = document.getElementById("igual");
igual.addEventListener("click", ()=> {
    p_resultado_valor = document.getElementById("p-resultado").innerText;
    
    let suma = 0    
    switch (operacion) {
        case "+":
            total = p_resultado_valor.split("+")
            p_resultado.innerHTML = Number(total[0]) + Number(total[1]);
            break;
        case "-":
            total = p_resultado_valor.split("-")
            p_resultado.innerHTML = Number(total[0]) - Number(total[1]);
            break;
        case "*":
            total = p_resultado_valor.split("*")
            p_resultado.innerHTML = Number(total[0]) * Number(total[1]);
            break;
        case "/":
            total = p_resultado_valor.split("/")
            if(total[1]==="0"){
                console.log('Pasa por aqui')
                p_resultado.innerHTML = "No se puede dividir por cero";
                return;
            }            
            p_resultado.innerHTML = Number(total[0]) / Number(total[1]);
            break;
        default:
            break;
    }
    console.log(suma);

    // divisor = p_resultado_valor.indexOf("/");
    // if(divisor != -1){
    //     console.log("Es una suma");
    // }
    
    //console.log(total)
    //console.log(p_resultado_valor)
    //console.log("Igual");
})
