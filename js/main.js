const botonIniciarSesion = document.querySelector('#iniciar-sesion')
const botonRegistrarse = document.querySelector('#registrarse')
const botonCargar = document.querySelector('#cargar')
const form = document.querySelector('#inicio-de-sesion')

botonIniciarSesion.onclick = function() {
    botonIniciarSesion.className = 'oculto'
    botonRegistrarse.className = 'oculto'
    form.className = ''
}

botonCargar.onclick = function() {
    const user = document.querySelector('#user').value
    const password = document.querySelector('#password').value

    inicioDeSesion(user,password)
}

function inicioDeSesion(user, password) {
    if(user){
        if(password){
            alert(user, password)
        }
    }
}