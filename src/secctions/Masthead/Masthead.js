import Carraousel from "./../../components/Carrousel/Carrousel"
import "./Style.scss"
import React from 'react'


const Masthead = () => {


    const contenido = [
        { id: 1, title: "Sed ut perspiciatis unde omnis iste natus 1", subTitle: " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 1", isButton: true },
        { id: 2, title: "Sed ut perspiciatis unde omnis iste natus 2", subTitle: " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 2", isButton: false },
        { id: 3, title: "Sed ut perspiciatis unde omnis iste natus 3", subTitle: " Sed ut perspicatis unde onmis iste natus error sit valupten accusatium dolorumecum 3", isButton: true }
    ]

    return (
        <div className="section1" id="home">
            <div className="content-s1">
                <Carraousel>{contenido}</Carraousel>
            </div>
        </div>
    )
}

export default Masthead