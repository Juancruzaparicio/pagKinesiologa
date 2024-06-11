const $botonPresupuesto = document.querySelector('#botonpresupuesto')
const $formPresupuesto = document.querySelector('#presupuesto')
const $formBotonesPresupeusto = document.querySelector('#botones')
const $botonConvertir = document.querySelector('#convertir')

$botonPresupuesto.onclick = presupuestoFuncion
$botonConvertir.onclick = convertir

const Paciente = {
    nombre: '',
    DNI: '',
    cantidad: 0,
    valor: 0
}

function convertir(){
    Paciente.nombre = document.querySelector('#nomyape').value
    Paciente.DNI = document.querySelector('#dni').value
    Paciente.cantidad = Number(document.querySelector('#cantidad-sesiones').value)
    Paciente.valor = Number(document.querySelector('#valor-sesiones').value)
    alert(Paciente.nombre+' '+ Paciente.DNI+' '+ Paciente.cantidad+' '+ Paciente.valor)
    validarConvertir()
}

function presupuestoFuncion(){
    $formPresupuesto.classList.remove('oculto')
    $formBotonesPresupeusto.classList.add('oculto')
}

function validarConvertir(){
    if(Paciente.nombre == ''){
        danger(document.querySelector('#nomyape'))
    }
}

function danger($input){
    if($input.classList.contains('alert-primary')){
        $input.classList.remove('alert-primary')
    }
    if($input.classList.contains('alert-success')){
        $input.classList.remove('alert-success')
    }
    $input.classList.add('alert-danger')
}

function succession($input){
    if($input.classList.contains('alert-primary')){
        $input.classList.remove('alert-primary')
    }
    if($input.classList.contains('alert-danger')){
        $input.classList.remove('alert-danger')
    }
    $input.classList.add('alert-success')
}