

enum Tipo {
    accesorios = "Accesorios",
    bebidas = "Bebidas",
    box = "Box"
}

interface Categorias {
    id: number;
    nombre: string;
}

interface Producto {
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

interface Usuario{
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



export { Tipo };
export type { Categorias, Producto, Usuario };
