const express = require('express');
const app = express();
const port = 3000;

// Middleware para manejar JSON
app.use(express.json());

// Datos simulados (puede ser reemplazado por una base de datos)
let usuarios = [
  { id: 1, nombre: 'Juan', edad: 25 },
  { id: 2, nombre: 'María', edad: 30 },
  { id: 3, nombre: 'Carlos', edad: 35 },
];

// Rutas

// Obtener todos los usuarios
app.get('/api/usuarios', (req, res) => {
  res.json(usuarios);
});

// Obtener un usuario por ID
app.get('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuario = usuarios.find(u => u.id === id);
  if (usuario) {
    res.json(usuario);
  } else {
    res.status(404).send({ mensaje: 'Usuario no encontrado' });
  }
});

// Crear un nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const nuevoUsuario = req.body;
  nuevoUsuario.id = usuarios.length + 1; // Generar un ID sencillo
  usuarios.push(nuevoUsuario);
  res.status(201).json(nuevoUsuario);
});

// Actualizar un usuario existente
app.put('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);
  if (usuarioIndex !== -1) {
    usuarios[usuarioIndex] = { id, ...req.body };
    res.json(usuarios[usuarioIndex]);
  } else {
    res.status(404).send({ mensaje: 'Usuario no encontrado' });
  }
});

// Eliminar un usuario
app.delete('/api/usuarios/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const usuarioIndex = usuarios.findIndex(u => u.id === id);
  if (usuarioIndex !== -1) {
    usuarios.splice(usuarioIndex, 1);
    res.send({ mensaje: 'Usuario eliminado' });
  } else {
    res.status(404).send({ mensaje: 'Usuario no encontrado' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
