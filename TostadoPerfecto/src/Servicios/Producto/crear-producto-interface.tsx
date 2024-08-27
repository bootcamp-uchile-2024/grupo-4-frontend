import { Categorias, Tipo } from "../interfaces";


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


export type {RequestCreateProductoDTO, ResponseCreateProductoDTO};

