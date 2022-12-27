import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {RiTelegramLine} from 'react-icons/ri'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ovqppzu', 'template_fvyzqpm', form.current, 'FSIyWLJYg8G_Lphnb')
      

    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sepehr.haghdoust@gmail.com</h5>
            <a href="mailto:sepehr.haghdoust@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Sylvanus Haghdoust</h5>
            <a href="https://m.me/sylvanusthesorcerer" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RiTelegramLine className='contact__option-icon'/>
            <h4>Telegram</h4>
            <h5>Sepehr Sylvanus Haghdoust</h5>
            <a href="https://t.me/sylvanus_the_sorcerer">Send a message</a>
          </article>
        </div>
          {/* End of contact options */}
          <form  ref={form} onSubmit={sendEmail}>
            <input   type="text" name='name' placeholder='Your Full Name' required />
            <input   type="email" name='email' placeholder='Your Email' required />
            <textarea   name="message"  rows="7" placeholder='Your Message' required></textarea>
            <button   className='btn btn-primary' type='submit'>Send Message</button>
          </form>
      </div>
    </section>
  )
}

export default Contact
