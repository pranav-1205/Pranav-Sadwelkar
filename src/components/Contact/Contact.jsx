import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [messageState, setMessageState] = useState({ text: '', type: '' })

  useEffect(() => {
    emailjs.init('4LYJzhnyEsZ0CYZNi')
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.message) {
      setMessageState({ text: 'Enter all the input fields', type: 'error' })
      setTimeout(() => setMessageState({ text: '', type: '' }), 3000)
      return
    }

    try {
      await emailjs.sendForm(
        'service_no0gp2c',
        'template_tytxwor',
        e.target
      )
      setMessageState({ text: 'Thanks, your message was sent successfully.', type: 'success' })
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setMessageState({ text: '', type: '' }), 5000)
    } catch (error) {
      setMessageState({ text: 'Oops! Something went wrong.', type: 'error' })
    }
  }

  return (
    <section className="contact container section">
      <span className="section-subtitle">Contact <span> Me</span></span>
      <h2 className="section-title">Turn Ideas Into Reality</h2>

      <div className="contact-container grid">
        <div className="contact-content grid">
          <article className="contact-card">
            <h3 className="contact-title">Email</h3>
            <p className="contact-info">
              <a href="mailto:sadwelkarpranav12@gmail.com">sadwelkarpranav12@gmail.com</a>
              <br />
              <a href="mailto:sadwelkarpranav05@gmail.com">sadwelkarpranav05@gmail.com</a>
            </p>
          </article>

          <article className="contact-card">
            <h3 className="contact-title">Phone</h3>
            <p className="contact-info">
              <a href="tel:4787417887">91+ 7887 91 4787</a>
            </p>
          </article>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
          <div className="contact-group grid">
            <div className="contact-div">
              <label htmlFor="contact-name" className="contact-tag">
                Your full Name <b>*</b>
              </label>
              <input
                type="text"
                className="contact-input"
                name="name"
                id="contact-name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="contact-div">
              <label htmlFor="contact-email" className="contact-tag">
                Your Email Address <b>*</b>
              </label>
              <input
                type="email"
                className="contact-input"
                name="email"
                id="contact-email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="contact-div contact-area">
            <label htmlFor="contact-message" className="contact-tag">
              Your Message <b>*</b>
            </label>
            <textarea
              className="contact-input"
              name="message"
              id="contact-message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="button button-first contact-button">Send Message</button>

          {messageState.text && (
            <p
              className={`message ${messageState.type === 'success' ? 'color-first' : 'color-red'}`}
              id="message"
            >
              {messageState.text}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact