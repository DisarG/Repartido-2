import React from 'react';
import './styles.css'

const LibrosRender = (props) => {
    return (
        <tr className='books-table'>
            <td> {props.titulo} </td>
            <td> {props.autor} </td>
            <td> {props.genero} </td>
            <td> {props.NumPag} </td>
            <img src={props.img} width="100px" />
        </tr>
    )
}

export default LibrosRender
