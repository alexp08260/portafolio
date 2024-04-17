////////////////////////////encriptador/////////////////////////////////////
function encriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var clave = parseInt(document.getElementById("clave").value);

    var resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {  // Mayúsculas
            resultado += String.fromCharCode((charCode - 65 + clave) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {  // Minúsculas
            resultado += String.fromCharCode((charCode - 97 + clave) % 26 + 97);
        } else {
            resultado += mensaje[i];
        }
    }

    document.getElementById("resultado").innerText = resultado;
}

function desencriptar() {
    var mensaje = document.getElementById("mensaje").value;
    var clave = parseInt(document.getElementById("clave").value);

    var resultado = "";
    for (var i = 0; i < mensaje.length; i++) {
        var charCode = mensaje.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            resultado += String.fromCharCode((charCode - 65 - clave + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            resultado += String.fromCharCode((charCode - 97 - clave + 26) % 26 + 97);
        } else {
            resultado += mensaje[i];
        }
    }

    document.getElementById("resultado").innerText = resultado;
}

/////////////////////////////////////////////////calculadora////////////////////////////////////////////////////


function appendToDisplay(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function calculate() {
    try {
      document.getElementById('display').value = eval(document.getElementById('display').value);
    } catch (error) {
      document.getElementById('display').value = 'Error';
    }
  }

  ////////////////////////////////////////formulario/////////////////////////////////////////////////////////////////



  document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario
    
    // Reiniciar mensajes de error
    document.getElementById('nombreError').innerText = '';
    document.getElementById('correoError').innerText = '';
    document.getElementById('mensajeError').innerText = '';
    
    // Obtener valores de los campos
    var nombre = document.getElementById('nombre').value.trim();
    var correo = document.getElementById('correo').value.trim();
    var mensaje = document.getElementById('mensaje').value.trim();
    
    // Validar nombre
    if (nombre === '') {
      document.getElementById('nombreError').innerText = 'El nombre es obligatorio.';
    } else if (nombre.length > 50) {
      document.getElementById('nombreError').innerText = 'El nombre debe tener menos de 50 caracteres.';
    }
    
    // Validar correo
    var correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      document.getElementById('correoError').innerText = 'Ingrese un correo válido.';
    }
    
    // Validar mensaje
if (mensaje.trim() === '') {
    document.getElementById('mensajeError').innerText = 'No se puede dejar el campo en blanco.';
  } else if (mensaje.length > 300) {
    document.getElementById('mensajeError').innerText = 'El mensaje no puede tener más de 300 caracteres.';
  } else {
    // Limpiar mensaje de error si no hay errores
    document.getElementById('mensajeError').innerText = '';
  
    // Si no hay errores, se puede enviar el formulario
    if (nombre !== '' && nombre.length <= 50 && correoRegex.test(correo)) {
      // Aquí podrías agregar código para enviar el formulario, por ejemplo, a través de AJAX
      alert('Formulario enviado correctamente');
    }
  }

  });
