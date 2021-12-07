import './Style.scss'
import React, { useState } from 'react';
import leftArrow from '../../assets/images/Icon feather-arrow-left-circle.svg'
import rightArrow from '../../assets/images/Icon feather-arrow-right-circle.svg'


const Pruducts = () => {
    const [selected, setSelected] = useState(0)
    //lo hago de esta manera a proposito, se que lo podria hacer sin necesidad de crear objetos.
    const carouselContent = [{
        title: "Primer titulo", subtitle: "Sub titulo 1",
        message: "Primer texto de ejemplo omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
        title: "Segundo titulo", subtitle: "Sub titulo 2",
        message: "Segundo texto de ejemplo unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
        title: "Tercer titulo", subtitle: "Sub titulo 3",
        message: "Tercer texto de ejemplo unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    }]



    const upPosition = () => {
        if (selected !== carouselContent.length - 1) {
            setSelected(selected + 1);
        } else {
            setSelected(0)
        }
    }
    const lowerPosition = () => {
        if (selected > 0) {
            setSelected(selected - 1)
        } else {
            setSelected(carouselContent.length - 1)
        }
    }

    return (
        <div className="section3" id="product">
            <div className="content-s3">
                <div className="container">
                    <div className="photo-background-s3">
                        <div className="block-orange-s3">
                            <div className="carousel">
                                <div className="carousel-content">
                                    {
                                        carouselContent.map((item, index) => {
                                            return (
                                                <div className={`${index===selected? "item selected" : "item"}`} key={index}>
                                                    <p className="text1-s3">{item.title}</p>
                                                    <h3 className="text2-s3">{item.subtitle}</h3>
                                                    <p className="text3-s3">{item.message}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="button-s3">
                                    <button href="" className="left-arrow"><img src={leftArrow} alt="flecha izquierda" onClick={lowerPosition} /></button>
                                    <button href="" className="left-arrow"><img src={rightArrow} alt="flecha derecha" onClick={upPosition} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pruducts