import React, { useState } from 'react';
import { datoLibros } from './libros';
import LibrosRender from './libros-render';
import './styles.css'

const Libros = () => {
    const [libros, setLibros] = useState(datoLibros);

    function handelClick(genero) {
        const librosDatos = datoLibros.filter((datos) => {
            return datos.genero === genero
        })
        setLibros(librosDatos)
    };

    const showAll = () => {
        setLibros(datoLibros)
    }

    return (
        <div className='Content'> 
            <div className='div-btn' >
                <button onClick={() => { handelClick("Novela, Literatura fantástica") }}> Literatura fantástica</button>
                <button onClick={() => { handelClick("Novela, Ciencia ficción") }}>Ciencia ficción</button>
                <button onClick={() => { handelClick("Terror") }}>Terror</button>
                <button onClick={() => { handelClick("Realismo mágico, Fantasía oscura") }}>Fantasía oscura</button> 
                <button onClick={showAll}>X</button>
            </div>
            <div className='tablas'>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Autor</th>
                        <th>Género</th>
                        <th>N° páginas</th>
                        <th>Imagen</th>
                    </tr>
                    <tbody>
                        {libros.map(data => {
                            return <LibrosRender key={data.id}
                                titulo={data.titulo}
                                autor={data.autor}
                                genero={data.genero}
                                NumPag={data.NumPag}
                                img={data.img} />
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Libros;