

enum Tipo {
    accesorios = "Accesorios",
    bebidas = "Bebidas",
    box = "Box"
}

interface Categorias {
    id: number;
    nombre: string;
}

export type {Tipo, Categorias};