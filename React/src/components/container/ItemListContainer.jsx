import React, {useState,useEffect} from 'react'
import ItemList from './ItemList/ItemList'
import data from '../../Data/data'

const ItemListContainer = (props) =>{

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    useEffect(()=>{
        const listaDeProductos = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(data)
            },2000)
        })
        listaDeProductos.then((data)=>{
            setProductos(data)
            setCargando(false)
        })
    },[])

    return(
        <div>
            {props.titulo}
            {cargando ? <p> Cargando productos</p> : <ItemList productos={productos}/>}
        </div>
    )
}

export default ItemListContainer