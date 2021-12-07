import React, { useState } from 'react'
import { sendEmail } from "../../Api/Axios"
import './Style.scss'

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        tel: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        await sendEmail(formData)
      }

    return (
        <div className="section5" id="contact">
            <div className="content-s5">
                <div className="form-s5 container">
                    <div className="d-flex-align">
                        <div className="text1-s5">
                            <h3>Get in touch <br />
                                <span>
                                    We are hiring!
                            </span>
                            </h3>
                        </div>
                    </div>

                    <form noValidate onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} type="text" id="inputName" placeholder="Name" />
                            <input value={formData.email} onChange={(e) => { setFormData({ ...formData, email: e.target.value }) }} type="email" id="inputEmail" placeholder="Email" />
                            <input value={formData.tel} onChange={(e) => { setFormData({ ...formData, tel: e.target.value }) }} type="tel" id="inputPhone" placeholder="Phone" />
                            <textarea value={formData.message} onChange={(e) => { setFormData({ ...formData, message: e.target.value }) }} type="textarea" id="inputMessage" placeholder="Message" />
                        </div>
                        <button type="submit" className="btn-read-more rounded-pill"> Send </button>
                    </form>
                </div>
                <div className="img-derecha-s5">
                    <img src="images/contact-image.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Contact