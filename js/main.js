const botonIniciarSesion = document.querySelector('#iniciar-sesion')
const botonRegistrarse = document.querySelector('#registrarse')
const botonCargar = document.querySelector('#cargar')
const botonRgistro = document.querySelector('#registrar')
const formInicioSesion = document.querySelector('#inicio-de-sesion')
const formRegistro = document.querySelector('#registrarse-form') 

const usuario = {
    userName: '',
    userPassword: '',
    userMail: ''
}

botonIniciarSesion.onclick = function() {
    botonIniciarSesion.className = 'oculto'
    botonRegistrarse.className = 'oculto'
    formInicioSesion.className = ''
}

botonCargar.onclick = function() {

    inicioDeSesion(0)
}

botonRegistrarse.onclick = function() {
    botonIniciarSesion.className = 'oculto'
    botonRegistrarse.className = 'oculto'
    formRegistro.className = ''
}

botonRgistro.onclick = function(){
    const user = formRegistro['reg-user'].value
    const password = formRegistro['reg-password'].value
    const mail = formRegistro.mail.value
    registro(user, password, mail)
}

function inicioDeSesion(a) {
    if(a == 1){
        formInicioSesion.className = ''
        formRegistro.className = 'oculto'
    }
    const user = formInicioSesion.user.value
    const password = formInicioSesion.password.value
    const valido = document.querySelector('#h2')
    if(user == usuario.userName){
        if(password == usuario.userPassword){
            valido.textContent = `Inicio de sesion valido para ${user} (aguarde unos 5 segundos)`
            valido.className = ''
            setTimeout(cambiarHtml(), 100000)
        }else{
            alert('password invalido')
        }
    }else {
        alert('user invalido')
    }
}

function registro(user,password,mail) {
    if(user) {
        if(password){
            if(mail){
                usuario.userName = user
                usuario.userPassword = password
                usuario.userMail = mail
                inicioDeSesion(1)
            }
        }
    }
    
}

function cambiarHtml(){
    window.location.href = './main.html'
}