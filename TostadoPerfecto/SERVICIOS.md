# Servicios


## Crear Producto:

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