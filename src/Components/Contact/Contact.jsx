import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "2b55f206-e16f-46c2-aa2c-ad40d162184f");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
    



  return (
    <div id='contact' className="contact">
        <div className="contact-title">
            <h1>Get in touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's talk</h1>
                <p>We’d love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out. I’m currently available and excited to collaborate on new opportunities. Let’s connect and create something amazing together.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" />
                        <p>sidhusidharth7075@gmail.com</p>


                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" />
                        <p>+91 9876543210</p>
                        
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" />
                        <p>Srikakulam, India</p>
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className="contact-right">
                <lable htmlFor="">Your Name</lable>
                <input type="text" placeholder="Enter your name" name='name' />
                <label htmlFor="">Your Email</label>
                <input type="email" placeholder="Enter your email" name='email' />
                <label htmlFor="">Write your message here</label>
                <textarea rows="8" placeholder="Write your message here" name='message' />
                <button className='contact-submit' type='submit'>Submit now</button>
                




            </form>
        </div>
    </div>
  )
}

export default Contact