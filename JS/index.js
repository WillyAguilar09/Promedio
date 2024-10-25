function calcular() {

    let strN1 = document.getElementById("nota1").value
    let strN2 = document.getElementById("nota2").value
    let strN3 = document.getElementById("nota3").value

    if (strN1 === "") {
        alert("Valor en Blanco")
    } else if (strN2 === "") {
        alert("Valor en blanco")
    } else if (strN3 === "") {
        alert("Valor en Blanco")
    } else {
        let a = parseInt(strN1)
        let b = parseInt(strN2)
        let c = parseInt(strN3)

        if ((a === 0 || b===0 || c===0 || a>100 || b>100 || c>100) ) {
            alert("las notas deben estar entre cero y 100")
        } else {
            let prom=(a+b+c)/3
            document.getElementById("promedio").value = prom
        }
    }
}
function limpiar (){
    document.getElementById("nota1").value=""
    document.getElementById("nota2").value=""
    document.getElementById("nota3").value=""
    document.getElementById("promedio").value=""

    
    
}