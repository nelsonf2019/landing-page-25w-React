import "./Style.scss"
import React, { useState } from 'react'

const Carraousel = (contenido) => {
    const [carruselSelected, setCarruselSelected] = useState(0)


    return (
        <>
            <div className="my-carrousel">
                {
                    contenido.children.map((item, index) => {
                        return (
                            <div key={index} className={`${carruselSelected === index ? "item active" : "item"}`}  >
                                <div className="content">
                                    <div className="text1-s1">
                                        <h1>
                                            {item.title}
                                        </h1>
                                    </div>
                                    <div className="text2-s1">
                                        <p>
                                            {item.subTitle}
                                        </p>
                                    </div>
                                    {item.isButton === true ? (
                                        <div>
                                            <button type="button" className="btn-read-more">Read more</button>
                                        </div>
                                    ) : (null)}
                                </div>
                            </div>)
                    })
                }
            </div>
            <div className="container-points">
                {
                    contenido.children.map((item, index) => {
                        return (
                            <div key={index} onClick={() => setCarruselSelected(index)} className={`${carruselSelected === index ? "point selected" : "point"}`}></div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Carraousel