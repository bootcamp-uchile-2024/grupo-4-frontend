import { ReactNode } from "react";

export interface TostadoPerfectoProviderProps {
	children: ReactNode;
}


export interface IProducts {
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

export interface Categorias {
    id: number;
    nombre: string;
}

export interface Usuario {
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

export enum Tipo {
    accesorios = "Accesorios",
    bebidas = "Bebidas",
    box = "Box",
    vacio = ""
}