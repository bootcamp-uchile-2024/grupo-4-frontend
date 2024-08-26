import { Tipos } from './tipos.enum';
import { Categorias } from './categorias.interface';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  stock: number;
  marca: string;
  origen: string;
  tipo: Tipos;
  formato: string;
  fecha: Date;
  categorias: Categorias[];
  destacado: boolean;
}
