import "./Header.css"

function Header() {
    return (
        <>
            <div id="header">
                <h1 className="centrado">TOSTADO PERFECTO</h1>
                <div id="contenedor-imagen">
                   <img src="\src\imagenes\fondo2.0.jpg" alt="fondo" />
                </div>
                <h2 className="centrado">Café de Especialidad</h2>
            </div>
        </>
    )
}

export default Header;