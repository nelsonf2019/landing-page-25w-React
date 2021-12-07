import './Style.scss'
import React, {useEffect} from 'react'
import logo from '../../assets/images/top-logo.svg'

const Navbar = () => {
    const nav=React.createRef()
    const button=React.createRef()

    const displayMenu= () =>{
        button.current.classList.toggle("change");
        if (nav.current.className === "nav") {
            nav.current.className += " responsive";
        } else {
            nav.current.className = "nav";
        }
    }

    //necesito usar el use efect ya que nav todavia no esta referenciado. Una vez que se renderiza todo el use efect es aplicado. y ya nav no es nulo
    useEffect(
         ()=>{
            window.onscroll = () => {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                    nav.current.style.marginBottom = "-4px";
                    nav.current.style.marginTop = "-4px";
                    nav.current.style.transition = "0.4s";
                    nav.current.style.backgroundColor = "rgba(0, 0, 0, 0.212)";
                } else {
                    nav.current.style.margin = "0px 0px";
                    nav.current.style.transition = "0.4s";
                    nav.current.style.backgroundColor = "transparent";
                }
            }
         }
    )
    


    return (
        <header>
            <nav ref={nav} className="nav" id="nav">
                <ul className="nav-conteiner">
                    <li className="nav-logo"><a href="#home"><img src={logo} alt='logo 25Watts'/></a></li>
                    <div ref={button} className="mobile-menu" onClick={()=>displayMenu()}>
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                    <div className="navLinks" id="navLinks">
                        <li className="nav-element"><a href="#home">Home</a></li>
                        <li className="nav-element"><a href="#about">About</a></li>
                        <li className="nav-element"><a href="#product">Products</a></li>
                        <li className="nav-element"><a href="#services">Services</a></li>
                        <li className="nav-element"><a href="#contact">Contact</a></li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar