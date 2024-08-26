import { Tipos } from './tipos.enum';
import { Categorias } from './categorias.interface';
import { Producto } from './producto.interface';

export class Productos implements Producto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  nombre: string;

  @ApiProperty()
  descripcion: string;

  @ApiProperty()
  precio: number;

  @ApiProperty()
  imagen: string;

  @ApiProperty()
  stock: number;

  @ApiProperty()
  marca: string;

  @ApiProperty()
  origen: string;

  @ApiProperty()
  tipo: Tipos;

  @ApiProperty()
  formato: string;

  @ApiProperty()
  fecha: Date;

  @ApiProperty()
  categorias: Categorias[];

  @ApiProperty()
  destacado: boolean;
}
