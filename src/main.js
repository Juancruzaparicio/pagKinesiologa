const $formInicioSesion = document.querySelector('#inicio-sesion')
const $formRegistro = document.querySelector('#registro')
const $botonIniciarSesion = document.querySelector('#iniciar-sesion')
const $botonConfirmar = document.querySelector('#confirmar')
const $botonRegistrar = document.querySelector('#registrarse')
const $botonregistro = document.querySelector('#registrar')

const usuario = {
    name: '',
    mail: '',
    password: ''
}

$botonIniciarSesion.onclick = iniciarSesion
$botonConfirmar.onclick = confirmarInicioSesion
$botonRegistrar.onclick = registroForm
$botonregistro.onclick = registrarse

function iniciarSesion(){
    $formInicioSesion.classList.remove('oculto')
    if(!$formRegistro.classList.contains('oculto')){
        $formRegistro.classList.add('oculto')
    }
}

function registroForm(){
    $formRegistro.className = ''
    if(!$formInicioSesion.classList.contains('oculto')){
        $formInicioSesion.classList.add('oculto')
    }
}

function registrarse(){
    const $inputName = document.querySelector('#name')
    const $inputMail = document.querySelector('#staticEmail')
    const $inputPassword = document.querySelector('#inputPassword')
    const errores = []
    let num = 0

    errores.push(validarRegistro($inputMail))
    errores.push(validarRegistro($inputName))
    errores.push(validarRegistro($inputPassword))

    for(let i = 0; i < errores.length; i++){
        if(errores[i] == 1){
            num++
        }
    }
    
    if(num == 3){ 
        alert('Registro valido!!!')
        usuario.mail = $inputMail.value
        usuario.name = $inputName.value
        usuario.password = $inputPassword.value
        $formRegistro.className = 'oculto'
        iniciarSesion()
    } else {
        return
    }
}

function confirmarInicioSesion(){
    const $mail = document.querySelector('#staticEmail2')
    const $password = document.querySelector('#inputPassword2')
    console.log($password)
    
    if($mail.value == '') {
        danger($mail)
        return
    } 

    if($password.value == '') {
        danger($password)
        return
    }

    const validacion = validarUsuario($mail, $password)
    if(validacion){
        document.querySelector('#h2').classList.remove('oculto')
        document.querySelector('#h2').textContent = validacion
        setTimeout(cambiarHtml, 5000)
        $formInicioSesion.classList.add('oculto')
    } else {
        alert('Mail o Contraseña invalido')
    }
    
}

function validarRegistro($input){
    if($input.value == ''){
        danger($input)
        return 0
    }
    succession($input) 
    return 1
}

function validarUsuario($mail, $password){
    if($mail.value == usuario.mail && $password.value == usuario.password){
        succession($mail)
        succession($password)
        return 'Inicio de sesion valido'
    }
    danger($mail)
    danger($password)
    return ''
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

function cambiarHtml(){
    window.location.href = './main.html'
}