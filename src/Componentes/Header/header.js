import "./header.css";


function Header() {
    return (  
        <>
        <header className="head" >
            <h1 className="logo-text">LIBROS MATEA</h1>
            <div className="contenedor-links">
            <a href="#" className="links" >INICIO</a>
            <a href="#" className="links">LIBROS</a>
            </div>
        </header>
        </>
    );
}

export default Header;