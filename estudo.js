let tabuada = 6;
function escreva(){
    document.write("<h1> TABUADA DO " + tabuada + "</h1>")
    document.write(tabuada + " x 1 =" + (tabuada*1)+ "<br>");
    document.write(tabuada + " x 2 =" + (tabuada*2)+ "<br>");
    document.write(tabuada + " x 3 =" + (tabuada*3)+ "<br>");
    document.write(tabuada + " x 4 =" + (tabuada*4)+ "<br>");
    document.write(tabuada + " x 5 =" + (tabuada*5)+ "<br>");
    document.write(tabuada + " x 6 =" + (tabuada*6)+ "<br>");
    document.write(tabuada + " x 7 =" + (tabuada*7)+ "<br>");
    document.write(tabuada + " x 8 =" + (tabuada*8)+ "<br>");
    document.write(tabuada + " x 9=" + (tabuada*9)+ "<br>");
    document.write(tabuada + " x 10 =" + (tabuada*10)+ "<br>");
    
}

let lista = ["jesus", "spesato", "duarte","jorge", "lurdes", "jesus"];

function mostralista(){
    document.write("tamanho da lista: " + lista.length + "<br>");
    
    for(let i = 0; i < lista.length; i++){
    document.write("Professor; " + lista[1] + "<br>");
    }
}

function mutiplica(){
    for(let i = 1; i <= 10; i++){
        document.write("tabuada do  i = " + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(tabuada + " x "+j+" = " + (tabuada*1)+ "<br>");
        }
    }
}

function total(){
    let v = document.getElementById("valor").value ;
    let j = document.getElementById("juros").value ;
    let t = document.getElementById("messes").value ;
    let r = 0;
    for(let i=1; i <= t; i++){
         r = v * (1 + j/100);
         document.write("Mes " + i + "valor; " + r + "<br>");
         v = r;
        
    }
    

    document.write("Resultado: " + r);
    
}
function media(){
    let n1 = document.getElementById("n1").value;
    let n1 = document.getElementById("n2").value;
    let n1 = document.getElementById("n3").value;
    let n1 = document.getElementById("n4").value;

    let r = (Number (n1)+Number(n2)+Number(n3)+Number(n4))/4;
    document.getElementById("result").innerHTML = "media: " + r;

}
