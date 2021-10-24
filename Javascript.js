const form = document.getElementById("formulario")
const name = document.getElementById("Name")
const email = document.getElementById("Email")
const mensaje = document.getElementById("Mensaje")
const submitButton = document.getElementById("btnform")

  function enviarFormulario (e){
    e.preventDefault();
    console.log('el formulario fue enviado'); 

    if (name.value === null || name.value === '' 
    || email.value === null || email.value === '' 
    || mensaje.value === null || mensaje.value === '')

    {
      alert("Todos los campos son obligatorios");
    }
  
    else{
      (alert('Su mensaje se envío correctamente')); form.reset()
    } 
  }
