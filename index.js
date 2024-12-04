// Se añade un 'listener' para que el código se ejecute solo cuando el DOM esté completamente cargado.
document.addEventListener('DOMContentLoaded', () => {
    // Se realiza una llamada a la API para obtener todos los usuarios. La URL es la del servidor que ejecuta la API.
    fetch('http://localhost:3000/api/usuarios')
      .then(response => response.json()) // Se convierte la respuesta de la API en un objeto JSON.
  });
  
  