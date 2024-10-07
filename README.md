
# Tostado Perfecto

 Plataforma en línea dedicada a la venta de café de especialidad, granos de café, maquinaria, accesorios y complementos. Permitiendo tanto a los amantes del café como a los nuevos conocedores descubrir, comprar y aprender sobre el café de manera rápida y eficiente.


## Requisitos previos

Asegúrate de tener las siguientes herramientas instaladas antes de continuar con la instalación del proyecto:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) como gestor de paquetes
- [Git](https://github.com/) para clonar el repositorio

## Instalación

Sigue los siguientes pasos para instalar y ejecutar el proyecto en tu máquina local.
### 1. Clonar el repositorio

```bash
git clone https://github.com/bootcamp-uchile-2024/grupo-4-frontend
```
### 2. Acceder al directorio del proyecto

```bash
cd grupo-4-frontend
```
### 3. Instalar dependencias

```bash
npm install
```
### 4. Ejecutar el servidor de desarrollo
Para iniciar el servidor de desarrollo con Vite:

```bash
npm run dev
```
### 5. Compilar el proyecto para producción

```bash
npm run build
```

## Tecnologías utilizadas

 * **Vite** (herramienta de construcción rápida para proyectos web) 
 * **React** (biblioteca para la construcción de interfaces de usuario) 
 * **TypeScript** 
 * **React Router** 
 * **React Boostrap** (front-end framework)
 * **FontAwesome** (libreria de iconos) 
 * **Formik** (libreria de formularios) 
 * **Yup** (creador de esquemas para el análisis y validación) 
  
  


## Servicios


### Crear Producto:

__Ruta__: src\Servicios\crear-producto\crear-producto-interface.tsx

__URL__: http://localhost:3000/admin => crear producto

__Interfaz de Consulta__:

    interface RequestCreateProductoDTO {
        nombre: string;
        descripcion: string;
        precio: number;
        imagen: string;
        stock: number;
        marca: string;
        origen: string;
        tipo: Tipo;
        formato: string;
        fecha: Date;
        categorias : Categorias;
        destacado: boolean;
    }

__Interfaz de Respuesta__:


    interface ResponseCreateProductoDTO{
        id: number;
        nombre: string;
        descripcion: string;
        precio: number;
        imagen: string;
        stock: number;
        marca: string;
        origen: string;
        tipo: Tipo;
        formato: string;
        fecha: Date;
        categorias: Categorias;
        destacado: boolean;
    }

## Interfaces varias

__Tipo de Producto__: 

    enum Tipo {
        accesorios = "Accesorios",
        bebidas = "Bebidas",
        box = "Box"
    }

__Categoria del Producto__: 

    interface Categorias {
        id: number;
        nombre: string;
    }

    
## Crear Usuario:

__Ruta__: src\Servicios\Producto\crear-usuario-interface.tsx

__URL__: http://localhost:3000/admin => crear usuario



__Interfaz de Consulta__:

    interface RequestCreateUsuarioDTO {
        nombre: string;
        apellido: string;
        direccion: string;
        comuna: string;
        ciudad: string;
        region: string;
        telefono: number;
        correo: string;
        contrasenna: string;  
    }


__Interfaz de Respuesta__:

    interface ResponseCreateUsuarioDTO{
        nombre: string;
        apellido: string;
        direccion: string;
        comuna: string;
        ciudad: string;
        region: string;
        telefono: number;
        correo: string;     
    }
