// index.js
// servidor > index.js

// Cargar el paquete de express, una librería de Node que proporciona la escritura de manejadores de peticiones
// con diferentes verbos HTTP en diferentes caminos URL (rutas).
const express = require("express");
const app = express();

// Cargar el paquete de mysql para conectar la base de datos.
const mysql = require("mysql");

// Cargar el cors.
// NOTA: Se corrige el error tipográfico de 'require("require")' a 'require("cors")'.
const cors = require("cors");

// Ejecutar Middlewares antes de que el usuario acceda a las rutas.
// 'cors()' permite solicitudes desde diferentes orígenes (necesario para que el frontend React se conecte al backend).
app.use(cors());
// 'express.json()' para analizar cuerpos de solicitud entrantes con JSON.
app.use(express.json());

// Configuración de la conexión a la base de datos MySQL.
const db = mysql.createConnection({
  host: "localhost",   // Dirección del host de la base de datos
  user: "root",      // Nombre de usuario de la base de datos
  password: "",      // Contraseña del usuario de la base de datos (vacía en este caso)
  database: "db_hotel" // Nombre de la base de datos
});

// Método para registrar/crear un nuevo usuario (ruta POST).
// Maneja las solicitudes POST a '/create'.
app.post("/create", (req, res) => {
  // Extraer los datos del cuerpo de la solicitud (req.body).
  const id_usuario = req.body.id_usuario;
  const usuario = req.body.usuario;
  const nombre = req.body.nombre;
  const apellido = req.body.apellido;
  const correo = req.body.correo;
  const password = req.body.password;
  const id_tipo = req.body.id_tipo;

  // Consulta SQL para insertar los datos en la tabla 'datos_usuario'.
  // Los '?' son placeholders que MySQL reemplazará con los valores del array.
  db.query("INSERT INTO datos_usuario(id_usuario, usuario, nombre, apellido, correo, password, id_tipo) VALUES(?,?,?,?,?,?,?)",
    [id_usuario, usuario, nombre, apellido, correo, password, id_tipo],
    (error, result) => {
      // Manejar posibles errores en la consulta.
      if (error) {
        console.log(error); // Imprimir el error en la consola del servidor.
        res.status(500).send("Error al registrar el usuario"); // Enviar una respuesta de error al cliente.
      } else {
        // Si la inserción fue exitosa, enviar un mensaje de éxito.
        res.send("registro exitoso");
      }
    });
});

// Puerto de escucha del servidor.
// El servidor Express escucha en el puerto 3001.
app.listen(3001, () => {
  console.log("Puerto activo en el servidor: 3001"); // Mensaje de confirmación cuando el servidor arranca.
});

//para poder hacer un add y subirlo al repo