function sendData() {
    // Obtener los valores de los campos del formulario
    const fullName = document.querySelector('#floatingInput').value;
    const email = document.querySelectorAll('#floatingInput')[1].value;
    const subject = document.querySelectorAll('#floatingInput')[2].value;
    const message = document.querySelector('#floatingTextarea2').value;
  
    // Crear un objeto con los datos del formulario
    const formData = {
      fullName,
      email,
      subject,
      message
    };
  
    // Aquí puedes enviar los datos a un servidor o realizar cualquier otra acción deseada
    console.log(formData);
    // Por ejemplo, puedes enviar los datos mediante una solicitud fetch o XMLHttpRequest
  }