## 1. Ejecutar el Navegador
start src/views/login.html
## 2. Ejecutar el Servidor con Nodemon
### En la carpeta package.json, buscaremos:
"scripts": {
    "start": "nodemon src/index.js"
  },
### Este nos indicará dos cosas, el comando que se debe usar para ejecutar el archivo y la ubicación del archivo que se va a ejecutar con dicho comando
### Hay que escribir en la terminal "npm run" + nombre del comando correspondiente con la ejecución del archivo:
npm run start

### Convertir terminal en la consola de MySQL
mysql -u root -p -h 127.0.0.1 -P 3306
password: NO

# Abrir Panel del Desarrollador Web
- Ctrl + Shift + I
- Consola

# Cargar y Guardar en Repositorios Git y GitHub
## 1. Cargar modificaciones de otros colaboradores:
git fetch
git pull
## 2. Guardar todo los archivos modificados:
Ctrl K S
## 3. Guardar en GitHub al escribir en Consola:
git add .
git commit -m "escribir un comentario de lo desarrollado en tu labor"
git push

# Guardar en la Aplicación de GitHub
## 1.- Abrir la Aplicación de GitHub
## 2.- Buscar el repositorio a trabajar: Botón Grande de la parte superior izquierda con una flechita
## 3.- Escribir el Commit en el panel de la parte inferior izquierda.
## 4.- Presionar el botón de "Push" que aparecerá en la parte superior central.

# Instalaciones
## Node
### Comenzar con node para crear un package.json
npm init -y

### Instalar Dependencias del Proyecto:
npm install express express-handlebars express-session mysql express-mysql-session morgan bcryptjs passport passport-local timeago.js connect-flash express-validator

### Instalar Dependencias de Desarrollo: Para evitar el tener que reiniciar el servidor por cada modificación.
npm install nodemon -D
npm install http-server --save-dev concurrently --save-dev

### Generar Directorios
mkdir docs, src, lib, public, routes, server, views

### Generar Archivos
New-Item index.js, database.js, keys.js