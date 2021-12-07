import "./style.scss"
import image from './../../assets/images/footer-logo.svg'

const Footer = () => {
    return (
        <footer>
            <div className="container d-flex">
                <p>2020 © All rights reserved.</p>
                <img src={image} alt="logo footer"/>
            </div>
        </footer>
    )
}

export default Footer