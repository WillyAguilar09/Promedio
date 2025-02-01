function calcular() {

    let strN1 = document.getElementById("nota1").value
    let strN2 = document.getElementById("nota2").value
    let strN3 = document.getElementById("nota3").value

    if (strN1 === ""|| strN2 === ""||strN3 === "") {
        Swal.fire({
            title: 'Error!',
            text: 'El valor no debe estar vacio',
            icon: 'error',
            confirmButtonText: 'Ok'
        });}
        else {
        let a = parseInt(strN1)
        let b = parseInt(strN2)
        let c = parseInt(strN3)

        if ((a === 0 || b===0 || c===0 || a>100 || b>100 || c>100) ) {
            Swal.fire({
                title: 'Error!',
                text: 'Las notas deben estar entre 1 y 100',
                icon: 'error',
                confirmButtonText: 'Ok'
            });
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
    Swal.fire({
        title: 'Limpiado Correctamente',
        text: 'Los valores fueron borrados on con exito',
        icon: 'info',
        confirmButtonText: 'Ok'
    });
    
    
}