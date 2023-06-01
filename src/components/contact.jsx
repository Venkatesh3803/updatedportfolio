import React from 'react'
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai"
import { GrLocation } from "react-icons/gr"

const Contact = () => {
    return (
        <div id='contact'>
            <h1>Contact <span>Me</span></h1>
            <p>Im at your Service</p>
            <div className="contact-container">
                <div className="address-items">
                    <div className="address">
                        <AiOutlinePhone className='icons' style={{ border: "none" }} />
                        <h3>Call me on</h3>
                        <p>+91 8463944069</p>
                    </div>
                    <div className="address">
                        <AiOutlineMail className='icons' style={{ border: "none" }} />
                        <h3>email</h3>
                        <p>venkateshvnky3803@gmail.com</p>
                    </div>
                    <div className="address">
                        <GrLocation className='icons' style={{ border: "none" }} />
                        <h3>Location</h3>
                        <p>Uppal, Hyderabad</p>
                    </div>
                </div>

                <form action="">
                    <h2>Mail me for Collabration</h2>
                    <div className="form-inputs">
                        <input type="text" placeholder='Name' name="" id="" />
                        <input type="email" placeholder='Email' name="" id="" />
                    </div>
                    <div className="form-input">
                        <input type="text" placeholder='Subject' name="" id="" />
                    </div>
                    <div className="form-input">
                        <textarea type="textarea" rows={4} placeholder='Message' name="" id="" />
                    </div>
                    <button style={{ alignSelf: "end", width: "20%" }}>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
