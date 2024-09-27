
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

export type {RequestCreateUsuarioDTO, ResponseCreateUsuarioDTO};

