import { useState } from 'react'
import Modal from '../components/Modal.jsx'

export default function Contact() {
  const [open, setOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setOpen(true)
  }

  return (
    <section className="contact-page">
      <h1>Contact us</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name
          <input type="text" name="name" required />
        </label>
        <label>
          Message
          <textarea name="message" rows="4" required />
        </label>
        <button type="submit">Send</button>
      </form>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Message sent</h2>
          <p>Thanks for reaching out — we will get back to you soon.</p>
        </Modal>
      )}
    </section>
  )
}
